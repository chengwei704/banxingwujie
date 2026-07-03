(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
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
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXEhvbWVcXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FnREE7RUFDQUEsS0FBQTtJQUNBO01BQ0FDLE9BQUEsR0FDQTtRQUNBQyxFQUFBO1FBQ0FDLFFBQUE7UUFDQUMsU0FBQTtRQUNBQyxLQUFBO1FBQ0FDLFFBQUE7TUFDQSxHQUNBO1FBQ0FKLEVBQUE7UUFDQUMsUUFBQTtRQUNBQyxTQUFBO1FBQ0FDLEtBQUE7UUFDQUMsUUFBQTtNQUNBLEVBQ0E7TUFDQUMsVUFBQSxHQUNBO1FBQUFDLEtBQUE7UUFBQUMsSUFBQTtRQUFBQyxJQUFBO01BQUEsR0FDQTtRQUFBRixLQUFBO1FBQUFDLElBQUE7UUFBQUMsSUFBQTtNQUFBLEdBQ0E7UUFBQUYsS0FBQTtRQUFBQyxJQUFBO1FBQUFDLElBQUE7TUFBQSxHQUNBO1FBQUFGLEtBQUE7UUFBQUMsSUFBQTtRQUFBQyxJQUFBO01BQUE7SUFFQTtFQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NiQTtFQUNBQyxLQUFBO0lBQ0FDLFNBQUE7TUFBQUMsT0FBQTtJQUFBO0lBQ0FDLFVBQUE7TUFBQUQsT0FBQTtJQUFBO0lBQ0FFLFdBQUE7TUFBQUYsT0FBQTtJQUFBO0lBQ0FHLFVBQUE7TUFBQUgsT0FBQTtJQUFBO0lBQ0FJLE9BQUE7TUFBQUosT0FBQTtJQUFBO0lBQ0FLLFVBQUE7TUFBQUwsT0FBQTtJQUFBO0lBQ0FNLFFBQUE7TUFBQU4sT0FBQTtJQUFBO0VBQ0E7RUFDQU8sY0FBQTtJQUNBLEtBQUFDLEtBQUE7RUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7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dUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzVLQSxtQkFBbUIsbUJBQU8sQ0FBQyxxeERBQXc1QjtBQUNuN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDhtQkFBbVQ7QUFDL1YsaUNBQWlDLG1CQUFPLENBQUMsc29CQUErVDtBQUN4VyxDQUFDO0FBQ0QsQzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLG1CQUFPLENBQUMsNmNBQTBPO0FBQ2xQLG1CQUFtQixtQkFBTyxDQUFDLG9oRUFBa2lDO0FBQzdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNHBCQUE2VTtBQUN6WCxpQ0FBaUMsbUJBQU8sQ0FBQyxzb0JBQWtVO0FBQzNXLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD84MTUxIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9mMjJhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9kZDQ3Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD9mNmJhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD82N2ZhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD80YTg0Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD8yZTZjIiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudXg/YzRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8aW1wb3J0IG5hbWU9XCJ0cmlwLWNhcmRcIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL1RyaXBDYXJkLnV4XCI+PC9pbXBvcnQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cclxuICAgIDwhLS0g6Ieq5a6a5LmJ6aG26YOo5a+86Iiq5qCP77yI5ZKMIENoYXQg6aG15LiA6Ie077yJIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1sZWZ0XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtYnJhbmRcIj7inKYgVHJpcFBhbDwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXRhZ1wiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtdGFnLXRleHRcIj7pmarkvaDmr4/kuIDnqIs8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb24tY2xvY2sucG5nXCIgY2xhc3M9XCJuYXYtaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb24tbW9yZS5wbmdcIiBjbGFzcz1cIm5hdi1pY29uXCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOWcsOWbvuWMuuWfnyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYXBcclxuICAgICAgICBpZD1cIm15TWFwXCJcclxuICAgICAgICBjbGFzcz1cIm1hcFwiXHJcbiAgICAgICAgbWFya2Vycz1cInt7bWFya2Vyc319XCJcclxuICAgICAgICBzY2FsZT1cIjE0XCJcclxuICAgICAgPjwvbWFwPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDlupXpg6jmqKrmu5HmjqjojZDljaHniYcgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVjb21tZW5kLXdyYXBwZXJcIj5cclxuICAgICAgPGxpc3QgY2xhc3M9XCJyZWNvbW1lbmQtbGlzdFwiIHNjcm9sbC1kaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwiY2FyZFwiIGNsYXNzPVwicmVjb21tZW5kLWl0ZW1cIiBmb3I9XCIoaW5kZXgsIGl0ZW0pIGluIHJlY29tbWVuZHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvbW1lbmQtY2FyZFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlY29tbWVuZC1lbW9qaVwiPnt7aXRlbS5lbW9qaX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlY29tbWVuZC1uYW1lXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZWNvbW1lbmQtZGVzY1wiPnt7aXRlbS5kZXNjfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgPC9saXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1hcmtlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzMS4yMzA0LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMjEuNDczNyxcclxuICAgICAgICAgIHRpdGxlOiBcIuS6uuawkeW5v+WculwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9pbWFnZXMvbWFya2VyLXN0YXJ0LnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGxhdGl0dWRlOiAzMS4yMzc4LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMjEuNDg0NixcclxuICAgICAgICAgIHRpdGxlOiBcIuWNl+S6rOS4nOi3r1wiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9pbWFnZXMvbWFya2VyLWVuZC5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcmVjb21tZW5kczogW1xyXG4gICAgICAgIHsgZW1vamk6IFwi8J+Pm++4j1wiLCBuYW1lOiBcIuWklua7qVwiLCBkZXNjOiBcIuS4h+WbveW7uuetkee+pFwiIH0sXHJcbiAgICAgICAgeyBlbW9qaTogXCLwn4+uXCIsIG5hbWU6IFwi6LGr5ZutXCIsIGRlc2M6IFwi5rGf5Y2X5Zut5p6XXCIgfSxcclxuICAgICAgICB7IGVtb2ppOiBcIvCfpZ9cIiwgbmFtZTogXCLljZfnv5TlsI/nrLxcIiwgZGVzYzogXCLnmb7lubTogIHlrZflj7dcIiB9LFxyXG4gICAgICAgIHsgZW1vamk6IFwi8J+Pme+4j1wiLCBuYW1lOiBcIumZhuWutuWYtFwiLCBkZXNjOiBcIumHkeiejeS4reW/g1wiIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ucGFnZSB7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogPT09PT09PT09PSDlr7zoiKrmoI8gPT09PT09PT09PSAqL1xyXG4ubmF2LWJhciB7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0ZmE7XHJcbn1cclxuLm5hdi1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5hdi1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMxYTJhNGE7XHJcbn1cclxuLm5hdi10YWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4ubmF2LXRhZy10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM0ZTdjZmY7XHJcbn1cclxuLm5hdi1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uYXYtaWNvbiB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09IOWcsOWbviA9PT09PT09PT09ICovXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogPT09PT09PT09PSDmjqjojZDljaHniYfmqKrmu5HljLogPT09PT09PT09PSAqL1xyXG4ucmVjb21tZW5kLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgcGFkZGluZzogOHB4IDAgMTJweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGY0ZmE7XHJcbn1cclxuLnJlY29tbWVuZC1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5yZWNvbW1lbmQtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4ucmVjb21tZW5kLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjJmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWNvbW1lbmQtZW1vamkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ucmVjb21tZW5kLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMWEyYTRhO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ucmVjb21tZW5kLWRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzhmYTNjODtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRyaXAtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbWFwXCI+PC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlLXRleHRcIj7lvZPliY3ooYznqIs8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saW5rXCIgb25jbGljaz1cIm9uRGV0YWlsQ2xpY2tcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGluay10ZXh0XCI+5p+l55yL6K+m5oOFIOKAujwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm91dGUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0aW9uLW5vZGUgYWxpZ24tbGVmdFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuWHuuWPkeWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVwYXJ0dXJlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzLXRpbWVcIj57e2RlcGFydFRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm91dGUtbWlkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFpbi1ub1wiPnt7dHJhaW5Ob319PC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1saW5lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWluLWNoaXBcIj48dGV4dCBjbGFzcz1cInRyYWluLWNoaXAtdGV4dFwiPumrmOmTgTwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtYmFkZ2VcIj7ooYznqIvov5vooYzkuK08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRpb24tbm9kZSBhbGlnbi1yaWdodFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuebrueahOWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVzdGluYXRpb259fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtdGltZVwiPnt7YXJyaXZlVGltZX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWxlZnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWUtbGFiZWxcIj7pooTorqHliankvZnml7bpl7QgPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZS1ib2xkXCI+e3tyZW1haW5UaW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImFycml2ZS1oaW50XCI+6aKE6K6hIHt7YXJyaXZlVGltZX19IOWIsOi+vjwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiB7e3Byb2dyZXNzfX0lO1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRlcGFydHVyZTogICB7IGRlZmF1bHQ6ICfmna3lt57kuJznq5knIH0sXHJcbiAgICBkZXBhcnRUaW1lOiAgeyBkZWZhdWx0OiAnMTA6MDAnIH0sXHJcbiAgICBkZXN0aW5hdGlvbjogeyBkZWZhdWx0OiAn5LiK5rW36Jm55qGl56uZJyB9LFxyXG4gICAgYXJyaXZlVGltZTogIHsgZGVmYXVsdDogJzExOjAyJyB9LFxyXG4gICAgdHJhaW5ObzogICAgIHsgZGVmYXVsdDogJ0cxMjIzJyB9LFxyXG4gICAgcmVtYWluVGltZTogIHsgZGVmYXVsdDogJzMyIOWIhumSnycgfSxcclxuICAgIHByb2dyZXNzOiAgICB7IGRlZmF1bHQ6IDUyIH0sXHJcbiAgfSxcclxuICBvbkRldGFpbENsaWNrKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGV0YWlsQ2xpY2snKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRyaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLW1hcCB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluayB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluay10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICB9XHJcblxyXG4gIC5yb3V0ZS1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpb24tbm9kZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAuYWxpZ24tbGVmdCAgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxyXG4gIC5hbGlnbi1yaWdodCB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxyXG5cclxuICAucy1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogI2IwYmNkNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcblxyXG4gIC5zLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMWEyYTRhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAucy10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNWE2ZDhhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcblxyXG4gIC5yb3V0ZS1taWQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAudHJhaW4tbm8ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrLWxpbmUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIC5kb3Qge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjhjOGU4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRhc2gge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gICAgLyogYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkOyAqL1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2I4YzhlODtcclxuICB9XHJcblxyXG4gIC50cmFpbi1jaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRyYWluLWNoaXAtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZhO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGltZS1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAudGltZS1sZWZ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM1YTZkOGE7XHJcbiAgfVxyXG5cclxuICAudGltZS1ib2xkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMWEyYTRhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5hcnJpdmUtaGludCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy13cmFwIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICB9XHJcbjwvc3R5bGU+IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRyaXAtY2FyZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmNhcmQtaGVhZGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMThweFwiXG4gIH0sXG4gIFwiLmNhcmQtdGl0bGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmljb24tbWFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTRweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiM3B4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjdweFwiXG4gIH0sXG4gIFwiLmNhcmQtdGl0bGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE1cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiXG4gIH0sXG4gIFwiLmNhcmQtbGlua1wiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5jYXJkLWxpbmstdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcIi5yb3V0ZS1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIuc3RhdGlvbi1ub2RlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiOTBweFwiXG4gIH0sXG4gIFwiLmFsaWduLWxlZnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcIi5hbGlnbi1yaWdodFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zLWxhYmVsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjYjBiY2Q0XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0cHhcIlxuICB9LFxuICBcIi5zLW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiODAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTJhNGFcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNnB4XCJcbiAgfSxcbiAgXCIucy10aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNWE2ZDhhXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIycHhcIlxuICB9LFxuICBcIi5yb3V0ZS1taWRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnRyYWluLW5vXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI2cHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRyYWNrLWxpbmVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIlxuICB9LFxuICBcIi5kb3RcIjoge1xuICAgIFwid2lkdGhcIjogXCI3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjdweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYjhjOGU4XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYjhjOGU4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYjhjOGU4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIuZGFzaFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiOGM4ZThcIlxuICB9LFxuICBcIi50cmFpbi1jaGlwXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjZweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjZweFwiXG4gIH0sXG4gIFwiLnRyYWluLWNoaXAtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH0sXG4gIFwiLnN0YXR1cy1iYWRnZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5kaXZpZGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjFweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwZjRmYVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTRweFwiXG4gIH0sXG4gIFwiLnRpbWUtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLnRpbWUtbGVmdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGltZS1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzVhNmQ4YVwiXG4gIH0sXG4gIFwiLnRpbWUtYm9sZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMmE0YVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiLmFycml2ZS1oaW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCJcbiAgfSxcbiAgXCIucHJvZ3Jlc3Mtd3JhcFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjk5cHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCIucHJvZ3Jlc3MtYmFyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjVweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOTlweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucGFnZVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmNGZmXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLm5hdi1iYXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNTZweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZjBmNGZhXCJcbiAgfSxcbiAgXCIubmF2LWxlZnRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5uYXYtYnJhbmRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTJhNGFcIlxuICB9LFxuICBcIi5uYXYtdGFnXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycHhcIlxuICB9LFxuICBcIi5uYXYtdGFnLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIlxuICB9LFxuICBcIi5uYXYtcmlnaHRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5uYXYtaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIubWFwLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIubWFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC13cmFwcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjExMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2YwZjRmYVwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC1saXN0XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJweFwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGZhZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucmVjb21tZW5kLWVtb2ppXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiXG4gIH0sXG4gIFwiLnJlY29tbWVuZC1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0cHhcIlxuICB9LFxuICBcIi5yZWNvbW1lbmQtZGVzY1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMnB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ0cmlwLWNhcmRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjYXJkLWhlYWRlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkLXRpdGxlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpY29uLW1hcFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5b2T5YmN6KGM56iLXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC10aXRsZS10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmQtbGlua1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25EZXRhaWxDbGlja1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmn6XnnIvor6bmg4Ug4oC6XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC1saW5rLXRleHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyb3V0ZS1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3RhdGlvbi1ub2RlXCIsXG4gICAgICAgICAgICBcImFsaWduLWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Ye65Y+R5ZywXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kZXBhcnR1cmV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtbmFtZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kZXBhcnRUaW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLXRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicm91dGUtbWlkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudHJhaW5Ob31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHJhaW4tbm9cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0cmFjay1saW5lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZG90XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRhc2hcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidHJhaW4tY2hpcFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpq5jpk4FcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFpbi1jaGlwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZGFzaFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkb3RcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLooYznqIvov5vooYzkuK1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzdGF0dXMtYmFkZ2VcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3RhdGlvbi1ub2RlXCIsXG4gICAgICAgICAgICBcImFsaWduLXJpZ2h0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuebrueahOWcsFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGVzdGluYXRpb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtbmFtZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hcnJpdmVUaW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLXRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJkaXZpZGVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpbWUtcm93XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpbWUtbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpooTorqHliankvZnml7bpl7QgXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGltZS1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZW1haW5UaW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aW1lLWJvbGRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAn6aKE6K6hICcgKyAodGhpcy5hcnJpdmVUaW1lKSArICcg5Yiw6L6+J31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYXJyaXZlLWhpbnRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicHJvZ3Jlc3Mtd3JhcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAodGhpcy5wcm9ncmVzcykgKyAnJSd9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInBhZ2VcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuYXYtYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdi1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKcpiBUcmlwUGFsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LWJyYW5kXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LXRhZ1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmarkvaDmr4/kuIDnqItcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuYXYtdGFnLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9hc3NldHMvaW1hZ2VzL2ljb24tY2xvY2sucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LWljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbi1tb3JlLnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hdi1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFwLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJtYXBcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiBcIm15TWFwXCIsXG4gICAgICAgICAgICBcIm1hcmtlcnNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1hcmtlcnN9LFxuICAgICAgICAgICAgXCJzY2FsZVwiOiBcIjE0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaWRcIjogXCJteU1hcFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibWFwXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJlY29tbWVuZC13cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzY3JvbGxEaXJlY3Rpb25cIjogXCJob3Jpem9udGFsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVjb21tZW5kLWxpc3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNhcmRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmQtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVjb21tZW5kc30sXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJpbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVjb21tZW5kLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmVtb2ppfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNvbW1lbmQtZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNvbW1lbmQtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY29tbWVuZC1kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3RyaXAtY2FyZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcCZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcFwiKVxufSk7XG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3V4LWxvYWRlci5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJnR5cGU9aW1wb3J0IS4uLy4uL2NvbXBvbmVudHMvVHJpcENhcmQudXg/dXhUeXBlPWNvbXAmbmFtZT10cmlwLWNhcmRcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJmltcG9ydE5hbWVzW109dHJpcC1jYXJkXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsiZGF0YSIsIm1hcmtlcnMiLCJpZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJpY29uUGF0aCIsInJlY29tbWVuZHMiLCJlbW9qaSIsIm5hbWUiLCJkZXNjIiwicHJvcHMiLCJkZXBhcnR1cmUiLCJkZWZhdWx0IiwiZGVwYXJ0VGltZSIsImRlc3RpbmF0aW9uIiwiYXJyaXZlVGltZSIsInRyYWluTm8iLCJyZW1haW5UaW1lIiwicHJvZ3Jlc3MiLCJvbkRldGFpbENsaWNrIiwiJGVtaXQiXSwic291cmNlUm9vdCI6IiJ9