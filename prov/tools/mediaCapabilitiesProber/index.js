(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RxPlayer"] = factory();
	else
		root["RxPlayer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tools/mediaCapabilitiesProber/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tools/mediaCapabilitiesProber/api/index.ts":
/*!********************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/api/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar probeMediaConfiguration_1 = __webpack_require__(/*! ./probeMediaConfiguration */ \"./src/tools/mediaCapabilitiesProber/api/probeMediaConfiguration.ts\");\n/**\n * A set of API to probe media capabilites.\n * Each API allow to evalute a specific feature (HDCP support, decoding infos, etc)\n * and relies on different browser API to probe capabilites.\n */\nvar mediaCapabilitiesProber = {\n    /**\n     * Get capabilities for any configuration.\n     * All possible attributes are accepted as argument.\n     * @param {Object} config\n     */\n    getCapabilities: function (config) { return __awaiter(_this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2 /*return*/, probeMediaConfiguration_1.default(config)];\n        });\n    }); },\n    /**\n     * Get HDCP status. Evaluates if current equipement support given\n     * HDCP revision.\n     */\n    getStatusForHDCP: function (hdcp) {\n        if (!hdcp) {\n            return Promise.reject(\"BAD_ARGUMENT: No HDCP Policy specified.\");\n        }\n        var config = {\n            mediaProtection: {\n                output: {\n                    hdcp: hdcp,\n                },\n            },\n        };\n        return probeMediaConfiguration_1.default(config);\n    },\n    /**\n     * Get decoding capabilities from a given video and/or audio\n     * configuration.\n     */\n    getDecodingCapabilities: function (type, video, audio) {\n        var config = { type: type, video: video, audio: audio };\n        return probeMediaConfiguration_1.default(config);\n    },\n    /**\n     * Get Status For DRM. Tells if browser support deciphering\n     * with given drm type and configuration.\n     */\n    getStatusForDRM: function (type, drmConfig) {\n        var config = {\n            mediaProtection: {\n                drm: {\n                    type: type,\n                    configuration: drmConfig,\n                },\n            },\n        };\n        return probeMediaConfiguration_1.default(config);\n    },\n    /**\n     * Get display capabilites. Tells if display can output\n     * with specific video and/or audio constrains.\n     */\n    getDisplayCapabilities: function (displayConfig) {\n        var config = { display: displayConfig };\n        return probeMediaConfiguration_1.default(config);\n    },\n};\nexports.default = mediaCapabilitiesProber;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/api/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/api/probeMediaConfiguration.ts":
/*!**************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/api/probeMediaConfiguration.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar probers_1 = __webpack_require__(/*! ../probers */ \"./src/tools/mediaCapabilitiesProber/probers/index.ts\");\nvar log_1 = __webpack_require__(/*! ../../../utils/log */ \"./src/utils/log.ts\");\nvar filterEmptyFields_1 = __webpack_require__(/*! ../utils/filterEmptyFields */ \"./src/tools/mediaCapabilitiesProber/utils/filterEmptyFields.ts\");\nvar isEmpty_1 = __webpack_require__(/*! ../utils/isEmpty */ \"./src/tools/mediaCapabilitiesProber/utils/isEmpty.ts\");\n/**\n * Assert that configuration is valid before probing:\n * 1 - Filter empty fields.\n * 2 - Check for emptyness.\n * 3 - Check for unsupported configuration attributes.\n * @param {Object} config\n */\nvar validateConfiguration = function (config) {\n    if (!config) {\n        throw new Error(\"MCP_CONF: Configuration is not defined.\");\n    }\n    var filteredConfig = filterEmptyFields_1.default(config);\n    if (isEmpty_1.default(filteredConfig)) {\n        throw new Error(\"MCP_CONF: Can't probe empty configuration.\");\n    }\n    return filteredConfig;\n};\n/**\n * Probe media capabilities, evaluating capabilities with available browsers API.\n *\n * Probe every given features with configuration.\n * If the browser API is not available OR we can't call browser API with enough arguments,\n * do nothing but warn user (e.g. HDCP is not specified for calling \"getStatusForPolicy\"\n * API, \"mediaCapabilites\" API is not available.).\n *\n * if we call the browser API, we get from it a number which means:\n * - 0 : Probably\n * - 1 : Maybe\n * - 2 : Not Supported\n *\n * From all API results, we return worst of states (e.g. if one API returns\n * \"Not Supported\" among \"Probably\" statuses, return \"Not Supported\").\n *\n * If no API was called or some capabilites could not be probed and status is \"Probably\",\n * return \"Maybe\".\n * @param {Object} config\n */\nvar browserAPIS = [\n    \"_isTypeSupported_\",\n    \"_isTypeSupportedWithFeatures_\",\n    \"_matchMedia_\",\n    \"_decodingInfos_\",\n    \"_requestMediaKeySystemAccess_\",\n    \"_getStatusForPolicy_\",\n];\nvar probeMediaConfiguration = function (_config) { return __awaiter(_this, void 0, void 0, function () {\n    var config, isProbablySupported, isMaybeSupported, isNotSupported, _i, browserAPIS_1, browserAPI, probeWithBrowser;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                config = validateConfiguration(_config);\n                isProbablySupported = false;\n                isMaybeSupported = false;\n                isNotSupported = false;\n                _i = 0, browserAPIS_1 = browserAPIS;\n                _a.label = 1;\n            case 1:\n                if (!(_i < browserAPIS_1.length)) return [3 /*break*/, 4];\n                browserAPI = browserAPIS_1[_i];\n                probeWithBrowser = probers_1.default[browserAPI];\n                if (!probeWithBrowser) return [3 /*break*/, 3];\n                return [4 /*yield*/, probeWithBrowser(config).then(function (probeResult) {\n                        isNotSupported = isNotSupported || probeResult === 0;\n                        isMaybeSupported = isMaybeSupported || probeResult === 1;\n                        isProbablySupported = isProbablySupported || probeResult === 2;\n                    }).catch(function (err) { return log_1.default.debug(err); })];\n            case 2:\n                _a.sent();\n                _a.label = 3;\n            case 3:\n                _i++;\n                return [3 /*break*/, 1];\n            case 4:\n                if (isNotSupported) {\n                    return [2 /*return*/, \"Not Supported\"];\n                }\n                else if (isMaybeSupported) {\n                    return [2 /*return*/, \"Maybe\"];\n                }\n                else if (isProbablySupported) {\n                    return [2 /*return*/, \"Probably\"];\n                }\n                return [2 /*return*/, \"Maybe\"];\n        }\n    });\n}); };\nexports.default = probeMediaConfiguration;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/api/probeMediaConfiguration.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/index.ts":
/*!****************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/tools/mediaCapabilitiesProber/api/index.ts\");\nexports.default = api_1.default;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_decodingInfos_/index.ts":
/*!****************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_decodingInfos_/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_mediaCapabilities_APIAvailable().then(function () {\n        if (config.type &&\n            config.video &&\n            config.video.bitrate &&\n            config.video.contentType &&\n            config.video.framerate &&\n            config.video.height &&\n            config.video.width &&\n            config.audio &&\n            config.audio.bitrate &&\n            config.audio.channels &&\n            config.audio.contentType &&\n            config.audio.samplerate) {\n            return navigator.mediaCapabilities.decodingInfo(config)\n                .then(function (result) {\n                return result.supported ? 2 : 0;\n            }).catch(function () {\n                throw new Error(\"API_CALL: Bad arguments for calling mediaCapabilities.\");\n            });\n        }\n        throw new Error(\"API_CALL: Not enough arguments for calling mediaCapabilites.\");\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_decodingInfos_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_getStatusForPolicy_/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_getStatusForPolicy_/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_getStatusForPolicy_APIAvailable().then(function () {\n        if (config.mediaProtection &&\n            config.mediaProtection.output) {\n            var hdcp = \"hdcp-\" + config.mediaProtection.output.hdcp;\n            var object_1 = { minHdcpVersion: hdcp };\n            var keySystem = \"w3.org.clearkey\";\n            var drmConfig = {\n                initDataTypes: [\"cenc\"],\n                videoCapabilities: [],\n                audioCapabilities: [],\n                distinctiveIdentifier: \"optional\",\n                persistentState: \"optional\",\n                sessionTypes: [\"temporary\"],\n            };\n            return window.requestMediaKeySystemAccess(keySystem, drmConfig)\n                .then(function (mediaKeys) {\n                mediaKeys.getStatusForPolicy(object_1)\n                    .then(function (result) {\n                    if (result === \"usable\") {\n                        return 2;\n                    }\n                    else {\n                        return 0;\n                    }\n                });\n            });\n        }\n        throw new Error(\"API_CALL: Not enough arguments for calling getStatusForPolicy.\");\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_getStatusForPolicy_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/format.ts":
/*!*******************************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/format.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar defaultCodecsFinder_1 = __webpack_require__(/*! ../defaultCodecsFinder */ \"./src/tools/mediaCapabilitiesProber/probers/defaultCodecsFinder.ts\");\nvar formatConfigForAPI = function (video, outputProtection, audio, display) {\n    var str = null;\n    var defaultVideoCodec = defaultCodecsFinder_1.findDefaultVideoCodec();\n    var contentType = video ?\n        video.contentType || defaultVideoCodec :\n        defaultVideoCodec;\n    str = str || \"\" + contentType;\n    if (audio && audio.contentType) {\n        var regex = /codecs=\"(.*?)\"/;\n        var match = audio.contentType.match(regex);\n        if (match) {\n            var codec = match[1];\n            str = str.substring(0, str.length - 2) + \",\" + codec;\n        }\n    }\n    var feat = [];\n    if (video && video.width) {\n        feat.push(\"decode-res-x=\" + video.width + \"\");\n    }\n    if (video && video.height) {\n        feat.push(\"decode-res-y=\" + video.height + \"\");\n    }\n    if (video && video.bitsPerComponent) {\n        feat.push(\"decode-bpc=\" + video.bitsPerComponent + \"\");\n    }\n    if (video && video.bitrate) {\n        feat.push(\"decode-bitrate=\" + video.bitrate + \"\");\n    }\n    if (video && video.framerate) {\n        feat.push(\"decode-fps=\" + video.framerate + \"\");\n    }\n    if (display) {\n        if (display.width) {\n            feat.push(\"display-res-x=\" + display.width + \"\");\n        }\n        if (display.height) {\n            feat.push(\"display-res-y=\" + display.height + \"\");\n        }\n        if (display.bitsPerComponent) {\n            feat.push(\"display-bpc=\" + display.bitsPerComponent + \"\");\n        }\n    }\n    if (outputProtection && outputProtection.hdcp) {\n        var specifiedHDCPinConfig = parseFloat(outputProtection.hdcp);\n        var hdcp = specifiedHDCPinConfig >= 2.2 ? 2 : 1;\n        feat.push(\"hdcp=\" + hdcp);\n    }\n    if (feat.length > 0) {\n        str += \";\" + \"features=\";\n        str += \"\\\"\" + feat.join(\",\") + \"\\\"\";\n    }\n    return str;\n};\nexports.default = formatConfigForAPI;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/format.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/index.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar format_1 = __webpack_require__(/*! ./format */ \"./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/format.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_isTypeSupportedWithFeatures_APIAvailable().then(function () {\n        var mediaProtection = config.mediaProtection;\n        var keySystem = mediaProtection ?\n            (mediaProtection.drm ?\n                mediaProtection.drm.type || \"org.w3.clearkey\" :\n                \"org.w3.clearkey\") :\n            \"org.w3.clearkey\";\n        var output = mediaProtection ? mediaProtection.output : undefined;\n        var video = config.video;\n        var audio = config.audio;\n        var display = config.display;\n        var features = format_1.default(video, output, audio, display);\n        var result = window.MSMediaKeys.isTypeSupportedWithFeatures(keySystem, features);\n        function formatSupport(support) {\n            if (support === \"\") {\n                return 1;\n            }\n            else {\n                switch (support) {\n                    case \"Maybe\":\n                        return 1;\n                    case \"Probably\":\n                        return 2;\n                    case \"Not Supported\":\n                        return 0;\n                    default:\n                        return 1;\n                }\n            }\n        }\n        return formatSupport(result);\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_isTypeSupported_/index.ts":
/*!******************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_isTypeSupported_/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_isTypeSupported_Available().then(function () {\n        var contentTypes = [];\n        if (config.video &&\n            config.video.contentType) {\n            contentTypes.push(config.video.contentType);\n        }\n        if (config.audio &&\n            config.audio.contentType) {\n            contentTypes.push(config.audio.contentType);\n        }\n        if (contentTypes === null || !contentTypes.length) {\n            throw new Error(\"API_CALL: Not enough arguments for calling isTypeSupported.\");\n        }\n        var result = contentTypes.reduce(function (acc, val) {\n            var support = window.MediaSource.isTypeSupported(val) ? 2 : 0;\n            return Math.min(acc, support);\n        }, 2);\n        return result;\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_isTypeSupported_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/format.ts":
/*!**************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/format.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar formatConfigForAPI = function (display) {\n    var gamut = display.colorSpace;\n    var str = gamut ? \"(color-gamut: \" + gamut + \")\" : null;\n    return str;\n};\nexports.default = formatConfigForAPI;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/format.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/index.ts":
/*!*************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar format_1 = __webpack_require__(/*! ./format */ \"./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/format.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_matchMedia_APIAvailable().then(function () {\n        if (config.display) {\n            var format = format_1.default;\n            var formatted = format(config.display);\n            if (formatted) {\n                var match = window.matchMedia(formatted);\n                var result = match.matches && match.media !== \"not all\" ? 2 : 0;\n                return result;\n            }\n        }\n        throw new Error(\"API_CALL: Not enough arguments for calling matchMedia.\");\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/buildKeySystemConfiguration.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/buildKeySystemConfiguration.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DEFAULT_WIDEVINE_ROBUSTNESSES = [\n    \"HW_SECURE_ALL\",\n    \"HW_SECURE_DECODE\",\n    \"HW_SECURE_CRYPTO\",\n    \"SW_SECURE_DECODE\",\n    \"SW_SECURE_CRYPTO\",\n];\nfunction buildKeySystemConfigurations(ksName, keySystem) {\n    var sessionTypes = [\"temporary\"];\n    var persistentState = \"optional\";\n    var distinctiveIdentifier = \"optional\";\n    if (keySystem.persistentLicense) {\n        persistentState = \"required\";\n        sessionTypes.push(\"persistent-license\");\n    }\n    if (keySystem.persistentStateRequired) {\n        persistentState = \"required\";\n    }\n    if (keySystem.distinctiveIdentifierRequired) {\n        distinctiveIdentifier = \"required\";\n    }\n    // Set robustness, in order of consideration:\n    //   1. the user specified its own robustnesses\n    //   2. a \"widevine\" key system is used, in that case set the default widevine\n    //      robustnesses as defined in the config\n    //   3. set an undefined robustness\n    var videoRobustnesses = keySystem.videoRobustnesses ||\n        (ksName === \"widevine\" ? DEFAULT_WIDEVINE_ROBUSTNESSES : []);\n    var audioRobustnesses = keySystem.audioRobustnesses ||\n        (ksName === \"widevine\" ? DEFAULT_WIDEVINE_ROBUSTNESSES : []);\n    if (!videoRobustnesses.length) {\n        videoRobustnesses.push(undefined);\n    }\n    if (!audioRobustnesses.length) {\n        audioRobustnesses.push(undefined);\n    }\n    // From the W3 EME spec, we have to provide videoCapabilities and\n    // audioCapabilities.\n    // These capabilities must specify a codec (even though your stream can use\n    // a completely different codec afterward).\n    // It is also strongly recommended to specify the required security\n    // robustness. As we do not want to forbide any security level, we specify\n    // every existing security level from highest to lowest so that the best\n    // security level is selected.\n    // More details here:\n    // https://storage.googleapis.com/wvdocs/Chrome_EME_Changes_and_Best_Practices.pdf\n    // https://www.w3.org/TR/encrypted-media/#get-supported-configuration-and-consent\n    var videoCapabilities = videoRobustnesses.map(function (robustness) { return ({\n        contentType: \"video/mp4;codecs=\\\"avc1.4d401e\\\"\",\n        robustness: robustness,\n    }); });\n    var audioCapabilities = audioRobustnesses.map(function (robustness) { return ({\n        contentType: \"audio/mp4;codecs=\\\"mp4a.40.2\\\"\",\n        robustness: robustness,\n    }); });\n    return [{\n            initDataTypes: [\"cenc\"],\n            videoCapabilities: videoCapabilities,\n            audioCapabilities: audioCapabilities,\n            distinctiveIdentifier: distinctiveIdentifier,\n            persistentState: persistentState,\n            sessionTypes: sessionTypes,\n        }];\n}\nexports.default = buildKeySystemConfigurations;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/buildKeySystemConfiguration.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/index.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar compatibility_1 = __webpack_require__(/*! ../compatibility */ \"./src/tools/mediaCapabilitiesProber/probers/compatibility.ts\");\nvar buildKeySystemConfiguration_1 = __webpack_require__(/*! ./buildKeySystemConfiguration */ \"./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/buildKeySystemConfiguration.ts\");\nvar probe = function (config) {\n    return compatibility_1.is_requestMKSA_APIAvailable().then(function () {\n        var mediaProtection = config.mediaProtection;\n        if (mediaProtection) {\n            var drm = mediaProtection.drm;\n            if (drm && drm.type) {\n                var keySystem = drm.type;\n                var configuration = buildKeySystemConfiguration_1.default(keySystem, drm.configuration || {});\n                return navigator.requestMediaKeySystemAccess(name, configuration).then(function () {\n                    return 2;\n                }).catch(function () {\n                    return 0;\n                });\n            }\n        }\n        throw new Error(\"API_CALL: Not enough arguments for calling requestMediaKeySystemAccess.\");\n    });\n};\nexports.default = probe;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/compatibility.ts":
/*!********************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/compatibility.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Check if API are availables in current system/browsers.\n */\nfunction is_mediaCapabilities_APIAvailable() {\n    if (!(\"mediaCapabilities\" in navigator)) {\n        return Promise.reject(\"API_AVAILABILITY: MediaCapabilities API not available\");\n    }\n    if (!(\"decodingInfo\" in navigator.mediaCapabilities)) {\n        return Promise.reject(\"API_AVAILABILITY: Decoding Info not available\");\n    }\n    return Promise.resolve();\n}\nexports.is_mediaCapabilities_APIAvailable = is_mediaCapabilities_APIAvailable;\nfunction is_isTypeSupportedWithFeatures_APIAvailable() {\n    if (!(\"MSMediaKeys\" in window)) {\n        return Promise.reject(\"API_AVAILABILITY: MSMediaKeys API not available\");\n    }\n    if (!(\"isTypeSupportedWithFeatures\" in window.MSMediaKeys)) {\n        return Promise.reject(\"API_AVAILABILITY: Decoding Info not available\");\n    }\n    return Promise.resolve();\n}\nexports.is_isTypeSupportedWithFeatures_APIAvailable = is_isTypeSupportedWithFeatures_APIAvailable;\nfunction is_isTypeSupported_Available() {\n    if (!(\"MediaSource\" in window)) {\n        return Promise.reject(\"API_AVAILABILITY: MediaSource API not available\");\n    }\n    if (!(\"isTypeSupported\" in window.MediaSource)) {\n        return Promise.reject(\"API_AVAILABILITY: Decoding Info not available\");\n    }\n    return Promise.resolve();\n}\nexports.is_isTypeSupported_Available = is_isTypeSupported_Available;\nfunction is_matchMedia_APIAvailable() {\n    if (!(\"matchMedia\" in window)) {\n        return Promise.reject(\"API_AVAILABILITY: matchMedia API not available\");\n    }\n    return Promise.resolve();\n}\nexports.is_matchMedia_APIAvailable = is_matchMedia_APIAvailable;\nfunction is_requestMKSA_APIAvailable() {\n    if (!(\"requestMediaKeySystemAccess\" in navigator)) {\n        return Promise.reject(\"API_AVAILABILITY: requestMediaKeySystemAccess API not available\");\n    }\n    return Promise.resolve();\n}\nexports.is_requestMKSA_APIAvailable = is_requestMKSA_APIAvailable;\nfunction is_getStatusForPolicy_APIAvailable() {\n    return is_requestMKSA_APIAvailable().then(function () {\n        if (!(\"MediaKeys\" in window)) {\n            return Promise.reject(\"API_AVAILABILITY: MediaKeys API not available\");\n        }\n        if (!(\"getStatusForPolicy\" in window.MediaKeys)) {\n            return Promise.reject(\"API_AVAILABILITY: getStatusForPolicy API not available\");\n        }\n        return Promise.resolve();\n    });\n}\nexports.is_getStatusForPolicy_APIAvailable = is_getStatusForPolicy_APIAvailable;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/compatibility.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/defaultCodecsFinder.ts":
/*!**************************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/defaultCodecsFinder.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Check if one of given video codecs are supported for decode.\n * These video codecs are chose for their wide proven compatibility and popularity.\n */\nexports.findDefaultVideoCodec = function () {\n    var videoCodecs = [\"video/mp4; codecs=\\\"avc1.4D401E\\\"\", \"video/webm; codecs=\\\"vp09.00.10.08\\\"\"];\n    if (!window.MediaSource || !window.MediaSource.isTypeSupported) {\n        throw new Error();\n    }\n    for (var _i = 0, videoCodecs_1 = videoCodecs; _i < videoCodecs_1.length; _i++) {\n        var codec = videoCodecs_1[_i];\n        if (window.MediaSource.isTypeSupported(codec)) {\n            return codec;\n        }\n    }\n    throw new Error();\n};\n/**\n * Check if one of given audio codecs are supported for decode.\n * These audio codecs are chose for their wide proven compatibility and popularity.\n */\nexports.findDefaultAudioCodec = function () {\n    var audioCodecs = [\"audio/webm; codecs=opus\", \"audio/mp4; codecs=\\\"mp4a.40.2\\\"\"];\n    if (!window.MediaSource || !window.MediaSource.isTypeSupported) {\n        throw new Error();\n    }\n    for (var _i = 0, audioCodecs_1 = audioCodecs; _i < audioCodecs_1.length; _i++) {\n        var codec = audioCodecs_1[_i];\n        if (window.MediaSource.isTypeSupported(codec)) {\n            return codec;\n        }\n    }\n    throw new Error();\n};\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/defaultCodecsFinder.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/probers/index.ts":
/*!************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/probers/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _decodingInfos_1 = __webpack_require__(/*! ./_decodingInfos_ */ \"./src/tools/mediaCapabilitiesProber/probers/_decodingInfos_/index.ts\");\nvar _getStatusForPolicy_1 = __webpack_require__(/*! ./_getStatusForPolicy_ */ \"./src/tools/mediaCapabilitiesProber/probers/_getStatusForPolicy_/index.ts\");\nvar _isTypeSupported_1 = __webpack_require__(/*! ./_isTypeSupported_ */ \"./src/tools/mediaCapabilitiesProber/probers/_isTypeSupported_/index.ts\");\nvar _isTypeSupportedWithFeatures_1 = __webpack_require__(/*! ./_isTypeSupportedWithFeatures_ */ \"./src/tools/mediaCapabilitiesProber/probers/_isTypeSupportedWithFeatures_/index.ts\");\nvar _matchMedia_1 = __webpack_require__(/*! ./_matchMedia_ */ \"./src/tools/mediaCapabilitiesProber/probers/_matchMedia_/index.ts\");\nvar _requestMediaKeySystemAccess_1 = __webpack_require__(/*! ./_requestMediaKeySystemAccess_ */ \"./src/tools/mediaCapabilitiesProber/probers/_requestMediaKeySystemAccess_/index.ts\");\nvar probers = {\n    _isTypeSupported_: _isTypeSupported_1.default,\n    _isTypeSupportedWithFeatures_: _isTypeSupportedWithFeatures_1.default,\n    _matchMedia_: _matchMedia_1.default,\n    _decodingInfos_: _decodingInfos_1.default,\n    _requestMediaKeySystemAccess_: _requestMediaKeySystemAccess_1.default,\n    _getStatusForPolicy_: _getStatusForPolicy_1.default,\n};\nexports.default = probers;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/probers/index.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/utils/filterEmptyFields.ts":
/*!**********************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/utils/filterEmptyFields.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isEmpty_1 = __webpack_require__(/*! ./isEmpty */ \"./src/tools/mediaCapabilitiesProber/utils/isEmpty.ts\");\nvar filterEmptyFields = function (object) {\n    var filtered = {};\n    var entries = Object.entries(object);\n    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {\n        var entry = entries_1[_i];\n        var key = entry[0], value = entry[1];\n        if (typeof value !== \"object\" && value != null) {\n            filtered[key] = value;\n        }\n        else if (typeof value === \"object\") {\n            var filteredValue = filterEmptyFields(value);\n            if (filteredValue && !isEmpty_1.default(filteredValue)) {\n                filtered[key] = filteredValue;\n            }\n        }\n    }\n    return filtered;\n};\nexports.default = filterEmptyFields;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/utils/filterEmptyFields.ts?");

/***/ }),

/***/ "./src/tools/mediaCapabilitiesProber/utils/isEmpty.ts":
/*!************************************************************!*\
  !*** ./src/tools/mediaCapabilitiesProber/utils/isEmpty.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Tells if object is empty.\n * @param {Object} obj\n */\nfunction isEmpty(obj) {\n    return Object.keys(obj).length === 0 && obj.constructor === Object;\n}\nexports.default = isEmpty;\n\n\n//# sourceURL=webpack://RxPlayer/./src/tools/mediaCapabilitiesProber/utils/isEmpty.ts?");

/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar noop_1 = __webpack_require__(/*! ./noop */ \"./src/utils/noop.ts\");\nvar LEVELS = {\n    NONE: 0,\n    ERROR: 1,\n    WARNING: 2,\n    INFO: 3,\n    DEBUG: 4,\n};\nvar currentLevel = Object.keys(LEVELS)[0];\nvar logger = {\n    LEVELS: Object.keys(LEVELS),\n    error: noop_1.default,\n    warn: noop_1.default,\n    info: noop_1.default,\n    debug: noop_1.default,\n    setLevel: function (levelStr) {\n        var level;\n        var foundLevel = LEVELS[levelStr];\n        if (foundLevel) {\n            level = foundLevel;\n            currentLevel = levelStr;\n        }\n        else { // either 0 or not found\n            level = 0;\n            currentLevel = \"NONE\";\n        }\n        /* tslint:disable no-invalid-this */\n        this.error = (level >= LEVELS.ERROR) ?\n            console.error.bind(console) : noop_1.default;\n        this.warn = (level >= LEVELS.WARNING) ?\n            console.warn.bind(console) : noop_1.default;\n        this.info = (level >= LEVELS.INFO) ?\n            console.info.bind(console) : noop_1.default;\n        this.debug = (level >= LEVELS.DEBUG) ?\n            console.log.bind(console) : noop_1.default;\n        /* tslint:enable no-invalid-this */\n    },\n    getLevel: function () {\n        return currentLevel;\n    },\n};\nexports.default = logger;\n\n\n//# sourceURL=webpack://RxPlayer/./src/utils/log.ts?");

/***/ }),

/***/ "./src/utils/noop.ts":
/*!***************************!*\
  !*** ./src/utils/noop.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright 2015 CANAL+ Group\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Do nothing, well.\n */\n/* tslint:disable:no-empty */\nfunction default_1() { }\nexports.default = default_1;\n/* tslint:enable:no-empty */\n\n\n//# sourceURL=webpack://RxPlayer/./src/utils/noop.ts?");

/***/ })

/******/ });
});