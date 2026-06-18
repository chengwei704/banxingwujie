(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  data: {
    currentLat: 30.297,
    currentLng: 120.213,
    mapScale: 12,
    departure: '杭州东站',
    destination: '上海虹桥站',
    remainTime: '32 分钟',
    progress: 52,
    markers: [{
      id: 1,
      latitude: 30.297,
      longitude: 120.213,
      title: '杭州东站',
      iconPath: '/common/marker_start.png'
    }, {
      id: 2,
      latitude: 31.194,
      longitude: 121.320,
      title: '上海虹桥站',
      iconPath: '/common/marker_end.png'
    }],
    polyline: [{
      points: [{
        latitude: 30.297,
        longitude: 120.213
      }, {
        latitude: 30.6,
        longitude: 120.6
      }, {
        latitude: 30.9,
        longitude: 120.9
      }, {
        latitude: 31.194,
        longitude: 121.320
      }],
      color: '#4e7cff',
      width: 4,
      dottedLine: false
    }],
    poiList: [{
      name: '外滩',
      dist: '距终点 2.1km',
      tag: '景点',
      emoji: '🏛️',
      color: '#ffe3ec'
    }, {
      name: '豫园',
      dist: '距终点 3.4km',
      tag: '景点',
      emoji: '🌿',
      color: '#e3f8ec'
    }, {
      name: '南翔小笼',
      dist: '距终点 1.8km',
      tag: '美食',
      emoji: '🍜',
      color: '#fff3e0'
    }, {
      name: '陆家嘴',
      dist: '距终点 4.2km',
      tag: '景点',
      emoji: '🏙️',
      color: '#e3edff'
    }]
  },
  onInit() {},
  onZoomIn() {
    this.mapScale = Math.min(this.mapScale + 1, 20);
  },
  onZoomOut() {
    this.mapScale = Math.max(this.mapScale - 1, 3);
  },
  onLocate() {}
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

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page ***!
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
    "paddingTop": "14px",
    "paddingBottom": "14px",
    "paddingLeft": "18px",
    "paddingRight": "18px",
    "backgroundColor": "#ffffff"
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
  ".map-area": {
    "height": "340px",
    "position": "relative"
  },
  ".map-comp": {
    "width": "100%",
    "height": "340px"
  },
  ".progress-float": {
    "position": "absolute",
    "bottom": "14px",
    "left": "14px",
    "right": "60px",
    "backgroundColor": "rgba(255,255,255,0.92)",
    "borderRadius": "14px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "14px",
    "paddingRight": "14px",
    "flexDirection": "column"
  },
  ".pf-row": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginBottom": "6px"
  },
  ".pf-stations": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".pf-name": {
    "fontSize": "13px",
    "fontWeight": "700",
    "color": "#1a2a4a"
  },
  ".pf-arrow": {
    "fontSize": "12px",
    "color": "#8fa3c8"
  },
  ".pf-remain": {
    "fontSize": "12px",
    "color": "#4e7cff",
    "fontWeight": "600"
  },
  ".pf-bar": {
    "height": "4px",
    "backgroundColor": "#eef2ff",
    "borderRadius": "99px",
    "overflow": "hidden"
  },
  ".pf-fill": {
    "height": "4px",
    "backgroundColor": "#4e7cff",
    "borderRadius": "99px"
  },
  ".map-btns": {
    "position": "absolute",
    "right": "14px",
    "bottom": "90px",
    "flexDirection": "column"
  },
  ".map-btn": {
    "width": "36px",
    "height": "36px",
    "borderRadius": "10px",
    "backgroundColor": "rgba(255,255,255,0.92)",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "8px"
  },
  ".map-btn-text": {
    "fontSize": "16px",
    "color": "#4e7cff",
    "fontWeight": "700"
  },
  ".bottom-area": {
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "14px",
    "paddingLeft": "14px",
    "paddingRight": "14px"
  },
  ".section-title": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "10px"
  },
  ".icon-pin": {
    "width": "14px",
    "height": "14px",
    "borderRadius": "7px",
    "backgroundColor": "#4e7cff",
    "marginRight": "6px"
  },
  ".section-title-text": {
    "fontSize": "14px",
    "fontWeight": "700",
    "color": "#2d3a5e"
  },
  ".poi-scroll": {
    "flexDirection": "row",
    "width": "100%",
    "height": "130px"
  },
  ".poi-card": {
    "width": "130px",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "borderRadius": "14px",
    "marginRight": "10px",
    "overflow": "hidden"
  },
  ".poi-img": {
    "width": "130px",
    "height": "72px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".poi-emoji": {
    "fontSize": "30px"
  },
  ".poi-info": {
    "flexDirection": "column",
    "paddingTop": "8px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "paddingRight": "10px"
  },
  ".poi-name": {
    "fontSize": "12px",
    "fontWeight": "600",
    "color": "#1a2a4a",
    "marginBottom": "4px"
  },
  ".poi-meta": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".poi-dist": {
    "fontSize": "10px",
    "color": "#8fa3c8"
  },
  ".poi-tag": {
    "fontSize": "9px",
    "backgroundColor": "#eef2ff",
    "color": "#4e7cff",
    "borderRadius": "6px",
    "paddingTop": "1px",
    "paddingBottom": "1px",
    "paddingLeft": "5px",
    "paddingRight": "5px",
    "fontWeight": "500"
  }
}

