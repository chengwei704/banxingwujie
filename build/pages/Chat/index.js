(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  data() {
    return {
      messages: [{
        role: 'ai',
        text: '你好呀！我是团团，今天旅途怎么样？😊'
      }],
      inputText: '',
      sending: false
    };
  },
  onInput(e) {
    this.inputText = e.value;
  },
  async onSend() {
    const text = this.inputText.trim();
    if (!text || this.sending) return;
    this.messages = [...this.messages, {
      role: 'user',
      text
    }];
    this.inputText = '';
    this.sending = true;
    try {
      const res = await this.callAI(text);
      this.messages = [...this.messages, {
        role: 'ai',
        text: res
      }];
    } catch (e) {
      this.messages = [...this.messages, {
        role: 'ai',
        text: '团团出了点状况，稍后再试吧…'
      }];
    } finally {
      this.sending = false;
    }
  },
  async callAI(userMsg) {
    const replies = ['听起来很有趣！告诉我更多吧～', '旅途中有我陪着你，不用担心😊', '嗯嗯，我在听呢～', '这段旅程一定很特别！'];
    await new Promise(r => setTimeout(r, 800));
    return replies[Math.floor(Math.random() * replies.length)];
  }
};
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".chat-page": {
    "flexDirection": "column",
    "height": "100%",
    "backgroundColor": "#FAFAF8"
  },
  ".msg-list": {
    "flex": 1,
    "paddingTop": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "paddingRight": "16px"
  },
  ".list-item": {
    "marginBottom": "12px"
  },
  ".msg-row": {
    "flexDirection": "row"
  },
  ".bubble": {
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "14px",
    "paddingRight": "14px",
    "fontSize": "14px",
    "color": "#333333"
  },
  ".input-bar": {
    "flexDirection": "row",
    "paddingTop": "12px",
    "paddingBottom": "12px",
    "paddingLeft": "12px",
    "paddingRight": "12px",
    "borderTopWidth": "1px",
    "borderTopColor": "#EEEEEE",
    "backgroundColor": "#FFFFFF"
  },
  ".input": {
    "flex": 1,
    "height": "40px",
    "borderRadius": "20px",
    "backgroundColor": "#F5F5F5",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "fontSize": "14px"
  },
  ".send-btn": {
    "width": "60px",
    "height": "40px",
    "backgroundColor": "#FF8C69",
    "borderRadius": "20px",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "8px"
  },
  ".send-text": {
    "color": "#FFFFFF",
    "fontSize": "14px"
  }
}

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "chat-page"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "msg-list"
      ],
      "children": [
        {
          "type": "list-item",
          "attr": {
            "key": function () {return this.i}
          },
          "repeat": {
            "exp": function () {return this.messages},
            "key": "i",
            "value": "msg"
          },
          "classList": [
            "list-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": function () {return ['msg-row', this.msg.role]},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.msg.text}
                  },
                  "classList": [
                    "bubble"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-bar"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "value": function () {return this.inputText},
            "placeholder": "和团团说说话…"
          },
          "classList": [
            "input"
          ],
          "events": {
            "change": "onInput"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "send-btn"
          ],
          "events": {
            "click": "onSend"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "发送"
              },
              "classList": [
                "send-text"
              ]
            }
          ]
        }
      ]
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
/*!*********************************************!*\
  !*** ./src/pages/Chat/index.ux?uxType=page ***!
  \*********************************************/

