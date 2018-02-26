(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-intl"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-intl", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-intl-phraseapp"] = factory(require("react-intl"), require("react"));
	else
		root["react-intl-phraseapp"] = factory(root["react-intl"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var phraseAppEditor = false;
function sanitizeConfig(config) {
    config.prefix = config.prefix ? config.prefix : '{{__';
    config.suffix = config.suffix ? config.suffix : '__}}';
    return config;
}
function initializePhraseAppEditor(config) {
    if (phraseAppEditor)
        return;
    phraseAppEditor = true;
    window.PHRASEAPP_ENABLED = config.phraseEnabled;
    window.PHRASEAPP_CONFIG = sanitizeConfig(config);
    if (config.phraseEnabled) {
        var phraseapp = document.createElement('script');
        phraseapp.type = 'text/javascript';
        phraseapp.async = true;
        phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
        var s = document.getElementsByTagName('script')[0];
        if (s != undefined) {
            s.parentNode.insertBefore(phraseapp, s);
        }
        else {
            document.insertBefore(phraseapp, null);
        }
    }
}
exports.initializePhraseAppEditor = initializePhraseAppEditor;
function isPhraseEnabled() {
    return window.PHRASEAPP_ENABLED;
}
exports.isPhraseEnabled = isPhraseEnabled;
function escapeId(id) {
    var config = window.PHRASEAPP_CONFIG;
    return config.prefix + 'phrase_' + id + config.suffix;
}
exports.escapeId = escapeId;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(2);
var react_intl_1 = __webpack_require__(1);
var functions_1 = __webpack_require__(0);
var FormattedHTMLMessage = /** @class */ (function (_super) {
    __extends(FormattedHTMLMessage, _super);
    function FormattedHTMLMessage(props, context) {
        return _super.call(this, props, context) || this;
    }
    FormattedHTMLMessage.prototype.render = function () {
        if (functions_1.isPhraseEnabled()) {
            var nodes = [functions_1.escapeId(this.props.id)];
            return react_1.createElement.apply(void 0, ["span", null].concat(nodes));
        }
        else {
            return _super.prototype.render.call(this);
        }
    };
    return FormattedHTMLMessage;
}(react_intl_1.FormattedHTMLMessage));
exports.FormattedHTMLMessage = FormattedHTMLMessage;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(2);
var react_intl_1 = __webpack_require__(1);
var functions_1 = __webpack_require__(0);
var FormattedMessage = /** @class */ (function (_super) {
    __extends(FormattedMessage, _super);
    function FormattedMessage(props, context) {
        return _super.call(this, props, context) || this;
    }
    FormattedMessage.prototype.render = function () {
        if (functions_1.isPhraseEnabled()) {
            var nodes = [functions_1.escapeId(this.props.id)];
            return react_1.createElement.apply(void 0, ["span", null].concat(nodes));
        }
        else {
            return _super.prototype.render.call(this);
        }
    };
    return FormattedMessage;
}(react_intl_1.FormattedMessage));
exports.FormattedMessage = FormattedMessage;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["injectIntl"] = injectIntl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__functions__);




function injectIntl(WrappedComponent) {
    class InjectPhrase extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
        constructor(props, context) {
            super(props, context);
            this.render = this.render.bind(this);
            this.translate = this.translate.bind(this);

            this.state = { errors: {} };
        }

        translate(keyName) {
            if (!window.PHRASEAPP_DISABLED) {
                let escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__functions__["escapeId"])(escapedString);
            } else {
                return this.props.intl.formatMessage({ "id": keyName })
            }
        }

        render() {
            return (
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                    WrappedComponent, {
                        ref: "component",
                        errors: this.state.errors,
                        translate: this.translate
                    }, this.props)
            );
        }
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_intl__["injectIntl"])(InjectPhrase);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = __webpack_require__(0);
exports.initializePhraseAppEditor = functions_1.initializePhraseAppEditor;
var injectIntl_1 = __webpack_require__(5);
exports.injectIntl = injectIntl_1.injectIntl;
var FormattedMessage_1 = __webpack_require__(4);
exports.FormattedMessage = FormattedMessage_1.FormattedMessage;
var FormattedHTMLMessage_1 = __webpack_require__(3);
exports.FormattedHTMLMessage = FormattedHTMLMessage_1.FormattedHTMLMessage;


/***/ })
/******/ ]);
});