/***/ }),

/***/ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page& ***!
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
                "value": "TripPal"
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
      "type": "div",
      "attr": {},
      "classList": [
        "map-area"
      ],
      "children": [
        {
          "type": "map",
          "attr": {
            "id": "tripMap",
            "latitude": function () {return this.currentLat},
            "longitude": function () {return this.currentLng},
            "scale": function () {return this.mapScale},
            "markers": function () {return this.markers},
            "polyline": function () {return this.polyline}
          },
          "id": "tripMap",
          "classList": [
            "map-comp"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "progress-float"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "pf-row"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "pf-stations"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.departure}
                      },
                      "classList": [
                        "pf-name"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": " → "
                      },
                      "classList": [
                        "pf-arrow"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.destination}
                      },
                      "classList": [
                        "pf-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '' + '剩 ' + (this.remainTime)}
                  },
                  "classList": [
                    "pf-remain"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "pf-bar"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "pf-fill"
                  ],
                  "style": {
                    "width": function () {return '' + (this.progress) + '%'}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "map-btns"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "map-btn"
              ],
              "events": {
                "click": "onZoomIn"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "＋"
                  },
                  "classList": [
                    "map-btn-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "map-btn"
              ],
              "events": {
                "click": "onZoomOut"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "－"
                  },
                  "classList": [
                    "map-btn-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "map-btn"
              ],
              "events": {
                "click": "onLocate"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "◎"
                  },
                  "classList": [
                    "map-btn-text"
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
        "bottom-area"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "section-title"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "icon-pin"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "目的地附近推荐"
              },
              "classList": [
                "section-title-text"
              ]
            }
          ]
        },
        {
          "type": "list",
          "attr": {
            "id": "poiList"
          },
          "classList": [
            "poi-scroll"
          ],
          "id": "poiList",
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "poi"
              },
              "classList": [
                "poi-card"
              ],
              "repeat": function () {return this.poiList},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "poi-img"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.$item.color}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.emoji}
                      },
                      "classList": [
                        "poi-emoji"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "poi-info"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "poi-name"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "poi-meta"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.dist}
                          },
                          "classList": [
                            "poi-dist"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.tag}
                          },
                          "classList": [
                            "poi-tag"
                          ]
                        }
                      ]
                    }
                  ]
                }
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
  !*** ./src/pages/Home/index.ux?uxType=page ***!
  \*********************************************/

var $app_script$ = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=C:\Users\chengyuanyuan.com\AppData\Roaming\npm\node_modules\hap-toolkit\node_modules\@hap-toolkit\packager\babel.config.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/babel-loader/lib/index.js?cwd=C:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=C:\\Users\\chengyuanyuan.com\\AppData\\Roaming\\npm\\node_modules\\hap-toolkit\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../AppData/Roaming/npm/node_modules/hap-toolkit/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page")
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