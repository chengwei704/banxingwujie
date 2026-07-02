/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page ***!
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
      markers: [{
        id: 1,
        latitude: 31.2304,
        longitude: 121.4737,
        title: "人民广场",
        iconPath: "/assets/images/marker-start.png"
      }, {
        id: 2,
        latitude: 31.2378,
        longitude: 121.4846,
        title: "南京东路",
        iconPath: "/assets/images/marker-end.png"
      }],
      recommends: [{
        emoji: "🏛️",
        name: "外滩",
        desc: "万国建筑群"
      }, {
        emoji: "🏮",
        name: "豫园",
        desc: "江南园林"
      }, {
        emoji: "🥟",
        name: "南翔小笼",
        desc: "百年老字号"
      }, {
        emoji: "🏙️",
        name: "陆家嘴",
        desc: "金融中心"
      }]
    };
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  props: {
    departure: {
      default: '杭州东站'
    },
    departTime: {
      default: '10:00'
    },
    destination: {
      default: '上海虹桥站'
    },
    arriveTime: {
      default: '11:02'
    },
    trainNo: {
      default: 'G1223'
    },
    remainTime: {
      default: '32 分钟'
    },
    progress: {
      default: 52
    }
  },
  onDetailClick() {
    this.$emit('detailClick');
  }
};}

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".trip-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "20px",
    "paddingTop": "18px",
    "paddingRight": "18px",
    "paddingBottom": "16px",
    "paddingLeft": "18px",
    "flexDirection": "column"
  },
  ".card-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginBottom": "18px"
  },
  ".card-title": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".icon-map": {
    "width": "14px",
    "height": "14px",
    "borderRadius": "3px",
    "backgroundColor": "#4e7cff",
    "marginRight": "7px"
  },
  ".card-title-text": {
    "fontSize": "15px",
    "fontWeight": "700",
    "color": "#2d3a5e"
  },
  ".card-link": {
    "flex": 1,
    "alignItems": "flex-end"
  },
  ".card-link-text": {
    "fontSize": "13px",
    "color": "#8fa3c8",
    "textAlign": "right"
  },
  ".route-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginBottom": "16px"
  },
  ".station-node": {
    "flexDirection": "column",
    "width": "90px"
  },
  ".align-left": {
    "alignItems": "flex-start"
  },
  ".align-right": {
    "alignItems": "flex-end"
  },
  ".s-label": {
    "fontSize": "11px",
    "color": "#b0bcd4",
    "marginBottom": "4px"
  },
  ".s-name": {
    "fontSize": "20px",
    "fontWeight": "800",
    "color": "#1a2a4a",
    "lineHeight": "26px"
  },
  ".s-time": {
    "fontSize": "14px",
    "color": "#5a6d8a",
    "fontWeight": "500",
    "marginTop": "2px"
  },
  ".route-mid": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center",
    "paddingLeft": "8px",
    "paddingRight": "8px"
  },
  ".train-no": {
    "fontSize": "13px",
    "color": "#4e7cff",
    "fontWeight": "600",
    "marginBottom": "6px",
    "textAlign": "center"
  },
  ".track-line": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "100%",
    "marginBottom": "8px"
  },
  ".dot": {
    "width": "7px",
    "height": "7px",
    "borderRadius": "4px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#b8c8e8",
    "borderRightColor": "#b8c8e8",
    "borderBottomColor": "#b8c8e8",
    "borderLeftColor": "#b8c8e8",
    "backgroundColor": "#ffffff",
    "flexShrink": 0
  },
  ".dash": {
    "flex": 1,
    "height": "0px",
    "borderTopWidth": "2px",
    "borderTopColor": "#b8c8e8"
  },
  ".train-chip": {
    "backgroundColor": "#eef2ff",
    "borderRadius": "6px",
    "paddingTop": "2px",
    "paddingBottom": "2px",
    "paddingLeft": "6px",
    "paddingRight": "6px"
  },
  ".train-chip-text": {
    "fontSize": "10px",
    "color": "#4e7cff",
    "fontWeight": "600"
  },
  ".status-badge": {
    "fontSize": "11px",
    "color": "#4e7cff",
    "backgroundColor": "#eef2ff",
    "borderRadius": "20px",
    "paddingTop": "3px",
    "paddingBottom": "3px",
    "paddingLeft": "12px",
    "paddingRight": "12px",
    "fontWeight": "500",
    "textAlign": "center"
  },
  ".divider": {
    "height": "1px",
    "backgroundColor": "#f0f4fa",
    "marginTop": "14px",
    "marginBottom": "14px"
  },
  ".time-row": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  ".time-left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".time-label": {
    "fontSize": "13px",
    "color": "#5a6d8a"
  },
  ".time-bold": {
    "fontSize": "13px",
    "color": "#1a2a4a",
    "fontWeight": "700"
  },
  ".arrive-hint": {
    "fontSize": "13px",
    "color": "#8fa3c8"
  },
  ".progress-wrap": {
    "marginTop": "12px",
    "height": "5px",
    "backgroundColor": "#eef2ff",
    "borderRadius": "99px",
    "overflow": "hidden"
  },
  ".progress-bar": {
    "height": "5px",
    "backgroundColor": "#4e7cff",
    "borderRadius": "99px"
  }
}

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "flex": 1,
    "backgroundColor": "#f0f4ff",
    "display": "flex",
    "flexDirection": "column"
  },
  ".nav-bar": {
    "height": "56px",
    "paddingTop": "0px",
    "paddingRight": "16px",
    "paddingBottom": "0px",
    "paddingLeft": "16px",
    "backgroundColor": "#ffffff",
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f0f4fa"
  },
  ".nav-left": {
    "display": "flex",
    "alignItems": "center"
  },
  ".nav-brand": {
    "fontSize": "18px",
    "fontWeight": "600",
    "color": "#1a2a4a"
  },
  ".nav-tag": {
    "marginLeft": "10px",
    "paddingTop": "2px",
    "paddingRight": "10px",
    "paddingBottom": "2px",
    "paddingLeft": "10px",
    "backgroundColor": "#eef2ff",
    "borderRadius": "12px"
  },
  ".nav-tag-text": {
    "fontSize": "11px",
    "color": "#4e7cff"
  },
  ".nav-right": {
    "display": "flex",
    "alignItems": "center"
  },
  ".nav-icon": {
    "width": "22px",
    "height": "22px",
    "marginLeft": "16px"
  },
  ".map-container": {
    "flex": 1
  },
  ".map": {
    "width": "100%",
    "height": "100%"
  },
  ".recommend-wrapper": {
    "height": "110px",
    "paddingTop": "8px",
    "paddingRight": "0px",
    "paddingBottom": "12px",
    "paddingLeft": "0px",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderTopStyle": "solid",
    "borderTopColor": "#f0f4fa"
  },
  ".recommend-list": {
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "flexDirection": "row"
  },
  ".recommend-item": {
    "width": "100px",
    "marginRight": "12px"
  },
  ".recommend-card": {
    "backgroundColor": "#f8faff",
    "borderRadius": "16px",
    "paddingTop": "12px",
    "paddingRight": "10px",
    "paddingBottom": "12px",
    "paddingLeft": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eef2ff",
    "borderRightColor": "#eef2ff",
    "borderBottomColor": "#eef2ff",
    "borderLeftColor": "#eef2ff",
    "alignItems": "center"
  },
  ".recommend-emoji": {
    "fontSize": "28px"
  },
  ".recommend-name": {
    "fontSize": "14px",
    "fontWeight": "500",
    "color": "#1a2a4a",
    "marginTop": "4px"
  },
  ".recommend-desc": {
    "fontSize": "10px",
    "color": "#8fa3c8",
    "marginTop": "2px"
  }
}

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "trip-card"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "card-header"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card-title"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "icon-map"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "当前行程"
              },
              "classList": [
                "card-title-text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card-link"
          ],
          "events": {
            "click": "onDetailClick"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "查看详情 ›"
              },
              "classList": [
                "card-link-text"
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
        "route-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "station-node",
            "align-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "出发地"
              },
              "classList": [
                "s-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.departure}
              },
              "classList": [
                "s-name"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.departTime}
              },
              "classList": [
                "s-time"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "route-mid"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.trainNo}
              },
              "classList": [
                "train-no"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "track-line"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dot"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dash"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "train-chip"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "高铁"
                      },
                      "classList": [
                        "train-chip-text"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dash"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "dot"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "行程进行中"
              },
              "classList": [
                "status-badge"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "station-node",
            "align-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "目的地"
              },
              "classList": [
                "s-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.destination}
              },
              "classList": [
                "s-name"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.arriveTime}
              },
              "classList": [
                "s-time"
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
        "divider"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "time-row"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "time-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "预计剩余时间 "
              },
              "classList": [
                "time-label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.remainTime}
              },
              "classList": [
                "time-bold"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + '预计 ' + (this.arriveTime) + ' 到达'}
          },
          "classList": [
            "arrive-hint"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "progress-wrap"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "progress-bar"
          ],
          "style": {
            "width": function () {return '' + (this.progress) + '%'}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=trip-card":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=trip-card ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "nav-bar"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "nav-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "✦ TripPal"
              },
              "classList": [
                "nav-brand"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "nav-tag"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "陪你每一程"
                  },
                  "classList": [
                    "nav-tag-text"
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
            "nav-right"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/assets/images/icon-clock.png"
              },
              "classList": [
                "nav-icon"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": "/assets/images/icon-more.png"
              },
              "classList": [
                "nav-icon"
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
        "map-container"
      ],
      "children": [
        {
          "type": "map",
          "attr": {
            "id": "myMap",
            "markers": function () {return this.markers},
            "scale": "14"
          },
          "id": "myMap",
          "classList": [
            "map"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "recommend-wrapper"
      ],
      "children": [
        {
          "type": "list",
          "attr": {
            "scrollDirection": "horizontal"
          },
          "classList": [
            "recommend-list"
          ],
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "card"
              },
              "classList": [
                "recommend-item"
              ],
              "repeat": {
                "exp": function () {return this.recommends},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "recommend-card"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.emoji}
                      },
                      "classList": [
                        "recommend-emoji"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.name}
                      },
                      "classList": [
                        "recommend-name"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.desc}
                      },
                      "classList": [
                        "recommend-desc"
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

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_script$ = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./TripCard.ux?uxType=comp */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp")
$app_define$('@app-component/trip-card', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./TripCard.ux?uxType=comp& */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./TripCard.ux?uxType=comp */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp")
});
;

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
__webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&type=import!../../components/TripCard.ux?uxType=comp&name=trip-card */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card")
var $app_script$ = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=trip-card */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=trip-card")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.0.9" });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXEhvbWVcXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztpQ0FnREE7RUFDQUEsS0FBQTtJQUNBO01BQ0FDLE9BQUEsR0FDQTtRQUNBQyxFQUFBO1FBQ0FDLFFBQUE7UUFDQUMsU0FBQTtRQUNBQyxLQUFBO1FBQ0FDLFFBQUE7TUFDQSxHQUNBO1FBQ0FKLEVBQUE7UUFDQUMsUUFBQTtRQUNBQyxTQUFBO1FBQ0FDLEtBQUE7UUFDQUMsUUFBQTtNQUNBLEVBQ0E7TUFDQUMsVUFBQSxHQUNBO1FBQUFDLEtBQUE7UUFBQUMsSUFBQTtRQUFBQyxJQUFBO01BQUEsR0FDQTtRQUFBRixLQUFBO1FBQUFDLElBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQUYsS0FBQTtRQUFBQyxJQUFBO1FBQUFDLElBQUE7TUFBQSxHQUNBO1FBQUFGLEtBQUE7UUFBQUMsSUFBQTtRQUFBQyxJQUFBO01BQUE7SUFFQTtFQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NiQTtFQUNBQyxLQUFBO0lBQ0FDLFNBQUE7TUFBQUMsT0FBQTtJQUFBO0lBQ0FDLFVBQUE7TUFBQUQsT0FBQTtJQUFBO0lBQ0FFLFdBQUE7TUFBQUYsT0FBQTtJQUFBO0lBQ0FHLFVBQUE7TUFBQUgsT0FBQTtJQUFBO0lBQ0FJLE9BQUE7TUFBQUosT0FBQTtJQUFBO0lBQ0FLLFVBQUE7TUFBQUwsT0FBQTtJQUFBO0lBQ0FNLFFBQUE7TUFBQU4sT0FBQTtJQUFBO0VBQ0E7RUFDQU8sY0FBQTtJQUNBLEtBQUFDLEtBQUE7RUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7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QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzVLQSxtQkFBbUIsbUJBQU8sQ0FBQyxxeERBQXc1QjtBQUNuN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDhtQkFBbVQ7QUFDL1YsaUNBQWlDLG1CQUFPLENBQUMsc29CQUErVDtBQUN4VyxDQUFDO0FBQ0QsQzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLG1CQUFPLENBQUMsNmNBQTBPO0FBQ2xQLG1CQUFtQixtQkFBTyxDQUFDLG9oRUFBa2lDO0FBQzdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNHBCQUE2VTtBQUN6WCxpQ0FBaUMsbUJBQU8sQ0FBQyxzb0JBQWtVO0FBQzNXLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD84MTUxIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9mMjJhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9kZDQ3Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD9mNmJhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD82N2ZhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD80YTg0Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD8yZTZjIiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudXg/YzRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8aW1wb3J0IG5hbWU9XCJ0cmlwLWNhcmRcIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL1RyaXBDYXJkLnV4XCI+PC9pbXBvcnQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cclxuICAgIDwhLS0g6Ieq5a6a5LmJ6aG26YOo5a+86Iiq5qCP77yI5ZKMIENoYXQg6aG15LiA6Ie077yJIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1sZWZ0XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtYnJhbmRcIj7inKYgVHJpcFBhbDwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXRhZ1wiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtdGFnLXRleHRcIj7pmarkvaDmr4/kuIDnqIs8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb24tY2xvY2sucG5nXCIgY2xhc3M9XCJuYXYtaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb24tbW9yZS5wbmdcIiBjbGFzcz1cIm5hdi1pY29uXCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOWcsOWbvuWMuuWfnyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYXBcclxuICAgICAgICBpZD1cIm15TWFwXCJcclxuICAgICAgICBjbGFzcz1cIm1hcFwiXHJcbiAgICAgICAgbWFya2Vycz1cInt7bWFya2Vyc319XCJcclxuICAgICAgICBzY2FsZT1cIjE0XCJcclxuICAgICAgPjwvbWFwPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDlupXpg6jmqKrmu5HmjqjojZDljaHniYcgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVjb21tZW5kLXdyYXBwZXJcIj5cclxuICAgICAgPGxpc3QgY2xhc3M9XCJyZWNvbW1lbmQtbGlzdFwiIHNjcm9sbC1kaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwiY2FyZFwiIGNsYXNzPVwicmVjb21tZW5kLWl0ZW1cIiBmb3I9XCIoaW5kZXgsIGl0ZW0pIGluIHJlY29tbWVuZHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvbW1lbmQtY2FyZFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlY29tbWVuZC1lbW9qaVwiPnt7aXRlbS5lbW9qaX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlY29tbWVuZC1uYW1lXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZWNvbW1lbmQtZGVzY1wiPnt7aXRlbS5kZXNjfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgPC9saXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1hcmtlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzMS4yMzA0LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMjEuNDczNyxcclxuICAgICAgICAgIHRpdGxlOiBcIuS6uuawkeW5v+WculwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9pbWFnZXMvbWFya2VyLXN0YXJ0LnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGxhdGl0dWRlOiAzMS4yMzc4LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMjEuNDg0NixcclxuICAgICAgICAgIHRpdGxlOiBcIuWNl+S6rOS4nOi3r1wiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9pbWFnZXMvbWFya2VyLWVuZC5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcmVjb21tZW5kczogW1xyXG4gICAgICAgIHsgZW1vamk6IFwi8J+Pm++4j1wiLCBuYW1lOiBcIuWklua7qVwiLCBkZXNjOiBcIuS4h+WbveW7uuetkee+pFwiIH0sXHJcbiAgICAgICAgeyBlbW9qaTogXCLwn4+uXCIsIG5hbWU6IFwi6LGr5ZutXCIsIGRlc2M6IFwi5rGf5Y2X5Zut5p6XXCIgfSxcclxuICAgICAgICB7IGVtb2ppOiBcIvCfpZ9cIiwgbmFtZTogXCLljZfnv5TlsI/nrLxcIiwgZGVzYzogXCLnmb7lubTogIHlrZflj7dcIiB9LFxyXG4gICAgICAgIHsgZW1vamk6IFwi8J+Pme+4j1wiLCBuYW1lOiBcIumZhuWutuWYtFwiLCBkZXNjOiBcIumHkeiejeS4reW/g1wiIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ucGFnZSB7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogPT09PT09PT09PSDlr7zoiKrmoI8gPT09PT09PT09PSAqL1xyXG4ubmF2LWJhciB7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0ZmE7XHJcbn1cclxuLm5hdi1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5hdi1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMxYTJhNGE7XHJcbn1cclxuLm5hdi10YWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4ubmF2LXRhZy10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM0ZTdjZmY7XHJcbn1cclxuLm5hdi1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uYXYtaWNvbiB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09IOWcsOWbviA9PT09PT09PT09ICovXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogPT09PT09PT09PSDmjqjojZDljaHniYfmqKrmu5HljLogPT09PT09PT09PSAqL1xyXG4ucmVjb21tZW5kLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgcGFkZGluZzogOHB4IDAgMTJweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGY0ZmE7XHJcbn1cclxuLnJlY29tbWVuZC1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5yZWNvbW1lbmQtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4ucmVjb21tZW5kLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjJmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWNvbW1lbmQtZW1vamkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ucmVjb21tZW5kLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMWEyYTRhO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ucmVjb21tZW5kLWRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzhmYTNjODtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRyaXAtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbWFwXCI+PC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlLXRleHRcIj7lvZPliY3ooYznqIs8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saW5rXCIgb25jbGljaz1cIm9uRGV0YWlsQ2xpY2tcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGluay10ZXh0XCI+5p+l55yL6K+m5oOFIOKAujwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm91dGUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0aW9uLW5vZGUgYWxpZ24tbGVmdFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuWHuuWPkeWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVwYXJ0dXJlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzLXRpbWVcIj57e2RlcGFydFRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm91dGUtbWlkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFpbi1ub1wiPnt7dHJhaW5Ob319PC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1saW5lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWluLWNoaXBcIj48dGV4dCBjbGFzcz1cInRyYWluLWNoaXAtdGV4dFwiPumrmOmTgTwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtYmFkZ2VcIj7ooYznqIvov5vooYzkuK08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRpb24tbm9kZSBhbGlnbi1yaWdodFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuebrueahOWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVzdGluYXRpb259fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtdGltZVwiPnt7YXJyaXZlVGltZX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWxlZnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWUtbGFiZWxcIj7pooTorqHliankvZnml7bpl7QgPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZS1ib2xkXCI+e3tyZW1haW5UaW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImFycml2ZS1oaW50XCI+6aKE6K6hIHt7YXJyaXZlVGltZX19IOWIsOi+vjwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiB7e3Byb2dyZXNzfX0lO1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRlcGFydHVyZTogICB7IGRlZmF1bHQ6ICfmna3lt57kuJznq5knIH0sXHJcbiAgICBkZXBhcnRUaW1lOiAgeyBkZWZhdWx0OiAnMTA6MDAnIH0sXHJcbiAgICBkZXN0aW5hdGlvbjogeyBkZWZhdWx0OiAn5LiK5rW36Jm55qGl56uZJyB9LFxyXG4gICAgYXJyaXZlVGltZTogIHsgZGVmYXVsdDogJzExOjAyJyB9LFxyXG4gICAgdHJhaW5ObzogICAgIHsgZGVmYXVsdDogJ0cxMjIzJyB9LFxyXG4gICAgcmVtYWluVGltZTogIHsgZGVmYXVsdDogJzMyIOWIhumSnycgfSxcclxuICAgIHByb2dyZXNzOiAgICB7IGRlZmF1bHQ6IDUyIH0sXHJcbiAgfSxcclxuICBvbkRldGFpbENsaWNrKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGV0YWlsQ2xpY2snKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRyaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLW1hcCB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluayB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluay10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAucm91dGUtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zdGF0aW9uLW5vZGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFsaWduLWxlZnQgIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuICAuYWxpZ24tcmlnaHQgeyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cclxuXHJcbiAgLnMtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICNiMGJjZDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAucy1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzFhMmE0YTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLnMtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzVhNmQ4YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG5cclxuICAucm91dGUtbWlkIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRyYWluLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50cmFjay1saW5lIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZG90IHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2I4YzhlODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gIC5kYXNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIC8qIGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDsgKi9cclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNiOGM4ZTg7XHJcbiAgfVxyXG5cclxuICAudHJhaW4tY2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIC50cmFpbi1jaGlwLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmYTtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtbGVmdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aW1lLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNWE2ZDhhO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtYm9sZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzFhMmE0YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYXJyaXZlLWhpbnQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi50cmlwLWNhcmRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE4cHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jYXJkLWhlYWRlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE4cHhcIlxuICB9LFxuICBcIi5jYXJkLXRpdGxlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5pY29uLW1hcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI3cHhcIlxuICB9LFxuICBcIi5jYXJkLXRpdGxlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5jYXJkLWxpbmtcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuY2FyZC1saW5rLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCIucm91dGUtY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLnN0YXRpb24tbm9kZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjkwcHhcIlxuICB9LFxuICBcIi5hbGlnbi1sZWZ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCIuYWxpZ24tcmlnaHRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIucy1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2IwYmNkNFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIucy1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjZweFwiXG4gIH0sXG4gIFwiLnMtdGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzVhNmQ4YVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMnB4XCJcbiAgfSxcbiAgXCIucm91dGUtbWlkXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi50cmFpbi1ub1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50cmFjay1saW5lXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuZG90XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiOGM4ZThcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwXG4gIH0sXG4gIFwiLmRhc2hcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYjhjOGU4XCJcbiAgfSxcbiAgXCIudHJhaW4tY2hpcFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2cHhcIlxuICB9LFxuICBcIi50cmFpbi1jaGlwLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5zdGF0dXMtYmFkZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY0ZmFcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE0cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi50aW1lLXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi50aW1lLWxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpbWUtbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1YTZkOGFcIlxuICB9LFxuICBcIi50aW1lLWJvbGRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTJhNGFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5hcnJpdmUtaGludFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiXG4gIH0sXG4gIFwiLnByb2dyZXNzLXdyYXBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI5OXB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwiLnByb2dyZXNzLWJhclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjk5cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnBhZ2VcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwZjRmZlwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5uYXYtYmFyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjU2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2YwZjRmYVwiXG4gIH0sXG4gIFwiLm5hdi1sZWZ0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubmF2LWJyYW5kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCJcbiAgfSxcbiAgXCIubmF2LXRhZ1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIubmF2LXRhZy10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCJcbiAgfSxcbiAgXCIubmF2LXJpZ2h0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubmF2LWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIyMnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLm1hcC1jb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLm1hcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtd3JhcHBlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjhweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNmMGY0ZmFcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycHhcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtY2FyZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmYWZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC1lbW9qaVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMmE0YVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIucmVjb21tZW5kLWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjJweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwidHJpcC1jYXJkXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2FyZC1oZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2FyZC10aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaWNvbi1tYXBcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW9k+WJjeihjOeoi1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtdGl0bGUtdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkLWxpbmtcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9uRGV0YWlsQ2xpY2tcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5p+l55yL6K+m5oOFIOKAulwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtbGluay10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicm91dGUtY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0YXRpb24tbm9kZVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWHuuWPkeWcsFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGVwYXJ0dXJlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGVwYXJ0VGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy10aW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvdXRlLW1pZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRyYWluTm99XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRyYWluLW5vXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHJhY2stbGluZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRvdFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXNoXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRyYWluLWNoaXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6auY6ZOBXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhaW4tY2hpcC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRhc2hcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZG90XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6KGM56iL6L+b6KGM5LitXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3RhdHVzLWJhZGdlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0YXRpb24tbm9kZVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnm67nmoTlnLBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYXJyaXZlVGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy10aW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGl2aWRlclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aW1lLXJvd1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aW1lLWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aKE6K6h5Ymp5L2Z5pe26Ze0IFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWUtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVtYWluVGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGltZS1ib2xkXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgJ+mihOiuoSAnICsgKHRoaXMuYXJyaXZlVGltZSkgKyAnIOWIsOi+vid9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFycml2ZS1oaW50XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInByb2dyZXNzLXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJ3aWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgKHRoaXMucHJvZ3Jlc3MpICsgJyUnfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJwYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2LWJhclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYXYtbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLinKYgVHJpcFBhbFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hdi1icmFuZFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hdi10YWdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6Zmq5L2g5q+P5LiA56iLXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibmF2LXRhZy10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYXYtcmlnaHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvYXNzZXRzL2ltYWdlcy9pY29uLWNsb2NrLnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hdi1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9hc3NldHMvaW1hZ2VzL2ljb24tbW9yZS5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXYtaWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hcC1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibWFwXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogXCJteU1hcFwiLFxuICAgICAgICAgICAgXCJtYXJrZXJzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJrZXJzfSxcbiAgICAgICAgICAgIFwic2NhbGVcIjogXCIxNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlkXCI6IFwibXlNYXBcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1hcFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyZWNvbW1lbmQtd3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic2Nyb2xsRGlyZWN0aW9uXCI6IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlY29tbWVuZC1saXN0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXJkXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlY29tbWVuZHN9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJlY29tbWVuZC1jYXJkXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5lbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjb21tZW5kLWVtb2ppXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjb21tZW5kLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNvbW1lbmQtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXOS8tOihjOaXoOeVjCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcFwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC90cmlwLWNhcmQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vVHJpcENhcmQudXg/dXhUeXBlPWNvbXAmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vVHJpcENhcmQudXg/dXhUeXBlPWNvbXBcIilcbn0pO1xuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJyZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy91eC1sb2FkZXIuanM/Y3dkPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXOS8tOihjOaXoOeVjCZ0eXBlPWltcG9ydCEuLi8uLi9jb21wb25lbnRzL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wJm5hbWU9dHJpcC1jYXJkXCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXOS8tOihjOaXoOeVjCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZpbXBvcnROYW1lc1tdPXRyaXAtY2FyZFwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbImRhdGEiLCJtYXJrZXJzIiwiaWQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRpdGxlIiwiaWNvblBhdGgiLCJyZWNvbW1lbmRzIiwiZW1vamkiLCJuYW1lIiwiZGVzYyIsInByb3BzIiwiZGVwYXJ0dXJlIiwiZGVmYXVsdCIsImRlcGFydFRpbWUiLCJkZXN0aW5hdGlvbiIsImFycml2ZVRpbWUiLCJ0cmFpbk5vIiwicmVtYWluVGltZSIsInByb2dyZXNzIiwib25EZXRhaWxDbGljayIsIiRlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==