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

import arrayFind = require("array-find");

import generateNewId from "../utils/id";
import { normalize as normalizeLang } from "../utils/languages";

import Adaptation, {
  AdaptationType,
  IAdaptationArguments,
} from "./adaptation";
import { StaticRepresentationIndex } from "./representation_index";

export type ManifestAdaptations = Partial<Record<AdaptationType, Adaptation[]>>;

export interface ISupplementaryImageTrack {
  mimeType : string;
  url : string;
}

export interface ISupplementaryTextTrack {
  mimeType : string;
  codecs? : string;
  url : string;
  language? : string;
  languages? : string[];
  closedCaption : boolean;
}

export interface IPeriodArguments {
  id: string;
  adaptations: IAdaptationArguments[];
  start: number;
  duration?: number;
}

/**
 * @param {Array.<Object>} adaptations
 * @returns {Object}
 */
function createManifestAdaptations(
  adaptations : IAdaptationArguments[]
) : ManifestAdaptations {
  return adaptations.reduce<ManifestAdaptations>((
    acc : ManifestAdaptations,
    adaptation
  ) => {
    const { type, representations } = adaptation;
    if (!representations.length) {
      return acc;
    }

    if (!acc[type]) {
      acc[type] = [];
    }
    (acc[type] as Adaptation[]).push(new Adaptation(adaptation));
    return acc;
  }, {});
}

export default class Period {
  public readonly id : string;
  public readonly adaptations : ManifestAdaptations;
  public duration? : number;
  public start : number;
  public end? : number;

  /**
   * @constructor
   * @param {Object} args
   */
  constructor(args : IPeriodArguments) {
    this.id = args.id;
    this.adaptations = createManifestAdaptations(args.adaptations);
    this.duration = args.duration;
    this.start = args.start;

    if (this.duration != null && this.start != null) {
      this.end = this.start + this.duration;
    }
  }

  /**
   * Add supplementary image Adaptation(s) to the manifest.
   * @param {Object|Array.<Object>} imageTracks
   */
  addSupplementaryImageAdaptations(
    imageTracks : ISupplementaryImageTrack|ISupplementaryImageTrack[]
  ) {
    const _imageTracks = Array.isArray(imageTracks) ? imageTracks : [imageTracks];
    const newImageTracks = _imageTracks.map(({ mimeType, url }) => {
      const adaptationID = "gen-image-ada-" + generateNewId();
      const representationID = "gen-image-rep-" + generateNewId();
      return new Adaptation({
        id: adaptationID,
        type: "image",
        manuallyAdded: true,
        representations: [{
          baseURL: url,
          bitrate: 0,
          id: representationID,
          mimeType,
          index: new StaticRepresentationIndex(),
        }],
      });
    });

    if (newImageTracks.length) {
      this.adaptations.image = this.adaptations.image ?
        this.adaptations.image.concat(newImageTracks) : newImageTracks;
    }
  }

  /**
   * Add supplementary text Adaptation(s) to the manifest.
   * @param {Object|Array.<Object>} textTracks
   */
  addSupplementaryTextAdaptations(
    textTracks : ISupplementaryTextTrack|ISupplementaryTextTrack[]
  ) {
    const _textTracks = Array.isArray(textTracks) ? textTracks : [textTracks];
    const newTextAdaptations = _textTracks.reduce((allSubs : Adaptation[], {
      mimeType,
      codecs,
      url,
      language,
      languages,
      closedCaption,
    }) => {
      const langsToMapOn : string[] = language ? [language] : languages || [];

      return allSubs.concat(langsToMapOn.map((_language) => {
        const adaptationID = "gen-text-ada-" + generateNewId();
        const representationID = "gen-text-rep-" + generateNewId();
        return new Adaptation({
          id: adaptationID,
          type: "text",
          language: _language,
          normalizedLanguage: normalizeLang(_language),
          closedCaption,
          manuallyAdded: true,
          representations: [{
            baseURL: url,
            bitrate: 0,
            id: representationID,
            mimeType,
            codecs,
            index: new StaticRepresentationIndex(),
          }],
        });
      }));
    }, []);

    if (newTextAdaptations.length) {
      this.adaptations.text = this.adaptations.text ?
        this.adaptations.text.concat(newTextAdaptations) : newTextAdaptations;
    }
  }

  /**
   * @returns {Array.<Object>}
   */
  getAdaptations() : Adaptation[] {
    const adaptationsByType = this.adaptations;
    if (!adaptationsByType) {
      return [];
    }

    const adaptationsList : Adaptation[] = [];
    for (const adaptationType in adaptationsByType) {
      if (adaptationsByType.hasOwnProperty(adaptationType)) {
        const adaptations =
          adaptationsByType[adaptationType as AdaptationType] as Adaptation[];
        adaptationsList.push(...adaptations);
      }
    }
    return adaptationsList;
  }

  getAdaptationsForType(adaptationType : AdaptationType) : Adaptation[] {
    const adaptations = this.adaptations[adaptationType];
    return adaptations || [];
  }

  getAdaptation(wantedId : number|string) : Adaptation|undefined {
    return arrayFind(this.getAdaptations(), ({ id }) => wantedId === id);
  }
}
