/**
 * Copyright 2015 CANAL+ Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file defines a global clock for the RxPlayer.
 *
 * Each clock tick also pass informations about the current state of the
 * video element to sub-parts of the player.
 */

import objectAssign = require("object-assign");
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ReplaySubject } from "rxjs/ReplaySubject";
import config from "../../config";
import { getLeftSizeOfRange, getRange } from "../../utils/ranges";

// Informations recuperated on the video element on each clock
// tick
interface IVideoInfos {
  bufferGap : number;
  buffered : TimeRanges;
  currentRange : {
    start : number;
    end : number;
  }|null;
  currentTime : number;
  duration : number;
  ended: boolean;
  paused : boolean;
  playbackRate : number;
  readyState : number;
  seeking : boolean;
  state : string;
}

type stalledStatus = {
  reason : "seeking" | "not-ready" | "buffering";
  timestamp : number;
} | null;

// Global informations emitted on each clock tick
export interface IClockTick extends IVideoInfos {
  stalled : stalledStatus;
}

const {
  SAMPLING_INTERVAL_MEDIASOURCE,
  SAMPLING_INTERVAL_NO_MEDIASOURCE,
  RESUME_GAP_AFTER_SEEKING,
  RESUME_GAP_AFTER_NOT_ENOUGH_DATA,
  RESUME_GAP_AFTER_BUFFERING,
  STALL_GAP,
} = config;

/**
 * HTMLMediaElement Events for which timings are calculated and emitted.
 * @type {Array.<string>}
 */
const SCANNED_VIDEO_EVENTS = [
  "canplay",
  "play",
  "progress",
  "seeking",
  "seeked",
  "loadedmetadata",
  "canplay",
  "ratechange",
];

/**
 * Returns the amount of time in seconds the buffer should have ahead of the
 * current position before resuming playback. Based on the infos of the stall.
 * Waiting time differs between a "seeking" stall and a buffering stall.
 * @param {Object|null} stalled
 * @returns {Number}
 */
function getResumeGap(stalled : stalledStatus) : number {
  if (!stalled) {
    return 0;
  }

  switch (stalled.reason) {
    case "seeking":
      return RESUME_GAP_AFTER_SEEKING;
    case "not-ready":
      return RESUME_GAP_AFTER_NOT_ENOUGH_DATA;
    default:
      return RESUME_GAP_AFTER_BUFFERING;
  }
}

/**
 * TODO I just don't get it for this one.
 * gap + range.end ??? HELP
 * @param {Number} gap
 * @param {Object} range
 * @param {Number} duration
 * @returns {Boolean}
 */
function isEnding(
  bufferGap : number,
  currentRange : {
    start : number;
    end : number;
  }|null,
  duration : number
) : boolean {
  return currentRange != null &&
    (duration - (bufferGap + currentRange.end)) <= STALL_GAP;
}

/**
 * Generate a basic timings object from the video element and the eventName
 * which triggered the request.
 * @param {HTMLMediaElement} video
 * @param {string} currentState
 * @returns {Object}
 */
function getVideoInfos(
  video : HTMLMediaElement,
  currentState : string
) : IVideoInfos {
  const {
    buffered,
    currentTime,
    duration,
    ended,
    paused,
    playbackRate,
    readyState,
    seeking,
  } = video;

  return {
    bufferGap: getLeftSizeOfRange(buffered, currentTime),
    buffered,
    currentRange: getRange(buffered, currentTime),
    currentTime,
    duration,
    ended,
    paused,
    playbackRate,
    readyState,
    seeking,
    state: currentState,
  };
}

/**
 * Infer stalled status of the video based on:
 *   - the return of the function getVideoInfos
 *   - the previous timings object.
 *
 * @param {Object} prevTimings - Previous timings object. See function to know
 * the different properties needed.
 * @param {Object} currentTimings - Current timings object. This does not need
 * to have every single infos, see function to know which properties are needed.
 * @param {Boolean} withMediaSource - False if the directfile API is used.
 * @returns {Object|null}
 */
