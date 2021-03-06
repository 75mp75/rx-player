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

import { Observable } from "rxjs/Observable";
import {
  canPlay,
  hasLoadedMetadata,
} from "../../compat";
import log from "../../utils/log";

/**
 * Set the initial time given as soon as possible on the video element.
 * Emit "null" when done.
 * @param {HMTLMediaElement} videoElement
 * @param {number|Function} startTime
 * @returns {Observable}
 */
function doInitialSeek(
  videoElement : HTMLMediaElement,
  startTime : number|(() => number)
) : Observable<void> {
  return hasLoadedMetadata(videoElement)
    .do(() => {
      log.info("set initial time", startTime);

      // reset playbackRate to 1 in case we were at 0 (from a stalled
      // retry for instance)
      videoElement.playbackRate = 1;
      videoElement.currentTime = typeof startTime === "function" ?
        startTime() : startTime;
    })
    .share();
}

/**
 * @param {HTMLMediaElement} videoElement
 * @param {boolean} autoPlay
 * @returns {Observable}
 */
function handleCanPlay(
  videoElement : HTMLMediaElement,
  autoPlay : boolean
) : Observable<void> {
  return canPlay(videoElement)
    .do(() => {
      log.info("canplay event");
      if (autoPlay) {
        /* tslint:disable no-floating-promises */
        videoElement.play();
        /* tslint:enable no-floating-promises */
      }
    })
    .share();
}

/**
 * @param {HTMLMediaElement} videoElement
 * @param {number|Function} startTime
 * @param {boolean} autoPlay
 * @returns {object}
 */
export default function handleVideoEvents(
  videoElement : HTMLMediaElement,
  startTime : number|(() => number),
  autoPlay : boolean
) : {
  initialSeek$ : Observable<void>;
  loadAndPlay$ : Observable<void>;
} {
  const initialSeek$ = doInitialSeek(videoElement, startTime);
  const hasHandledCanPlay$ = handleCanPlay(videoElement, autoPlay);
  const loadAndPlay$ = Observable
    .combineLatest(initialSeek$, hasHandledCanPlay$)
    .take(1)
    .mapTo(undefined);

  return {
    initialSeek$,
    loadAndPlay$,
  };
}