var $app_script$ = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.0.9" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQzVGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixtQkFBTyxDQUFDLG9oRUFBa2lDO0FBQzdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsOG1CQUFzVDtBQUNsVyxpQ0FBaUMsbUJBQU8sQ0FBQyxzb0JBQWtVO0FBQzNXLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD81YzEzIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD82ODYxIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD84NjQzIiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/MzMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNoYXQtcGFnZVwiPlxyXG4gICAgPGxpc3QgY2xhc3M9XCJtc2ctbGlzdFwiPlxyXG4gICAgICA8bGlzdC1pdGVtIGZvcj1cInt7KGksIG1zZykgaW4gbWVzc2FnZXN9fVwiIGtleT1cInt7aX19XCIgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXNnLXJvdyB7e21zZy5yb2xlfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlXCI+e3ttc2cudGV4dH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpc3QtaXRlbT5cclxuICAgIDwvbGlzdD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYmFyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgIHZhbHVlPVwie3tpbnB1dFRleHR9fVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLlkozlm6Llm6Lor7Tor7Tor53igKZcIlxyXG4gICAgICAgIG9uY2hhbmdlPVwib25JbnB1dFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZW5kLWJ0blwiIG9uY2xpY2s9XCJvblNlbmRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInNlbmQtdGV4dFwiPuWPkemAgTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWVzc2FnZXM6IFtcclxuICAgICAgICB7IHJvbGU6ICdhaScsIHRleHQ6ICfkvaDlpb3lkYDvvIHmiJHmmK/lm6Llm6LvvIzku4rlpKnml4XpgJTmgI7kuYjmoLfvvJ/wn5iKJyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGlucHV0VGV4dDogJycsXHJcbiAgICAgIHNlbmRpbmc6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uSW5wdXQoZSkge1xyXG4gICAgdGhpcy5pbnB1dFRleHQgPSBlLnZhbHVlXHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgb25TZW5kKCkge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuaW5wdXRUZXh0LnRyaW0oKVxyXG4gICAgaWYgKCF0ZXh0IHx8IHRoaXMuc2VuZGluZykgcmV0dXJuXHJcblxyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFsuLi50aGlzLm1lc3NhZ2VzLCB7IHJvbGU6ICd1c2VyJywgdGV4dCB9XVxyXG4gICAgdGhpcy5pbnB1dFRleHQgPSAnJ1xyXG4gICAgdGhpcy5zZW5kaW5nID0gdHJ1ZVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuY2FsbEFJKHRleHQpXHJcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBbLi4udGhpcy5tZXNzYWdlcywgeyByb2xlOiAnYWknLCB0ZXh0OiByZXMgfV1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcyA9IFtcclxuICAgICAgICAuLi50aGlzLm1lc3NhZ2VzLFxyXG4gICAgICAgIHsgcm9sZTogJ2FpJywgdGV4dDogJ+WbouWbouWHuuS6hueCueeKtuWGte+8jOeojeWQjuWGjeivleWQp+KApicgfVxyXG4gICAgICBdXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLnNlbmRpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGNhbGxBSSh1c2VyTXNnKSB7XHJcbiAgICBjb25zdCByZXBsaWVzID0gW1xyXG4gICAgICAn5ZCs6LW35p2l5b6I5pyJ6Laj77yB5ZGK6K+J5oiR5pu05aSa5ZCn772eJyxcclxuICAgICAgJ+aXhemAlOS4reacieaIkemZquedgOS9oO+8jOS4jeeUqOaLheW/g/CfmIonLFxyXG4gICAgICAn5Zev5Zev77yM5oiR5Zyo5ZCs5ZGi772eJyxcclxuICAgICAgJ+i/meauteaXheeoi+S4gOWumuW+iOeJueWIq++8gScsXHJcbiAgICBdXHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgODAwKSlcclxuICAgIHJldHVybiByZXBsaWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlcGxpZXMubGVuZ3RoKV1cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2hhdC1wYWdlIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUY4O1xyXG59XHJcblxyXG4ubXNnLWxpc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5tc2ctcm93IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubXNnLXJvdy51c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubXNnLXJvdy5haSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4ubXNnLXJvdy51c2VyIC5idWJibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDNjk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5pbnB1dC1iYXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNFRUVFRUU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QzY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc2VuZC10ZXh0IHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuPC9zdHlsZT4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY2hhdC1wYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGQUZBRjhcIlxuICB9LFxuICBcIi5tc2ctbGlzdFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLmxpc3QtaXRlbVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIubXNnLXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCIuYnViYmxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiLmlucHV0LWJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0VFRUVFRVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiLmlucHV0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGNUY1RjVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuc2VuZC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI2MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkY4QzY5XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnNlbmQtdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTRweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY2hhdC1wYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1zZy1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImtleVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZXNzYWdlc30sXG4gICAgICAgICAgICBcImtleVwiOiBcImlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJtc2dcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsaXN0LWl0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydtc2ctcm93JywgdGhpcy5tc2cucm9sZV19LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGV4dH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImlucHV0LWJhclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbnB1dFRleHR9LFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWSjOWbouWbouivtOivtOivneKAplwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwib25JbnB1dFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VuZC1idG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9uU2VuZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlj5HpgIFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZW5kLXRleHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2FjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2UmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsiZGF0YSIsIm1lc3NhZ2VzIiwicm9sZSIsInRleHQiLCJpbnB1dFRleHQiLCJzZW5kaW5nIiwib25JbnB1dCIsImUiLCJ2YWx1ZSIsIm9uU2VuZCIsInRyaW0iLCJyZXMiLCJjYWxsQUkiLCJ1c2VyTXNnIiwicmVwbGllcyIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=