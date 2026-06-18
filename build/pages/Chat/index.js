(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  onInit() {}
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

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "flexDirection": "column",
    "backgroundColor": "#f0f4ff",
    "height": "100%"
  },
  ".nav": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "16px",
    "paddingBottom": "14px",
    "paddingLeft": "18px",
    "paddingRight": "18px"
  },
  ".brand": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".brand-star": {
    "fontSize": "16px",
    "color": "#4e7cff",
    "marginRight": "5px",
    "fontWeight": "700"
  },
  ".brand-name": {
    "fontSize": "20px",
    "fontWeight": "800",
    "color": "#4e7cff",
    "marginRight": "8px"
  },
  ".brand-tag": {
    "backgroundColor": "#eef2ff",
    "borderRadius": "20px",
    "paddingTop": "3px",
    "paddingBottom": "3px",
    "paddingLeft": "10px",
    "paddingRight": "10px"
  },
  ".brand-tag-text": {
    "fontSize": "11px",
    "color": "#4e7cff",
    "fontWeight": "500"
  },
  ".nav-icons": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".nav-icon-clock": {
    "fontSize": "20px",
    "color": "#8fa3c8",
    "marginRight": "16px"
  },
  ".nav-icon-menu": {
    "fontSize": "22px",
    "color": "#8fa3c8",
    "fontWeight": "700"
  },
  ".scroll-area": {
    "flex": 1
  },
  ".scroll-inner": {
    "flexDirection": "column",
    "paddingTop": "16px",
    "paddingRight": "14px",
    "paddingBottom": "16px",
    "paddingLeft": "14px"
  },
  ".msg-row": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "marginBottom": "12px"
  },
  ".avatar": {
    "width": "46px",
    "height": "46px",
    "borderRadius": "23px",
    "backgroundColor": "#eef2ff",
    "overflow": "hidden",
    "flexShrink": 0,
    "marginRight": "10px"
  },
  ".avatar-img": {
    "width": "46px",
    "height": "46px"
  },
  ".bubble-wrap": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".bubble": {
    "backgroundColor": "#ffffff",
    "paddingTop": "14px",
    "paddingRight": "16px",
    "paddingBottom": "14px",
    "paddingLeft": "16px",
    "marginBottom": "4px"
  },
  ".bubble-offline": {
    "backgroundColor": "#f5f8ff"
  },
  ".bubble-text": {
    "fontSize": "14px",
    "color": "#2d3a5e",
    "lineHeight": "24px"
  },
  ".bubble-time": {
    "fontSize": "11px",
    "color": "#8fa3c8",
    "paddingLeft": "2px"
  },
  ".deco-bird": {
    "width": "62px",
    "height": "62px",
    "borderRadius": "31px",
    "backgroundColor": "#dce9ff",
    "overflow": "hidden",
    "flexShrink": 0,
    "marginLeft": "10px",
    "alignSelf": "flex-end"
  },
  ".deco-img": {
    "width": "62px",
    "height": "62px"
  },
  ".card-wrap": {
    "marginBottom": "12px",
    "borderRadius": "20px",
    "overflow": "hidden"
  },
  ".bottom-space": {
    "height": "8px"
  },
  ".quick-bar": {
    "flexDirection": "row",
    "alignItems": "stretch",
    "paddingTop": "0px",
    "paddingBottom": "14px",
    "paddingLeft": "20px",
    "paddingRight": "20px"
  },
  ".quick-item": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(255,255,255,0.28)",
    "borderRadius": "18px",
    "paddingTop": "14px",
    "paddingBottom": "12px",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "borderTopWidth": "3px",
    "borderRightWidth": "3px",
    "borderBottomWidth": "3px",
    "borderLeftWidth": "3px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(255,250,255,0.5)",
    "borderRightColor": "rgba(255,250,255,0.5)",
    "borderBottomColor": "rgba(255,250,255,0.5)",
    "borderLeftColor": "rgba(255,250,255,0.5)",
    "marginRight": "8px"
  },
  ".quick-icon-wrap": {
    "width": "15px",
    "height": "15px",
    "borderRadius": "12px",
    "backgroundColor": "#eef2ff",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "6px"
  },
  ".quick-icon-text": {
    "fontSize": "19px"
  },
  ".quick-label": {
    "fontSize": "11px",
    "color": "#2d3a5e",
    "fontWeight": "600",
    "textAlign": "center"
  },
  ".quick-sub": {
    "fontSize": "10px",
    "color": "#8fa3c8",
    "textAlign": "center"
  },
  ".quick-more": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(255,255,255,0.28)",
    "borderRadius": "18px",
    "paddingTop": "14px",
    "paddingBottom": "12px",
    "paddingLeft": "6px",
    "paddingRight": "6px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(100,150,255,0.22)",
    "borderRightColor": "rgba(100,150,255,0.22)",
    "borderBottomColor": "rgba(100,150,255,0.22)",
    "borderLeftColor": "rgba(100,150,255,0.22)",
    "width": "50px"
  },
  ".more-dots": {
    "fontSize": "18px",
    "color": "#8fa3c8",
    "marginBottom": "6px"
  },
  ".more-label": {
    "fontSize": "10px",
    "color": "#8fa3c8",
    "textAlign": "center"
  },
  ".input-bar": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "0px",
    "paddingBottom": "24px",
    "paddingLeft": "14px",
    "paddingRight": "14px"
  },
  ".input-field": {
    "flex": 1,
    "backgroundColor": "rgba(255,255,255,0.28)",
    "borderRadius": "24px",
    "paddingTop": "11px",
    "paddingBottom": "11px",
    "paddingLeft": "18px",
    "paddingRight": "16px",
    "marginRight": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(100,150,255,0.22)",
    "borderRightColor": "rgba(100,150,255,0.22)",
    "borderBottomColor": "rgba(100,150,255,0.22)",
    "borderLeftColor": "rgba(100,150,255,0.22)"
  },
  ".input-placeholder": {
    "fontSize": "14px",
    "color": "#b0bcd4"
  },
  ".emoji-btn": {
    "fontSize": "24px",
    "marginRight": "10px"
  },
  ".send-btn": {
    "width": "40px",
    "height": "40px",
    "borderRadius": "20px",
    "backgroundColor": "#4e7cff",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".send-icon": {
    "fontSize": "16px",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "nav"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "brand"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "✦"
              },
              "classList": [
                "brand-star"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "团团"
              },
              "classList": [
                "brand-name"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "brand-tag"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "陪你每一程"
                  },
                  "classList": [
                    "brand-tag-text"
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
            "nav-icons"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "○"
              },
              "classList": [
                "nav-icon-clock"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "⋮"
              },
              "classList": [
                "nav-icon-menu"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "scroll",
      "attr": {
        "scrollDirection": "vertical"
      },
      "classList": [
        "scroll-area"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "scroll-inner"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "msg-row"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "avatar"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/assets/images/avatar.png"
                      },
                      "classList": [
                        "avatar-img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bubble-wrap"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + '你好！我是你的旅行伙伴 TripPal ✨' + ('\n') + '无论网络如何，我都会陪伴你' + ('\n') + '让每一段旅程都安心又愉快'}
                          },
                          "classList": [
                            "bubble-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "10:30"
                      },
                      "classList": [
                        "bubble-time"
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
                "card-wrap"
              ],
              "children": [
                {
                  "type": "trip-card",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-wrap"
              ],
              "children": [
                {
                  "type": "env-card",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "msg-row"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "avatar"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/assets/images/avatar.png"
                      },
                      "classList": [
                        "avatar-img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bubble-wrap"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble",
                        "bubble-offline"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + '目前处于无网络状态，' + ('\n') + '我已切换至离线模式' + ('\n') + '我会继续为你提供提醒和陪伴～'}
                          },
                          "classList": [
                            "bubble-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "10:30"
                      },
                      "classList": [
                        "bubble-time"
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
                "bottom-space"
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
        "quick-bar"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quick-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quick-icon-wrap"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "🔔"
                  },
                  "classList": [
                    "quick-icon-text"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "到站提醒"
              },
              "classList": [
                "quick-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "已开启"
              },
              "classList": [
                "quick-sub"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quick-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quick-icon-wrap"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "🗺"
                  },
                  "classList": [
                    "quick-icon-text"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "行程进度"
              },
              "classList": [
                "quick-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看进度"
              },
              "classList": [
                "quick-sub"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quick-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quick-icon-wrap",
                "red"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "💬"
                  },
                  "classList": [
                    "quick-icon-text"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "陪我聊天"
              },
              "classList": [
                "quick-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "打发时间"
              },
              "classList": [
                "quick-sub"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quick-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "···"
              },
              "classList": [
                "more-dots"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "更多功能"
              },
              "classList": [
                "more-label"
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
          "type": "div",
          "attr": {},
          "classList": [
            "input-field"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "告诉我你的需求吧～"
              },
              "classList": [
                "input-placeholder"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "🙂"
          },
          "classList": [
            "emoji-btn"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "send-btn"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "➤"
              },
              "classList": [
                "send-icon"
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

var $app_script$ = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page")
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