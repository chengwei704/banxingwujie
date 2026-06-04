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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "color": "#1a2a4a",
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
    "width": "19px",
    "height": "19px",
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXENoYXRcXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FrSUE7RUFDQUEsT0FBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUN4UUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQy9lQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixtQkFBTyxDQUFDLG9oRUFBa2lDO0FBQzdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsOG1CQUFzVDtBQUNsVyxpQ0FBaUMsbUJBQU8sQ0FBQyxzb0JBQWtVO0FBQzNXLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD81YzEzIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD82ODYxIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD84NjQzIiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/MzMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8aW1wb3J0IG5hbWU9XCJ0cmlwLWNhcmRcIiBzcmM9XCIvY29tcG9uZW50cy9UcmlwQ2FyZC51eFwiPjwvaW1wb3J0PlxyXG48aW1wb3J0IG5hbWU9XCJlbnYtY2FyZFwiICBzcmM9XCIvY29tcG9uZW50cy9FbnZDYXJkLnV4XCI+PC9pbXBvcnQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cclxuXHJcbiAgICA8IS0tIOWvvOiIquagjyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJyYW5kXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJicmFuZC1zdGFyXCI+4pymPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnJhbmQtbmFtZVwiPuWbouWbojwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmQtdGFnXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImJyYW5kLXRhZy10ZXh0XCI+6Zmq5L2g5q+P5LiA56iLPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pY29uc1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibmF2LWljb24tY2xvY2tcIj7il4s8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtaWNvbi1tZW51XCI+4ouuPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0g5rua5Yqo5YaF5a655Yy6IC0tPlxyXG4gICAgPHNjcm9sbCBjbGFzcz1cInNjcm9sbC1hcmVhXCIgc2Nyb2xsLWRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cclxuXHJcbiAgICAgICAgPCEtLSDnrKzkuIDmnaHmsJTms6EgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1zZy1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyLWltZ1wiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlLXdyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRleHRcIj7kvaDlpb3vvIHmiJHmmK/kvaDnmoTml4XooYzkvJnkvLQgVHJpcFBhbCDinKh7eydcXG4nfX3ml6DorrrnvZHnu5zlpoLkvZXvvIzmiJHpg73kvJrpmarkvLTkvaB7eydcXG4nfX3orqnmr4/kuIDmrrXml4XnqIvpg73lronlv4Plj4jmhInlv6s8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10aW1lXCI+MTA6MzA8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSDooYznqIvljaHniYfvvIjlvJXlhaXvvIkgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgPHRyaXAtY2FyZD48L3RyaXAtY2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSDnjq/looPljaHniYfvvIjlvJXlhaXvvIkgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgPGVudi1jYXJkPjwvZW52LWNhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0g56ys5LqM5p2h5rCU5rOhIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtc2ctcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImF2YXRhci1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS13cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWJibGUgYnViYmxlLW9mZmxpbmVcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10ZXh0XCI+55uu5YmN5aSE5LqO5peg572R57uc54q25oCB77yMe3snXFxuJ3195oiR5bey5YiH5o2i6Iez56a757q/5qih5byPe3snXFxuJ3195oiR5Lya57un57ut5Li65L2g5o+Q5L6b5o+Q6YaS5ZKM6Zmq5Ly0772ePC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGltZVwiPjEwOjMwPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0g5bqV6YOo55WZ55m9IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tc3BhY2VcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zY3JvbGw+XHJcblxyXG4gICAgPCEtLSDlv6vmjbflip/og73moI8gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicXVpY2stYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWljb24td3JhcFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1pY29uLXRleHRcIj7wn5SUPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stbGFiZWxcIj7liLDnq5nmj5DphpI8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1zdWJcIj7lt7LlvIDlkK88L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2staWNvbi13cmFwXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLWljb24tdGV4dFwiPvCfl7o8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1sYWJlbFwiPuihjOeoi+i/m+W6pjwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLXN1YlwiPuafpeeci+i/m+W6pjwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVpY2staXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pY29uLXdyYXAgcmVkXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLWljb24tdGV4dFwiPvCfkqw8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1sYWJlbFwiPumZquaIkeiBiuWkqTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLXN1YlwiPuaJk+WPkeaXtumXtDwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVpY2staXRlbVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9yZS1kb3RzXCI+wrfCt8K3PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9yZS1sYWJlbFwiPuabtOWkmuWKn+iDvTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOi+k+WFpeagjyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1iYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJpbnB1dC1wbGFjZWhvbGRlclwiPuWRiuivieaIkeS9oOeahOmcgOaxguWQp++9njwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiZW1vamktYnRuXCI+8J+ZgjwvdGV4dD5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlbmQtYnRuXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5kLWljb25cIj7inqQ8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG9uSW5pdCgpIHt9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSDlr7zoiKrmoI8gPT09PT0gKi9cclxuICAubmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLXN0YXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMxYTJhNGE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5icmFuZC10YWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtdGFnLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pY29ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXYtaWNvbi1jbG9jayB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5uYXYtaWNvbi1tZW51IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOa7muWKqOWMuiA9PT09PSAqL1xyXG4gIC5zY3JvbGwtYXJlYSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1pbm5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSDmsJTms6HooYwgPT09PT0gKi9cclxuICAubXNnLXJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhci1pbWcge1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLXdyYXAge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMTZweCAxNnB4OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLW9mZmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmZjtcclxuICB9XHJcblxyXG4gIC5idWJibGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzJkM2E1ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgfVxyXG5cclxuICAuZGVjby1iaXJkIHtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2U5ZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmRlY28taW1nIHtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0g5Y2h54mH5YyF6KOFID09PT09ICovXHJcbiAgLmNhcmQtd3JhcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXNwYWNlIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0g5b+r5o235qCPID09PT09ICovXHJcbiAgLnF1aWNrLWJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnF1aWNrLWl0ZW0ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjUwLCAyNTUsIDAuNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pY29uLXdyYXAge1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pY29uLXdyYXAucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwZjA7XHJcbiAgfVxyXG5cclxuICAucXVpY2staWNvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzJkM2E1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucXVpY2stc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnF1aWNrLW1vcmUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMCwgMTUwLCAyNTUsIDAuMjIpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAubW9yZS1kb3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1vcmUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSDovpPlhaXmoI8gPT09PT0gKi9cclxuICAuaW5wdXQtYmFyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1maWVsZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDAsIDE1MCwgMjU1LCAwLjIyKTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2IwYmNkNDtcclxuICB9XHJcblxyXG4gIC5lbW9qaS1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbmQtYnRuIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VuZC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuPC9zdHlsZT4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucGFnZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmNGZmXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIubmF2XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE4cHhcIlxuICB9LFxuICBcIi5icmFuZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYnJhbmQtc3RhclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5icmFuZC1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLmJyYW5kLXRhZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiM3B4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5icmFuZC10YWctdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiXG4gIH0sXG4gIFwiLm5hdi1pY29uc1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubmF2LWljb24tY2xvY2tcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLm5hdi1pY29uLW1lbnVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5zY3JvbGwtYXJlYVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIuc2Nyb2xsLWlubmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIubXNnLXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiXG4gIH0sXG4gIFwiLmF2YXRhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ2cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIzcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5hdmF0YXItaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDZweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS13cmFwXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5idWJibGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS1vZmZsaW5lXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNWY4ZmZcIlxuICB9LFxuICBcIi5idWJibGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5idWJibGUtdGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIycHhcIlxuICB9LFxuICBcIi5kZWNvLWJpcmRcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGNlOWZmXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuZGVjby1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MnB4XCJcbiAgfSxcbiAgXCIuY2FyZC13cmFwXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCIuYm90dG9tLXNwYWNlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWl0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yOClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyNTUsMjUwLDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIucXVpY2staWNvbi13cmFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTlweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTlweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjZweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWljb24tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE5cHhcIlxuICB9LFxuICBcIi5xdWljay1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucXVpY2stc3ViXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5xdWljay1tb3JlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjgpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLm1vcmUtZG90c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCJcbiAgfSxcbiAgXCIubW9yZS1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuaW5wdXQtYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi5pbnB1dC1maWVsZFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjgpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTFweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjExcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwicmdiYSgxMDAsMTUwLDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMjIpXCJcbiAgfSxcbiAgXCIuaW5wdXQtcGxhY2Vob2xkZXJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNiMGJjZDRcIlxuICB9LFxuICBcIi5lbW9qaS1idG5cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5zZW5kLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2VuZC1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJwYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJyYW5kXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKcplwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJyYW5kLXN0YXJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWbouWbolwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJyYW5kLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJicmFuZC10YWdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6Zmq5L2g5q+P5LiA56iLXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmQtdGFnLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdi1pY29uc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLil4tcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXYtaWNvbi1jbG9ja1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4ouuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LWljb24tbWVudVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNjcm9sbFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzY3JvbGxEaXJlY3Rpb25cIjogXCJ2ZXJ0aWNhbFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNjcm9sbC1hcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNjcm9sbC1pbm5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXItaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS13cmFwXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICfkvaDlpb3vvIHmiJHmmK/kvaDnmoTml4XooYzkvJnkvLQgVHJpcFBhbCDinKgnICsgKCdcXG4nKSArICfml6DorrrnvZHnu5zlpoLkvZXvvIzmiJHpg73kvJrpmarkvLTkvaAnICsgKCdcXG4nKSArICforqnmr4/kuIDmrrXml4XnqIvpg73lronlv4Plj4jmhInlv6snfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIxMDozMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtd3JhcFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaXAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlbnYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtc2ctcm93XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS1vZmZsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgJ+ebruWJjeWkhOS6juaXoOe9kee7nOeKtuaAge+8jCcgKyAoJ1xcbicpICsgJ+aIkeW3suWIh+aNouiHs+emu+e6v+aooeW8jycgKyAoJ1xcbicpICsgJ+aIkeS8mue7p+e7reS4uuS9oOaPkOS+m+aPkOmGkuWSjOmZquS8tO+9nid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwOjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm90dG9tLXNwYWNlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicXVpY2stYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInF1aWNrLWl0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWljb24td3JhcFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn5SUXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yiw56uZ5o+Q6YaSXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2stbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW3suW8gOWQr1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLXN1YlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJxdWljay1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1pY29uLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+XulwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuihjOeoi+i/m+W6plwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmn6XnnIvov5vluqZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi13cmFwXCIsXG4gICAgICAgICAgICAgICAgXCJyZWRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+SrFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumZquaIkeiBiuWkqVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmiZPlj5Hml7bpl7RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLCt8K3wrdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtb3JlLWRvdHNcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuabtOWkmuWKn+iDvVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1vcmUtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpbnB1dC1iYXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5ZGK6K+J5oiR5L2g55qE6ZyA5rGC5ZCn772eXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5wdXQtcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+ZglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImVtb2ppLWJ0blwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VuZC1idG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4p6kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VuZC1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIm9uSW5pdCJdLCJzb3VyY2VSb290IjoiIn0=