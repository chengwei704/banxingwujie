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
      messages: [],
      currentCity: '上海',
      cityData: null,
      inputText: ''
    };
  },
  onInput(e) {
    this.inputText = e.value;
  },
  onSend() {
    const text = this.inputText.trim();
    if (!text) return;
    this.sendMessage(text);
    this.inputText = '';
  },
  async onReady() {
    await this.loadHistory();
    await this.loadCityData();
    console.log('✅ 页面初始化完成');
  },
  async loadHistory() {
    try {
      const sql = `SELECT * FROM chat_history ORDER BY timestamp ASC LIMIT 50`;
      const result = await execSQL(sql);
      if (result.rows) {
        this.messages = result.rows.map(row => ({
          role: row.role,
          content: row.content,
          time: row.timestamp
        }));
      }
      console.log('✅ 加载历史消息成功，共', this.messages.length, '条');
    } catch (err) {
      console.error('❌ 加载历史失败', err);
    }
  },
  async loadCityData() {
    try {
      const result = await execSQL(sql, [this.currentCity]);
      if (result.rows && result.rows.length > 0) {
        const data = result.rows[0];
        this.cityData = {
          attractions: JSON.parse(data.attractions),
          tips: JSON.parse(data.tips),
          food: JSON.parse(data.food)
        };
        console.log('✅ 加载城市数据成功', this.cityData);
      }
    } catch (err) {
      console.error('❌ 加载城市数据失败', err);
    }
  },
  async saveMessage(role, content) {},
  async sendMessage(input) {
    if (!input) return;
    this.messages.push({
      role: 'user',
      content: input,
      time: new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  },
  getOfflineReply(input) {
    let reply = '🕊️ 团团离线提示：';
    if (input.includes('景点') || input.includes('玩')) {
      var _this$cityData, _this$cityData$attrac;
      reply += `\n推荐景点：${((_this$cityData = this.cityData) === null || _this$cityData === void 0 ? void 0 : (_this$cityData$attrac = _this$cityData.attractions) === null || _this$cityData$attrac === void 0 ? void 0 : _this$cityData$attrac.join('、')) || '外滩、豫园'}`;
    } else if (input.includes('吃') || input.includes('美食')) {
      var _this$cityData2, _this$cityData2$food;
      reply += `\n推荐美食：${((_this$cityData2 = this.cityData) === null || _this$cityData2 === void 0 ? void 0 : (_this$cityData2$food = _this$cityData2.food) === null || _this$cityData2$food === void 0 ? void 0 : _this$cityData2$food.join('、')) || '小笼包、生煎'}`;
    } else {
      reply += `\n当前在${this.currentCity}，有需要随时问我~`;
    }
    this.messages.push({
      role: 'assistant',
      content: reply,
      time: new Date().toLocaleString()
    });
    this.saveMessage('assistant', reply);
  },
  async callAI(input) {
    try {
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          msg: input
        })
      });
      const data = await res.json();
      return data.reply || '团团暂时走神了，再问一次吧~';
    } catch (err) {
      console.error('调用AI失败', err);
      throw err;
    }
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  props: {
    networkText: {
      default: '无线网络连接'
    },
    battery: {
      default: '68%'
    },
    location: {
      default: '杭州市 · 行驶中'
    }
  }
};}

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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".env-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "20px",
    "paddingTop": "16px",
    "paddingRight": "18px",
    "paddingBottom": "18px",
    "paddingLeft": "18px",
    "flexDirection": "column"
  },
  ".env-title": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "14px"
  },
  ".icon-wifi": {
    "width": "14px",
    "height": "14px",
    "borderRadius": "7px",
    "backgroundColor": "#4e7cff",
    "marginRight": "7px"
  },
  ".env-title-text": {
    "fontSize": "15px",
    "fontWeight": "700",
    "color": "#2d3a5e"
  },
  ".env-row": {
    "flexDirection": "row",
    "alignItems": "flex-start"
  },
  ".env-item": {
    "flex": 1,
    "flexDirection": "column",
    "marginRight": "6px"
  },
  ".env-item-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "5px"
  },
  ".icon-small": {
    "width": "14px",
    "height": "14px",
    "borderRadius": "3px",
    "marginRight": "4px"
  },
  ".icon-wifi-sm": {
    "backgroundColor": "#8fa3c8",
    "borderRadius": "7px"
  },
  ".icon-loc": {
    "backgroundColor": "#8fa3c8",
    "borderRadius": "7px"
  },
  ".battery-bar": {
    "width": "22px",
    "height": "11px",
    "borderTopWidth": "1.5px",
    "borderRightWidth": "1.5px",
    "borderBottomWidth": "1.5px",
    "borderLeftWidth": "1.5px",
    "borderStyle": "solid",
    "borderTopColor": "#52c41a",
    "borderRightColor": "#52c41a",
    "borderBottomColor": "#52c41a",
    "borderLeftColor": "#52c41a",
    "borderRadius": "3px",
    "paddingTop": "2px",
    "paddingBottom": "2px",
    "paddingLeft": "2px",
    "paddingRight": "2px",
    "marginRight": "4px"
  },
  ".battery-fill": {
    "width": "70%",
    "height": "100%",
    "backgroundColor": "#52c41a",
    "borderRadius": "2px"
  },
  ".env-label": {
    "fontSize": "12px",
    "color": "#8fa3c8"
  },
  ".env-value": {
    "fontSize": "13px",
    "fontWeight": "600",
    "color": "#2d3a5e"
  },
  ".env-value-blue": {
    "color": "#4e7cff",
    "fontWeight": "500",
    "fontSize": "12px"
  }
}

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
    "backgroundColor": "#fff0f0",
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
    "height": "44px",
    "backgroundColor": "rgba(255,255,255,0.28)",
    "borderRadius": "24px",
    "paddingLeft": "18px",
    "paddingRight": "16px",
    "marginRight": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(100,216,255,0.22)",
    "borderRightColor": "rgba(100,216,255,0.22)",
    "borderBottomColor": "rgba(100,216,255,0.22)",
    "borderLeftColor": "rgba(100,216,255,0.22)",
    "fontSize": "14px",
    "color": "#2d3a5e"
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "env-card"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "env-title"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "icon-wifi"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "当前环境"
          },
          "classList": [
            "env-title-text"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "env-row"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "env-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "env-item-header"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon-small",
                    "icon-wifi-sm"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "网络状态"
                  },
                  "classList": [
                    "env-label"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.networkText}
              },
              "classList": [
                "env-value",
                "env-value-blue"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "env-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "env-item-header"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "battery-bar"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "battery-fill"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "电量"
                  },
                  "classList": [
                    "env-label"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.battery}
              },
              "classList": [
                "env-value"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "env-item"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "env-item-header"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "icon-small",
                    "icon-loc"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "当前位置"
                  },
                  "classList": [
                    "env-label"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.location}
              },
              "classList": [
                "env-value"
              ]
            }
          ]
        }
      ]
    }
  ]
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

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "type": "div",
      "attr": {},
      "classList": [
        "scroll-area"
      ],
      "style": {
        "flex": 1
      },
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
              "repeat": {
                "exp": function () {return this.messages},
                "key": "index",
                "value": "msg"
              },
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
                      "shown": function () {return this.msg.role==='assistant'},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.msg.content}
                          },
                          "classList": [
                            "bubble-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble",
                        "bubble-offline"
                      ],
                      "shown": function () {return this.msg.role==='user'},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.msg.content}
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
                        "value": function () {return this.msg.time}
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
                        "src": "/assets/images/avatar(1).png"
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
          "type": "input",
          "attr": {
            "type": "text",
            "placeholder": "告诉我你的需求吧～",
            "value": function () {return this.inputText}
          },
          "classList": [
            "input-field"
          ],
          "events": {
            "change": "onInput"
          }
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
          "events": {
            "click": "onSend"
          },
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

