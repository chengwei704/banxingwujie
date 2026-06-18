(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = undefined
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = null
$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "2.0.8" })

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();