(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Profile/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Profile/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {};
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Profile/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Profile/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {}

/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Profile/index.ux?uxType=page&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Profile/index.ux?uxType=page& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "页面建设中"
      }
    }
  ]
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/pages/Profile/index.ux?uxType=page ***!
  \************************************************/

var $app_script$ = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Profile/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Profile/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Profile/index.ux?uxType=page")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.0.8" });
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();