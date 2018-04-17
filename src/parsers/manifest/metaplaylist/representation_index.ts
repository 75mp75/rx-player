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

import IRepresentationIndex from "../../../manifest/representation_index";
import {
  IBaseContentInfos,
  ISegment,
} from "../../../manifest/representation_index/interfaces";

type ITransportTypes = "dash"|"smooth";

/**
 * The MetaRepresentationIndex is wrapper for all kind of indexes (dash, smooth, etc)
 *
 * Ut wraps methods from origin indexes, while taking into account of the offset induced
 * by metaplaylist. It makes a bridge between the metaplaylist timeline, and the original
 * timeline of content. (e.g. the segment whose "meta" time is 1500, is actually a
 * segment whose original time is 200, played with an offset of 1300)
 */
export default class MetaRepresentationIndex implements IRepresentationIndex{
  private _wrappedIndex: IRepresentationIndex;
  private _timeOffset: number;
  private _transport: ITransportTypes;
  private _contentEnd: number;
  private _baseContentInfos: IBaseContentInfos;

  constructor(
      index: IRepresentationIndex,
      timeOffset: number,
      transport: "dash"|"smooth",
      contentEnd: number,
      baseContentInfos: IBaseContentInfos
  ) {
    this._wrappedIndex = index;
    this._timeOffset = timeOffset;
    this._transport = transport;
    this._contentEnd = contentEnd;
    this._baseContentInfos = baseContentInfos;
  }

  public getInitSegment() {
    const segment = this._wrappedIndex.getInitSegment();
    if (segment === null) {
      return null;
    }
    segment.privateInfos = segment.privateInfos || {};
    segment.privateInfos.transportType = this._transport;
    segment.privateInfos.baseContentInfos = this._baseContentInfos;
    return segment;
  }

  public getSegments(up : number, duration : number) : ISegment[] {
    return this._wrappedIndex.getSegments(
      up - this._timeOffset,
      duration
    ).map((segment) => {
      segment.privateInfos = segment.privateInfos || {};
      segment.privateInfos.transportType = this._transport;
      segment.time += this._timeOffset * segment.timescale;
      segment.privateInfos.baseContentInfos = this._baseContentInfos;
      return segment;
    });
  }

  public shouldRefresh(__ : number, to : number) : boolean {
    if (to > this._contentEnd) {
      return true;
    }
    return false;
  }

  public getFirstPosition(): number|undefined {
    const wrappedFirstPosition = this._wrappedIndex.getFirstPosition();
    return wrappedFirstPosition ?
      wrappedFirstPosition + this._timeOffset :
      undefined;
  }

  public getLastPosition(): number|undefined {
    const wrappedLastPosition = this._wrappedIndex.getLastPosition();
    return wrappedLastPosition ?
      wrappedLastPosition + this._timeOffset :
      undefined;
  }

  public checkDiscontinuity(time: number): number {
    return this._wrappedIndex.checkDiscontinuity(time - this._timeOffset);
  }

  public _update(newIndex : MetaRepresentationIndex): void {
    return this._wrappedIndex._update(newIndex._wrappedIndex);
  }

  public _addSegments(
    nextSegments : Array<{
      time : number;
      duration : number;
      timescale : number;
      count? : number;
      range? : [number, number];
    }>,
    currentSegment? : {
      duration? : number;
      time : number;
      timescale? : number;
    }
  ): void {
    return this._wrappedIndex._addSegments(
      nextSegments, currentSegment
    );
  }
}