function getStalledStatus(
  prevTimings : IClockTick,
  currentTimings : IVideoInfos,
  withMediaSource : boolean
) : stalledStatus {
  const {
    state: currentState,
    currentTime,
    bufferGap,
    currentRange,
    duration,
    paused,
    readyState,
    ended,
  } = currentTimings;

  const {
    stalled: prevStalled,
    state: prevState,
    currentTime: prevTime,
  } = prevTimings;

  const ending = isEnding(bufferGap, currentRange, duration);

  const canStall = (
    readyState >= 1 &&
    currentState !== "loadedmetadata" &&
    !prevStalled &&
    !(ending || ended)
  );

  let shouldStall;
  let shouldUnstall;

  if (withMediaSource) {
    if (
      canStall &&
      (bufferGap <= STALL_GAP || bufferGap === Infinity || readyState === 1)
    ) {
      shouldStall = true;
    } else if (
      prevStalled &&
      readyState > 1 &&
      bufferGap < Infinity && (bufferGap > getResumeGap(prevStalled) || ending || ended)
    ) {
      shouldUnstall = true;
    }
  }

  // when using a direct file, the video will stall and unstall on its
  // own, so we only try to detect when the video timestamp has not changed
  // between two consecutive timeupdates
  else {
    if (
      canStall &&
      (!paused && currentState === "timeupdate" &&
        prevState === "timeupdate" && currentTime === prevTime ||
        currentState === "seeking" && bufferGap === Infinity)
    ) {
      shouldStall = true;
    } else if (
      prevStalled &&
      (currentState !== "seeking" && currentTime !== prevTime ||
        currentState === "canplay" ||
        bufferGap < Infinity &&
        (bufferGap > getResumeGap(prevStalled) || ending || ended)
      )
    ) {
      shouldUnstall = true;
    }
  }

  if (shouldStall) {
    let reason : "seeking" | "not-ready" | "buffering";
    if (currentState === "seeking" || currentTimings.seeking) {
      reason = "seeking";
    } else if (readyState === 1) {
      reason = "not-ready";
    } else {
      reason = "buffering";
    }
    return {
      reason,
      timestamp: Date.now(),
    };
  }
  else if (shouldUnstall) {
    return null;
  }
  else {
    return prevStalled;
  }
}

/**
 * Timings observable.
 *
 * This streams samples snapshots of player's current state:
 *   * time position
 *   * playback rate
 *   * current buffered range
 *   * gap with current buffered range ending
 *   * video duration
 *
 * In addition to sampling, this stream also reacts to "seeking" and "play"
 * events.
 *
 * Observable is shared for performance reason: reduces the number of event
 * listeners and intervals/timeouts but also limit access to <video>
 * properties and gap calculations.
 *
 * The sampling is manual instead of based on "timeupdate" to reduce the
 * number of events.
 * @param {HTMLMediaElement} video
 * @param {Object} options
 * @returns {Observable}
 */
function createClock(
  video : HTMLMediaElement,
  { withMediaSource } : { withMediaSource : boolean }
) : Observable<IClockTick> {
  return Observable.create((obs : Observer<IClockTick>) => {
    let lastTimings : IClockTick = objectAssign(getVideoInfos(video, "init"),
      { stalled: null }
    );

    /**
     * Emit timings sample.
     * Meant to be used as a callback on various async events.
     * @param {Event} [evt] - The Event which triggered the callback, if one.
     */
    function emitSample(evt? : Event) {
      const timingEventType = evt && evt.type || "timeupdate";
      const videoTimings = getVideoInfos(video, timingEventType);
      const stalledState =
        getStalledStatus(lastTimings, videoTimings, withMediaSource);

      // /!\ Mutate videoTimings
      lastTimings = objectAssign(videoTimings,
        { stalled: stalledState }
      );
      obs.next(lastTimings);
    }

    const interval = withMediaSource
      ? SAMPLING_INTERVAL_MEDIASOURCE
      : SAMPLING_INTERVAL_NO_MEDIASOURCE;

    const intervalID = setInterval(emitSample, interval);
    SCANNED_VIDEO_EVENTS.forEach((eventName) =>
      video.addEventListener(eventName, emitSample));

    obs.next(lastTimings);

    return () => {
      clearInterval(intervalID);
      SCANNED_VIDEO_EVENTS.forEach((eventName) =>
        video.removeEventListener(eventName, emitSample));
    };
  })
    .multicast(() => new ReplaySubject<IClockTick>(1)) // Always emit the last
                                                       // item on subscription
    .refCount();
}

export default createClock;