/***/ }),

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_script$ = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./EnvCard.ux?uxType=comp */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp")
$app_define$('@app-component/env-card', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./EnvCard.ux?uxType=comp& */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./EnvCard.ux?uxType=comp */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp")
});
;

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
  !*** ./src/pages/Chat/index.ux?uxType=page ***!
  \*********************************************/
__webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&type=import!../../components/TripCard.ux?uxType=comp&name=trip-card */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card")
__webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&type=import!../../components/EnvCard.ux?uxType=comp&name=env-card */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card")
var $app_script$ = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBQTtJQUFBO0VBQ0E7RUFDQVUsY0FBQTtJQUNBLEtBQUFDLEtBQUE7RUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdB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Q0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3ZrQkEsbUJBQW1CLG1CQUFPLENBQUMsbXhEQUF1NUI7QUFDbDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0bUJBQWtUO0FBQzlWLGlDQUFpQyxtQkFBTyxDQUFDLG9vQkFBOFQ7QUFDdlcsQ0FBQztBQUNELEM7Ozs7Ozs7Ozs7O0FDVEEsbUJBQW1CLG1CQUFPLENBQUMscXhEQUF3NUI7QUFDbjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw4bUJBQW1UO0FBQy9WLGlDQUFpQyxtQkFBTyxDQUFDLHNvQkFBK1Q7QUFDeFcsQ0FBQztBQUNELEM7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxtQkFBTyxDQUFDLDZjQUEwTztBQUNsUCxtQkFBTyxDQUFDLHljQUF3TztBQUNoUCxtQkFBbUIsbUJBQU8sQ0FBQyxvaEVBQWtpQztBQUM3akM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDBzQkFBb1c7QUFDaFosaUNBQWlDLG1CQUFPLENBQUMsc29CQUFrVTtBQUMzVyxDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/NWMxMyIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvRW52Q2FyZC51eD80Y2FmIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9mMjJhIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9FbnZDYXJkLnV4P2I2ZWIiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9jb21wb25lbnRzL1RyaXBDYXJkLnV4P2RkNDciLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9wYWdlcy9DaGF0L2luZGV4LnV4PzY4NjEiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9jb21wb25lbnRzL0VudkNhcmQudXg/NDUwZCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvVHJpcENhcmQudXg/NjdmYSIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/ZWJjZiIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvRW52Q2FyZC51eD80NGI1Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD8yZTZjIiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/MzMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8aW1wb3J0IG5hbWU9XCJ0cmlwLWNhcmRcIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL1RyaXBDYXJkLnV4XCI+PC9pbXBvcnQ+XHJcbjxpbXBvcnQgbmFtZT1cImVudi1jYXJkXCIgIHNyYz1cIi4uLy4uL2NvbXBvbmVudHMvRW52Q2FyZC51eFwiPjwvaW1wb3J0PlxyXG4gXHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cclxuXHJcbiAgICA8IS0tIOWvvOiIquagjyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJyYW5kXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJicmFuZC1zdGFyXCI+4pymPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnJhbmQtbmFtZVwiPuWbouWbojwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmQtdGFnXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImJyYW5kLXRhZy10ZXh0XCI+6Zmq5L2g5q+P5LiA56iLPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pY29uc1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibmF2LWljb24tY2xvY2tcIj7il4s8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJuYXYtaWNvbi1tZW51XCI+4ouuPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0g5rua5Yqo5YaF5a655Yy6IC0tPlxyXG4gIDwhLS0g5rua5Yqo5YaF5a655Yy6IC0tPlxyXG48ZGl2IGNsYXNzPVwic2Nyb2xsLWFyZWFcIiBzdHlsZT1cImZsZXg6MTtcIj5cclxuICA8ZGl2IGNsYXNzPVwic2Nyb2xsLWlubmVyXCI+XHJcbiAgICA8IS0tIOeUqCBmb3Ig5b6q546v5riy5p+T5raI5oGv5YiX6KGoIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1zZy1yb3dcIiBmb3I9XCIoaW5kZXgsIG1zZykgaW4gbWVzc2FnZXNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImF2YXRhci1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJidWJibGUtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWJibGVcIiBpZj1cInt7bXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRleHRcIj57e21zZy5jb250ZW50fX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZSBidWJibGUtb2ZmbGluZVwiIGlmPVwie3ttc2cucm9sZSA9PT0gJ3VzZXInfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRleHRcIj57e21zZy5jb250ZW50fX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGltZVwiPnt7bXNnLnRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPCEtLSDnrKzkuIDmnaHmsJTms6EgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXNnLXJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyLWltZ1wiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2F2YXRhcigxKS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGV4dFwiPuS9oOWlve+8geaIkeaYr+S9oOeahOaXheihjOS8meS8tCBUcmlwUGFsIOKcqHt7J1xcbid9feaXoOiuuue9kee7nOWmguS9le+8jOaIkemDveS8mumZquS8tOS9oHt7J1xcbid9feiuqeavj+S4gOauteaXheeoi+mDveWuieW/g+WPiOaEieW/qzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10aW1lXCI+MTA6MzA8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDooYznqIvljaHniYfvvIjlvJXlhaXvvIkgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwXCI+XHJcbiAgICAgIDx0cmlwLWNhcmQ+PC90cmlwLWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOeOr+Wig+WNoeeJh++8iOW8leWFpe+8iSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBcIj5cclxuICAgICAgPGVudi1jYXJkPjwvZW52LWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOesrOS6jOadoeawlOazoSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtc2ctcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJhdmF0YXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlIGJ1YmJsZS1vZmZsaW5lXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10ZXh0XCI+55uu5YmN5aSE5LqO5peg572R57uc54q25oCB77yMe3snXFxuJ3195oiR5bey5YiH5o2i6Iez56a757q/5qih5byPe3snXFxuJ3195oiR5Lya57un57ut5Li65L2g5o+Q5L6b5o+Q6YaS5ZKM6Zmq5Ly0772ePC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRpbWVcIj4xMDozMDwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOW6lemDqOeVmeeZvSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tc3BhY2VcIj48L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIDwhLS0g5b+r5o235Yqf6IO95qCPIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVpY2staXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pY29uLXdyYXBcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2staWNvbi10ZXh0XCI+8J+UlDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLWxhYmVsXCI+5Yiw56uZ5o+Q6YaSPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stc3ViXCI+5bey5byA5ZCvPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWljb24td3JhcFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1pY29uLXRleHRcIj7wn5e6PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stbGFiZWxcIj7ooYznqIvov5vluqY8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1zdWJcIj7mn6XnnIvov5vluqY8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2staWNvbi13cmFwIHJlZFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1pY29uLXRleHRcIj7wn5KsPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stbGFiZWxcIj7pmarmiJHogYrlpKk8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1zdWJcIj7miZPlj5Hml7bpl7Q8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWl0ZW1cIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vcmUtZG90c1wiPsK3wrfCtzwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vcmUtbGFiZWxcIj7mm7TlpJrlip/og708L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDovpPlhaXmoI8gLS0+XHJcbiAgICA8IS0tIOi+k+WFpeagjyAtLT5cclxuPGRpdiBjbGFzcz1cImlucHV0LWJhclwiPlxyXG4gIDxpbnB1dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgXHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwi5ZGK6K+J5oiR5L2g55qE6ZyA5rGC5ZCn772eXCIgXHJcbiAgICAgICAgIHZhbHVlPVwie3tpbnB1dFRleHR9fVwiIFxyXG4gICAgICAgIEBjaGFuZ2U9XCJvbklucHV0XCIgLz5cclxuICA8dGV4dCBjbGFzcz1cImVtb2ppLWJ0blwiPvCfmYI8L3RleHQ+XHJcbiAgPGRpdiBjbGFzcz1cInNlbmQtYnRuXCIgQGNsaWNrPVwib25TZW5kXCI+XHJcbiAgICA8dGV4dCBjbGFzcz1cInNlbmQtaWNvblwiPuKepDwvdGV4dD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbi8vIGltcG9ydCB7IGV4ZWNTUUwgfSBmcm9tICcuLi8uLi9qcy9kYi5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlczogW10sXHJcbiAgICBjdXJyZW50Q2l0eTogJ+S4iua1tycsXHJcbiAgICBjaXR5RGF0YTogbnVsbCxcclxuICAgIGlucHV0VGV4dDogJycgICAgLy8g4oaQIOaWsOWinui/meS4gOihjFxyXG4gIH1cclxufSxcclxuXHJcbi8vIOWkhOeQhui+k+WFpeahhuWPmOWMllxyXG5vbklucHV0KGUpIHtcclxuICB0aGlzLmlucHV0VGV4dCA9IGUudmFsdWVcclxufSxcclxuXHJcbi8vIOeCueWHu+WPkemAgeaMiemSrlxyXG5vblNlbmQoKSB7XHJcbiAgY29uc3QgdGV4dCA9IHRoaXMuaW5wdXRUZXh0LnRyaW0oKVxyXG4gIGlmICghdGV4dCkgcmV0dXJuXHJcbiAgdGhpcy5zZW5kTWVzc2FnZSh0ZXh0KVxyXG4gIHRoaXMuaW5wdXRUZXh0ID0gJycgICAvLyDmuIXnqbrovpPlhaXmoYZcclxufSxcclxuICAvLyDinIUg5pS555SoIG9uUmVhZHnvvIzmm7TnqLPlrppcclxuICBhc3luYyBvblJlYWR5KCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkSGlzdG9yeSgpXHJcbiAgICBhd2FpdCB0aGlzLmxvYWRDaXR5RGF0YSgpXHJcbiAgICBjb25zb2xlLmxvZygn4pyFIOmhtemdouWIneWni+WMluWujOaIkCcpXHJcbiAgfSxcclxuXHJcbiAgLy8g5Yqg6L295Y6G5Y+y5raI5oGvXHJcbiAgYXN5bmMgbG9hZEhpc3RvcnkoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzcWwgPSBgU0VMRUNUICogRlJPTSBjaGF0X2hpc3RvcnkgT1JERVIgQlkgdGltZXN0YW1wIEFTQyBMSU1JVCA1MGBcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY1NRTChzcWwpXHJcbiAgICAgIGlmIChyZXN1bHQucm93cykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSByZXN1bHQucm93cy5tYXAocm93ID0+ICh7XHJcbiAgICAgICAgICByb2xlOiByb3cucm9sZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJvdy5jb250ZW50LFxyXG4gICAgICAgICAgdGltZTogcm93LnRpbWVzdGFtcFxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUg5Yqg6L295Y6G5Y+y5raI5oGv5oiQ5Yqf77yM5YWxJywgdGhpcy5tZXNzYWdlcy5sZW5ndGgsICfmnaEnKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDliqDovb3ljoblj7LlpLHotKUnLCBlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8g5Yqg6L295Z+O5biC5pWw5o2uXHJcbiAgYXN5bmMgbG9hZENpdHlEYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gY2l0eV9kYXRhIFdIRVJFIGNpdHlfbmFtZSA9ID9gXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNTUUwoc3FsLCBbdGhpcy5jdXJyZW50Q2l0eV0pXHJcbiAgICAgIGlmIChyZXN1bHQucm93cyAmJiByZXN1bHQucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5yb3dzWzBdXHJcbiAgICAgICAgdGhpcy5jaXR5RGF0YSA9IHtcclxuICAgICAgICAgIGF0dHJhY3Rpb25zOiBKU09OLnBhcnNlKGRhdGEuYXR0cmFjdGlvbnMpLFxyXG4gICAgICAgICAgdGlwczogSlNPTi5wYXJzZShkYXRhLnRpcHMpLFxyXG4gICAgICAgICAgZm9vZDogSlNPTi5wYXJzZShkYXRhLmZvb2QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinIUg5Yqg6L295Z+O5biC5pWw5o2u5oiQ5YqfJywgdGhpcy5jaXR5RGF0YSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDliqDovb3ln47luILmlbDmja7lpLHotKUnLCBlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8g5L+d5a2Y5raI5oGvXHJcbiAgYXN5bmMgc2F2ZU1lc3NhZ2Uocm9sZSwgY29udGVudCkge1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3Qgc3FsID0gYFxyXG4gICAgLy8gICAgIElOU0VSVCBJTlRPIGNoYXRfaGlzdG9yeSAocm9sZSwgY29udGVudCwgdGltZXN0YW1wLCBzeW5jZWQpXHJcbiAgICAvLyAgICAgVkFMVUVTICg/LCA/LCA/LCAwKVxyXG4gICAgLy8gICBgXHJcbiAgICAvLyAgIGF3YWl0IGV4ZWNTUUwoc3FsLCBbcm9sZSwgY29udGVudCwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpXSlcclxuICAgIC8vIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKCfinYwg5L+d5a2Y5raI5oGv5aSx6LSlJywgZXJyKVxyXG4gICAgLy8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIOWPkemAgea2iOaBr1xyXG4gIGFzeW5jIHNlbmRNZXNzYWdlKGlucHV0KSB7XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm5cclxuXHJcbiAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgXHJcbiAgcm9sZTogJ3VzZXInLCBcclxuICBjb250ZW50OiBpbnB1dCwgXHJcbiAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoJ3poLUNOJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pIFxyXG59KVxyXG4gICBcclxuICAgIC8vIGF3YWl0IHRoaXMuc2F2ZU1lc3NhZ2UoJ3VzZXInLCBpbnB1dClcclxuXHJcbiAgICAvLyBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgLy8gICB0cnkge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcGx5ID0gYXdhaXQgdGhpcy5jYWxsQUkoaW5wdXQpXHJcbiAgICAvLyAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IHJlcGx5LCB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgfSlcclxuICAgIC8vICAgICBhd2FpdCB0aGlzLnNhdmVNZXNzYWdlKCdhc3Npc3RhbnQnLCByZXBseSlcclxuICAgIC8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXRPZmZsaW5lUmVwbHkoaW5wdXQpXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMuZ2V0T2ZmbGluZVJlcGx5KGlucHV0KVxyXG4gICAgLy8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIOemu+e6v+WbnuetlFxyXG4gIGdldE9mZmxpbmVSZXBseShpbnB1dCkge1xyXG4gICAgbGV0IHJlcGx5ID0gJ/CflYrvuI8g5Zui5Zui56a757q/5o+Q56S677yaJ1xyXG4gICAgaWYgKGlucHV0LmluY2x1ZGVzKCfmma/ngrknKSB8fCBpbnB1dC5pbmNsdWRlcygn546pJykpIHtcclxuICAgICAgcmVwbHkgKz0gYFxcbuaOqOiNkOaZr+eCue+8miR7dGhpcy5jaXR5RGF0YT8uYXR0cmFjdGlvbnM/LmpvaW4oJ+OAgScpIHx8ICflpJbmu6njgIHosavlm60nfWBcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoJ+WQgycpIHx8IGlucHV0LmluY2x1ZGVzKCfnvo7po58nKSkge1xyXG4gICAgICByZXBseSArPSBgXFxu5o6o6I2Q576O6aOf77yaJHt0aGlzLmNpdHlEYXRhPy5mb29kPy5qb2luKCfjgIEnKSB8fCAn5bCP56y85YyF44CB55Sf54WOJ31gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBseSArPSBgXFxu5b2T5YmN5ZyoJHt0aGlzLmN1cnJlbnRDaXR5fe+8jOaciemcgOimgemaj+aXtumXruaIkX5gXHJcbiAgICB9XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogcmVwbHksIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSB9KVxyXG4gICAgdGhpcy5zYXZlTWVzc2FnZSgnYXNzaXN0YW50JywgcmVwbHkpXHJcbiAgfSxcclxuXHJcbiAgLy8g6LCD55So5ZCO56uvQUlcclxuICBhc3luYyBjYWxsQUkoaW5wdXQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NoYXQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtc2c6IGlucHV0IH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIHJldHVybiBkYXRhLnJlcGx5IHx8ICflm6Llm6LmmoLml7botbDnpZ7kuobvvIzlho3pl67kuIDmrKHlkKd+J1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iwg+eUqEFJ5aSx6LSlJywgZXJyKVxyXG4gICAgICB0aHJvdyBlcnJcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYWdlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0g5a+86Iiq5qCPID09PT09ICovXHJcbiAgLm5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgKi9cclxuICB9XHJcblxyXG4gIC5icmFuZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5icmFuZC1zdGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtdGFnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLXRhZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5uYXYtaWNvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2LWljb24tY2xvY2sge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWljb24tbWVudSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSDmu5rliqjljLogPT09PT0gKi9cclxuICAuc2Nyb2xsLWFyZWEge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5zY3JvbGwtaW5uZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0g5rCU5rOh6KGMID09PT09ICovXHJcbiAgLm1zZy1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5hdmF0YXItaW1nIHtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS13cmFwIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1vZmZsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmY7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyZDNhNWU7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5idWJibGUtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlY28tYmlyZCB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlOWZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5kZWNvLWltZyB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOWNoeeJh+WMheijhSA9PT09PSAqL1xyXG4gIC5jYXJkLXdyYXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOW/q+aNt+agjyA9PT09PSAqL1xyXG4gIC5xdWljay1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pdGVtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1MCwgMjU1LCAwLjUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2staWNvbi13cmFwIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2staWNvbi13cmFwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBmMDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pY29uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLnF1aWNrLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5xdWljay1zdWIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucXVpY2stbW9yZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTAwLCAxNTAsIDI1NSwgMC4yMik7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5tb3JlLWRvdHMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAubW9yZS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOi+k+WFpeagjyA9PT09PSAqL1xyXG4gIC5pbnB1dC1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gIH1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMDAsIDIxNiwgMjU1LCAwLjIyKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuXHJcbiAgLmlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYjBiY2Q0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VuZC1idG4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZW5kLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW52LWNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnYtdGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb24td2lmaVwiPjwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImVudi10aXRsZS10ZXh0XCI+5b2T5YmN546v5aKDPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW52LXJvd1wiPlxyXG4gICAgICA8IS0tIOe9kee7nCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pdGVtLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tc21hbGwgaWNvbi13aWZpLXNtXCI+PC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPue9kee7nOeKtuaAgTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZSBlbnYtdmFsdWUtYmx1ZVwiPnt7bmV0d29ya1RleHR9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0g55S16YePIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWl0ZW0taGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGVyeS1iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRlcnktZmlsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPueUtemHjzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZVwiPnt7YmF0dGVyeX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSDkvY3nva4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaXRlbS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXNtYWxsIGljb24tbG9jXCI+PC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPuW9k+WJjeS9jee9rjwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZVwiPnt7bG9jYXRpb259fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgbmV0d29ya1RleHQ6IHsgZGVmYXVsdDogJ+aXoOe6v+e9kee7nOi/nuaOpScgfSxcclxuICAgIGJhdHRlcnk6ICAgICB7IGRlZmF1bHQ6ICc2OCUnIH0sXHJcbiAgICBsb2NhdGlvbjogICAgeyBkZWZhdWx0OiAn5p2t5bee5biCIMK3IOihjOmptuS4rScgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5lbnYtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmVudi10aXRsZSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuLmljb24td2lmaSB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5lbnYtdGl0bGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuLmVudi1yb3cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmVudi1pdGVtIHtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuLmVudi1pdGVtLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uaWNvbi1zbWFsbCB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG4uaWNvbi13aWZpLXNtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZhM2M4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uaWNvbi1sb2Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmEzYzg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5iYXR0ZXJ5LWJhciB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAxMXB4O1xyXG4gIGJvcmRlci13aWR0aDogMS41cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICM1MmM0MWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmJhdHRlcnktZmlsbCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmVudi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOGZhM2M4O1xyXG59XHJcbi5lbnYtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmQzYTVlO1xyXG59XHJcbi5lbnYtdmFsdWUtYmx1ZSB7XHJcbiAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRyaXAtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbWFwXCI+PC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlLXRleHRcIj7lvZPliY3ooYznqIs8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saW5rXCIgb25jbGljaz1cIm9uRGV0YWlsQ2xpY2tcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGluay10ZXh0XCI+5p+l55yL6K+m5oOFIOKAujwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm91dGUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0aW9uLW5vZGUgYWxpZ24tbGVmdFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuWHuuWPkeWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVwYXJ0dXJlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzLXRpbWVcIj57e2RlcGFydFRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm91dGUtbWlkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFpbi1ub1wiPnt7dHJhaW5Ob319PC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1saW5lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWluLWNoaXBcIj48dGV4dCBjbGFzcz1cInRyYWluLWNoaXAtdGV4dFwiPumrmOmTgTwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtYmFkZ2VcIj7ooYznqIvov5vooYzkuK08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRpb24tbm9kZSBhbGlnbi1yaWdodFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuebrueahOWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVzdGluYXRpb259fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtdGltZVwiPnt7YXJyaXZlVGltZX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWxlZnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWUtbGFiZWxcIj7pooTorqHliankvZnml7bpl7QgPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZS1ib2xkXCI+e3tyZW1haW5UaW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImFycml2ZS1oaW50XCI+6aKE6K6hIHt7YXJyaXZlVGltZX19IOWIsOi+vjwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiB7e3Byb2dyZXNzfX0lO1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRlcGFydHVyZTogICB7IGRlZmF1bHQ6ICfmna3lt57kuJznq5knIH0sXHJcbiAgICBkZXBhcnRUaW1lOiAgeyBkZWZhdWx0OiAnMTA6MDAnIH0sXHJcbiAgICBkZXN0aW5hdGlvbjogeyBkZWZhdWx0OiAn5LiK5rW36Jm55qGl56uZJyB9LFxyXG4gICAgYXJyaXZlVGltZTogIHsgZGVmYXVsdDogJzExOjAyJyB9LFxyXG4gICAgdHJhaW5ObzogICAgIHsgZGVmYXVsdDogJ0cxMjIzJyB9LFxyXG4gICAgcmVtYWluVGltZTogIHsgZGVmYXVsdDogJzMyIOWIhumSnycgfSxcclxuICAgIHByb2dyZXNzOiAgICB7IGRlZmF1bHQ6IDUyIH0sXHJcbiAgfSxcclxuICBvbkRldGFpbENsaWNrKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGV0YWlsQ2xpY2snKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRyaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLW1hcCB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluayB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluay10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAucm91dGUtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zdGF0aW9uLW5vZGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFsaWduLWxlZnQgIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuICAuYWxpZ24tcmlnaHQgeyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cclxuXHJcbiAgLnMtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICNiMGJjZDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAucy1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzFhMmE0YTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLnMtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzVhNmQ4YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG5cclxuICAucm91dGUtbWlkIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRyYWluLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50cmFjay1saW5lIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZG90IHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2I4YzhlODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gIC5kYXNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIC8qIGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDsgKi9cclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNiOGM4ZTg7XHJcbiAgfVxyXG5cclxuICAudHJhaW4tY2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIC50cmFpbi1jaGlwLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmYTtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtbGVmdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aW1lLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNWE2ZDhhO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtYm9sZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzFhMmE0YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYXJyaXZlLWhpbnQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5lbnYtY2FyZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmVudi10aXRsZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuaWNvbi13aWZpXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTRweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiN3B4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjdweFwiXG4gIH0sXG4gIFwiLmVudi10aXRsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMmQzYTVlXCJcbiAgfSxcbiAgXCIuZW52LXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiLmVudi1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNnB4XCJcbiAgfSxcbiAgXCIuZW52LWl0ZW0taGVhZGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVweFwiXG4gIH0sXG4gIFwiLmljb24tc21hbGxcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIuaWNvbi13aWZpLXNtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjdweFwiXG4gIH0sXG4gIFwiLmljb24tbG9jXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjdweFwiXG4gIH0sXG4gIFwiLmJhdHRlcnktYmFyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTFweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxLjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjEuNXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjEuNXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxLjVweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjNTJjNDFhXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzUyYzQxYVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjNTJjNDFhXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjNTJjNDFhXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIuYmF0dGVyeS1maWxsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTJjNDFhXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIycHhcIlxuICB9LFxuICBcIi5lbnYtbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIlxuICB9LFxuICBcIi5lbnYtdmFsdWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5lbnYtdmFsdWUtYmx1ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTJweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudHJpcC1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuY2FyZC1oZWFkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxOHB4XCJcbiAgfSxcbiAgXCIuY2FyZC10aXRsZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuaWNvbi1tYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiN3B4XCJcbiAgfSxcbiAgXCIuY2FyZC10aXRsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMmQzYTVlXCJcbiAgfSxcbiAgXCIuY2FyZC1saW5rXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLmNhcmQtbGluay10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiLnJvdXRlLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zdGF0aW9uLW5vZGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI5MHB4XCJcbiAgfSxcbiAgXCIuYWxpZ24tbGVmdFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiLmFsaWduLXJpZ2h0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLnMtbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNiMGJjZDRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLnMtbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI4MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMmE0YVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI2cHhcIlxuICB9LFxuICBcIi5zLXRpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1YTZkOGFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLnJvdXRlLW1pZFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjhweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIudHJhaW4tbm9cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjZweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudHJhY2stbGluZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLmRvdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiN3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiOGM4ZThcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjYjhjOGU4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNiOGM4ZThcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNiOGM4ZThcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZsZXhTaHJpbmtcIjogMFxuICB9LFxuICBcIi5kYXNoXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2I4YzhlOFwiXG4gIH0sXG4gIFwiLnRyYWluLWNoaXBcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNnB4XCJcbiAgfSxcbiAgXCIudHJhaW4tY2hpcC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuc3RhdHVzLWJhZGdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiM3B4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmRpdmlkZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmNGZhXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIudGltZS1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIudGltZS1sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aW1lLWxhYmVsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNWE2ZDhhXCJcbiAgfSxcbiAgXCIudGltZS1ib2xkXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCIuYXJyaXZlLWhpbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIlxuICB9LFxuICBcIi5wcm9ncmVzcy13cmFwXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjVweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOTlweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcIi5wcm9ncmVzcy1iYXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI5OXB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5wYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY0ZmZcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5uYXZcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMThweFwiXG4gIH0sXG4gIFwiLmJyYW5kXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5icmFuZC1zdGFyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiLmJyYW5kLW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiODAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuYnJhbmQtdGFnXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmJyYW5kLXRhZy10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCJcbiAgfSxcbiAgXCIubmF2LWljb25zXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5uYXYtaWNvbi1jbG9ja1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIubmF2LWljb24tbWVudVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiLnNjcm9sbC1hcmVhXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5zY3JvbGwtaW5uZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi5tc2ctcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIuYXZhdGFyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDZweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcImZsZXhTaHJpbmtcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmF2YXRhci1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0NnB4XCJcbiAgfSxcbiAgXCIuYnViYmxlLXdyYXBcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmJ1YmJsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIuYnViYmxlLW9mZmxpbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y1ZjhmZlwiXG4gIH0sXG4gIFwiLmJ1YmJsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMmQzYTVlXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS10aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmRlY28tYmlyZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjYycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjMxcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkY2U5ZmZcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5kZWNvLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjYycHhcIlxuICB9LFxuICBcIi5jYXJkLXdyYXBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcIi5ib3R0b20tc3BhY2VcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIucXVpY2stYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIucXVpY2staXRlbVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjI4KVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiM3B4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiM3B4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiM3B4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMjU1LDI1MCwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcInJnYmEoMjU1LDI1MCwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMjU1LDI1MCwyNTUsMC41KVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5xdWljay1pY29uLXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmMGYwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCJcbiAgfSxcbiAgXCIucXVpY2staWNvbi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTlweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWxhYmVsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMmQzYTVlXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5xdWljay1zdWJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnF1aWNrLW1vcmVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yOClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwicmdiYSgxMDAsMTUwLDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgxMDAsMTUwLDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgxMDAsMTUwLDI1NSwwLjIyKVwiLFxuICAgIFwid2lkdGhcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIubW9yZS1kb3RzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI2cHhcIlxuICB9LFxuICBcIi5tb3JlLWxhYmVsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5pbnB1dC1iYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTRweFwiXG4gIH0sXG4gIFwiLmlucHV0LWZpZWxkXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjQ0cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yOClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDEwMCwyMTYsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwicmdiYSgxMDAsMjE2LDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDEwMCwyMTYsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCJyZ2JhKDEwMCwyMTYsMjU1LDAuMjIpXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiXG4gIH0sXG4gIFwiLmlucHV0LXBsYWNlaG9sZGVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjYjBiY2Q0XCJcbiAgfSxcbiAgXCIuZW1vamktYnRuXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIuc2VuZC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGU3Y2ZmXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNlbmQtaWNvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiZW52LWNhcmRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJlbnYtdGl0bGVcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaWNvbi13aWZpXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLlvZPliY3njq/looNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbnYtdGl0bGUtdGV4dFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJlbnYtcm93XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImVudi1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbnYtaXRlbS1oZWFkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvbi13aWZpLXNtXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvZHnu5znirbmgIFcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnYtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5ldHdvcmtUZXh0fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbnYtdmFsdWVcIixcbiAgICAgICAgICAgICAgICBcImVudi12YWx1ZS1ibHVlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImVudi1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbnYtaXRlbS1oZWFkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJiYXR0ZXJ5LWJhclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXR0ZXJ5LWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueUtemHj1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVudi1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmF0dGVyeX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW52LXZhbHVlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImVudi1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbnYtaXRlbS1oZWFkZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvbi1sb2NcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW9k+WJjeS9jee9rlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVudi1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubG9jYXRpb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImVudi12YWx1ZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwidHJpcC1jYXJkXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2FyZC1oZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2FyZC10aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaWNvbi1tYXBcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW9k+WJjeihjOeoi1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtdGl0bGUtdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkLWxpbmtcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9uRGV0YWlsQ2xpY2tcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5p+l55yL6K+m5oOFIOKAulwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtbGluay10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicm91dGUtY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0YXRpb24tbm9kZVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWHuuWPkeWcsFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGVwYXJ0dXJlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGVwYXJ0VGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy10aW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvdXRlLW1pZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRyYWluTm99XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRyYWluLW5vXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidHJhY2stbGluZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRvdFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXNoXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRyYWluLWNoaXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6auY6ZOBXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhaW4tY2hpcC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRhc2hcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZG90XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6KGM56iL6L+b6KGM5LitXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3RhdHVzLWJhZGdlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0YXRpb24tbm9kZVwiLFxuICAgICAgICAgICAgXCJhbGlnbi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnm67nmoTlnLBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYXJyaXZlVGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy10aW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGl2aWRlclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aW1lLXJvd1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aW1lLWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aKE6K6h5Ymp5L2Z5pe26Ze0IFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWUtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVtYWluVGltZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGltZS1ib2xkXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgJ+mihOiuoSAnICsgKHRoaXMuYXJyaXZlVGltZSkgKyAnIOWIsOi+vid9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFycml2ZS1oaW50XCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInByb2dyZXNzLXdyYXBcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJ3aWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgKHRoaXMucHJvZ3Jlc3MpICsgJyUnfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJwYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJyYW5kXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKcplwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJyYW5kLXN0YXJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWbouWbolwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJyYW5kLW5hbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJicmFuZC10YWdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6Zmq5L2g5q+P5LiA56iLXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmQtdGFnLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdi1pY29uc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLil4tcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXYtaWNvbi1jbG9ja1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4ouuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LWljb24tbWVudVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNjcm9sbC1hcmVhXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJmbGV4XCI6IDFcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNjcm9sbC1pbm5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVzc2FnZXN9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwibXNnXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1zZy5yb2xlPT09J2Fzc2lzdGFudCd9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubXNnLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtb2ZmbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cucm9sZT09PSd1c2VyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9hc3NldHMvaW1hZ2VzL2F2YXRhcigxKS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXItaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS13cmFwXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICfkvaDlpb3vvIHmiJHmmK/kvaDnmoTml4XooYzkvJnkvLQgVHJpcFBhbCDinKgnICsgKCdcXG4nKSArICfml6DorrrnvZHnu5zlpoLkvZXvvIzmiJHpg73kvJrpmarkvLTkvaAnICsgKCdcXG4nKSArICforqnmr4/kuIDmrrXml4XnqIvpg73lronlv4Plj4jmhInlv6snfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIxMDozMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtd3JhcFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaXAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlbnYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtc2ctcm93XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS1vZmZsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgJ+ebruWJjeWkhOS6juaXoOe9kee7nOeKtuaAge+8jCcgKyAoJ1xcbicpICsgJ+aIkeW3suWIh+aNouiHs+emu+e6v+aooeW8jycgKyAoJ1xcbicpICsgJ+aIkeS8mue7p+e7reS4uuS9oOaPkOS+m+aPkOmGkuWSjOmZquS8tO+9nid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwOjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm90dG9tLXNwYWNlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicXVpY2stYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInF1aWNrLWl0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWljb24td3JhcFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn5SUXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yiw56uZ5o+Q6YaSXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2stbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW3suW8gOWQr1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLXN1YlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJxdWljay1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1pY29uLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+XulwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuihjOeoi+i/m+W6plwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmn6XnnIvov5vluqZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi13cmFwXCIsXG4gICAgICAgICAgICAgICAgXCJyZWRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+SrFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumZquaIkeiBiuWkqVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmiZPlj5Hml7bpl7RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLCt8K3wrdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtb3JlLWRvdHNcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuabtOWkmuWKn+iDvVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1vcmUtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpbnB1dC1iYXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWRiuivieaIkeS9oOeahOmcgOaxguWQp++9nlwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5wdXRUZXh0fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uSW5wdXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIvCfmYJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbW9qaS1idG5cIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlbmQtYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvblNlbmRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4p6kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VuZC1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vRW52Q2FyZC51eD91eFR5cGU9Y29tcFwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9lbnYtY2FyZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9FbnZDYXJkLnV4P3V4VHlwZT1jb21wJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL0VudkNhcmQudXg/dXhUeXBlPWNvbXBcIilcbn0pO1xuOyIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vVHJpcENhcmQudXg/dXhUeXBlPWNvbXBcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvdHJpcC1jYXJkJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wXCIpXG59KTtcbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwicmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdXgtbG9hZGVyLmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmdHlwZT1pbXBvcnQhLi4vLi4vY29tcG9uZW50cy9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcCZuYW1lPXRyaXAtY2FyZFwiKVxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdXgtbG9hZGVyLmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmdHlwZT1pbXBvcnQhLi4vLi4vY29tcG9uZW50cy9FbnZDYXJkLnV4P3V4VHlwZT1jb21wJm5hbWU9ZW52LWNhcmRcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJmltcG9ydE5hbWVzW109dHJpcC1jYXJkLGltcG9ydE5hbWVzW109ZW52LWNhcmRcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJkYXRhIiwibWVzc2FnZXMiLCJjdXJyZW50Q2l0eSIsImNpdHlEYXRhIiwiaW5wdXRUZXh0Iiwib25JbnB1dCIsImUiLCJ2YWx1ZSIsIm9uU2VuZCIsInRleHQiLCJ0cmltIiwic2VuZE1lc3NhZ2UiLCJvblJlYWR5IiwibG9hZEhpc3RvcnkiLCJsb2FkQ2l0eURhdGEiLCJjb25zb2xlIiwibG9nIiwic3FsIiwicmVzdWx0IiwiZXhlY1NRTCIsInJvd3MiLCJtYXAiLCJyb3ciLCJyb2xlIiwiY29udGVudCIsInRpbWUiLCJ0aW1lc3RhbXAiLCJsZW5ndGgiLCJlcnIiLCJlcnJvciIsImF0dHJhY3Rpb25zIiwiSlNPTiIsInBhcnNlIiwidGlwcyIsImZvb2QiLCJzYXZlTWVzc2FnZSIsImlucHV0IiwicHVzaCIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiZ2V0T2ZmbGluZVJlcGx5IiwicmVwbHkiLCJpbmNsdWRlcyIsIl90aGlzJGNpdHlEYXRhIiwiX3RoaXMkY2l0eURhdGEkYXR0cmFjIiwiam9pbiIsIl90aGlzJGNpdHlEYXRhMiIsIl90aGlzJGNpdHlEYXRhMiRmb29kIiwidG9Mb2NhbGVTdHJpbmciLCJjYWxsQUkiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwibXNnIiwianNvbiIsInByb3BzIiwibmV0d29ya1RleHQiLCJkZWZhdWx0IiwiYmF0dGVyeSIsImxvY2F0aW9uIiwiZGVwYXJ0dXJlIiwiZGVwYXJ0VGltZSIsImRlc3RpbmF0aW9uIiwiYXJyaXZlVGltZSIsInRyYWluTm8iLCJyZW1haW5UaW1lIiwicHJvZ3Jlc3MiLCJvbkRldGFpbENsaWNrIiwiJGVtaXQiXSwic291cmNlUm9vdCI6IiJ9