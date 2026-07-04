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
    const now = new Date().toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return {
      greetingTime1: now,
      messages: [],
      currentCity: '上海',
      cityData: null,
      inputText: '',
      tripData: {
        startPlace: '杭州东站',
        endPlace: '上海虹桥站',
        startTime: '10:00',
        endTime: '11:02',
        remainTime: 32,
        arriveTime: '11:02',
        progress: 60
      }
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
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
    this.messages.push({
      role: 'user',
      content: input,
      time: timeStr
    });
    const reply = await this.callAI(input);
    this.messages.push({
      role: 'assistant',
      content: reply,
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
    "width": "100%",
    "marginBottom": "12px"
  },
  ".msg-left": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "width": "100%"
  },
  ".msg-right": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "width": "100%"
  },
  ".bubble-user": {
    "backgroundColor": "#ffffff",
    "borderRadius": "18px",
    "paddingTop": "14px",
    "paddingRight": "16px",
    "paddingBottom": "14px",
    "paddingLeft": "16px",
    "marginBottom": "4px"
  },
  ".bubble-user .bubble-text": {
    "color": "#2d3a5e",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bubble-user"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bubble-text"
        }
      ]
    }
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
                        "value": function () {return this.greetingTime1}
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
                    "msg-left"
                  ],
                  "shown": function () {return this.msg.role==='assistant'},
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
                    "msg-right"
                  ],
                  "shown": function () {return this.msg.role==='user'},
                  "children": [
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
                            "bubble-user"
                          ],
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
                          ],
                          "style": {
                            "textAlign": "right"
                          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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Q0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsbUJBQU8sQ0FBQyw2Y0FBME87QUFDbFAsbUJBQU8sQ0FBQyx5Y0FBd087QUFDaFAsbUJBQW1CLG1CQUFPLENBQUMsb2hFQUFraUM7QUFDN2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQywwc0JBQW9XO0FBQ2haLGlDQUFpQyxtQkFBTyxDQUFDLHNvQkFBa1U7QUFDM1csQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9wYWdlcy9DaGF0L2luZGV4LnV4PzVjMTMiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9jb21wb25lbnRzL0VudkNhcmQudXg/NGNhZiIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvVHJpcENhcmQudXg/ZjIyYSIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvRW52Q2FyZC51eD9iNmViIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9kZDQ3Iiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD82ODYxIiwid2VicGFjazovL2JhbnhpbmcvLi9zcmMvY29tcG9uZW50cy9FbnZDYXJkLnV4PzQ1MGQiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9jb21wb25lbnRzL1RyaXBDYXJkLnV4PzY3ZmEiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9wYWdlcy9DaGF0L2luZGV4LnV4P2ViY2YiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9jb21wb25lbnRzL0VudkNhcmQudXg/NDRiNSIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2NvbXBvbmVudHMvVHJpcENhcmQudXg/MmU2YyIsIndlYnBhY2s6Ly9iYW54aW5nL3dlYnBhY2svYm9vdHN0cmFwPzdmODAiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9wYWdlcy9DaGF0L2luZGV4LnV4PzMzMmMiXSwic291cmNlc0NvbnRlbnQiOlsiPGltcG9ydCBuYW1lPVwidHJpcC1jYXJkXCIgc3JjPVwiLi4vLi4vY29tcG9uZW50cy9UcmlwQ2FyZC51eFwiPjwvaW1wb3J0PlxyXG48aW1wb3J0IG5hbWU9XCJlbnYtY2FyZFwiICBzcmM9XCIuLi8uLi9jb21wb25lbnRzL0VudkNhcmQudXhcIj48L2ltcG9ydD5cclxuIFxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XHJcblxyXG4gICAgPCEtLSDlr7zoiKrmoI8gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJicmFuZFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnJhbmQtc3RhclwiPuKcpjwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImJyYW5kLW5hbWVcIj7lm6Llm6I8L3RleHQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLXRhZ1wiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJicmFuZC10YWctdGV4dFwiPumZquS9oOavj+S4gOeoizwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaWNvbnNcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm5hdi1pY29uLWNsb2NrXCI+4peLPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibmF2LWljb24tbWVudVwiPuKLrjwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOa7muWKqOWGheWuueWMuiAtLT5cclxuICA8IS0tIOa7muWKqOWGheWuueWMuiAtLT5cclxuICA8ZGl2IGNsYXNzPVwic2Nyb2xsLWFyZWFcIiBzdHlsZT1cImZsZXg6MTtcIj5cclxuPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxyXG4gIDwhLS0gMS4g6Zeu5YCZ6K+tICsg5Y2h54mH77yI5Zu65a6a5pi+56S677yJIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJtc2ctcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImF2YXRhci1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI+PC9pbWFnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1YmJsZS13cmFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJidWJibGVcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10ZXh0XCI+5L2g5aW977yB5oiR5piv5L2g55qE5peF6KGM5LyZ5Ly0IFRyaXBQYWwg4pyoe3snXFxuJ3195peg6K66572R57uc5aaC5L2V77yM5oiR6YO95Lya6Zmq5Ly05L2ge3snXFxuJ3196K6p5q+P5LiA5q615peF56iL6YO95a6J5b+D5Y+I5oSJ5b+rPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGltZVwiPnt7Z3JlZXRpbmdUaW1lMX19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0g6KGM56iL5Y2h54mHIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBcIj5cclxuICAgIDx0cmlwLWNhcmQ+PC90cmlwLWNhcmQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0g546v5aKD5Y2h54mHIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBcIj5cclxuICAgIDxlbnYtY2FyZD48L2Vudi1jYXJkPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIDIuIOWKqOaAgea2iOaBr+WIl+ihqO+8iOeUqOaIt+WPkemAgeeahOa2iOaBr+aYvuekuuWcqOi/memHjO+8iSAtLT5cclxuICA8ZGl2IGNsYXNzPVwibXNnLXJvd1wiIGZvcj1cIihpbmRleCwgbXNnKSBpbiBtZXNzYWdlc1wiPlxyXG4gICAgPCEtLSBBSea2iOaBr++8mumdoOW3piAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtc2ctbGVmdFwiIGlmPVwie3ttc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCd9fVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyLWltZ1wiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmdcIj48L2ltYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZVwiPjx0ZXh0IGNsYXNzPVwiYnViYmxlLXRleHRcIj57e21zZy5jb250ZW50fX08L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGltZVwiPnt7bXNnLnRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0g55So5oi35raI5oGv77ya6Z2g5Y+zIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1zZy1yaWdodFwiIGlmPVwie3ttc2cucm9sZSA9PT0gJ3VzZXInfX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS11c2VyXCI+PHRleHQgY2xhc3M9XCJidWJibGUtdGV4dFwiPnt7bXNnLmNvbnRlbnR9fTwvdGV4dD48L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImJ1YmJsZS10aW1lXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDtcIj57e21zZy50aW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJib3R0b20tc3BhY2VcIj48L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIDwhLS0g5b+r5o235Yqf6IO95qCPIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVpY2staXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pY29uLXdyYXBcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2staWNvbi10ZXh0XCI+8J+UlDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInF1aWNrLWxhYmVsXCI+5Yiw56uZ5o+Q6YaSPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stc3ViXCI+5bey5byA5ZCvPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWljb24td3JhcFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1pY29uLXRleHRcIj7wn5e6PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stbGFiZWxcIj7ooYznqIvov5vluqY8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1zdWJcIj7mn6XnnIvov5vluqY8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2staWNvbi13cmFwIHJlZFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1pY29uLXRleHRcIj7wn5KsPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicXVpY2stbGFiZWxcIj7pmarmiJHogYrlpKk8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJxdWljay1zdWJcIj7miZPlj5Hml7bpl7Q8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLWl0ZW1cIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vcmUtZG90c1wiPsK3wrfCtzwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vcmUtbGFiZWxcIj7mm7TlpJrlip/og708L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDovpPlhaXmoI8gLS0+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dC1iYXJcIj5cclxuICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIFxyXG4gICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICBwbGFjZWhvbGRlcj1cIuWRiuivieaIkeS9oOeahOmcgOaxguWQp++9nlwiIFxyXG4gICAgICAgICB2YWx1ZT1cInt7aW5wdXRUZXh0fX1cIiBcclxuICAgICAgICBAY2hhbmdlPVwib25JbnB1dFwiIC8+XHJcbiAgPCEtLSA8dGV4dCBjbGFzcz1cImVtb2ppLWJ0blwiPvCfmYI8L3RleHQ+IC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJzZW5kLWJ0blwiIEBjbGljaz1cIm9uU2VuZFwiPlxyXG4gICAgPHRleHQgY2xhc3M9XCJzZW5kLWljb25cIj7inqQ8L3RleHQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4vLyBpbXBvcnQgeyBleGVjU1FMIH0gZnJvbSAnLi4vLi4vanMvZGIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnemgtQ04nLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSlcclxuICByZXR1cm4ge1xyXG4gICAgZ3JlZXRpbmdUaW1lMTpub3csXHJcbiAgICBtZXNzYWdlczogW10sXHJcbiAgICBjdXJyZW50Q2l0eTogJ+S4iua1tycsXHJcbiAgICBjaXR5RGF0YTogbnVsbCxcclxuICAgIGlucHV0VGV4dDogJycgLCAgIC8vIOKGkCDmlrDlop7ov5nkuIDooYxcclxuICAgIHRyaXBEYXRhOiB7XHJcbiAgICAgIHN0YXJ0UGxhY2U6ICfmna3lt57kuJznq5knLFxyXG4gICAgICBlbmRQbGFjZTogJ+S4iua1t+iZueahpeermScsXHJcbiAgICAgIHN0YXJ0VGltZTogJzEwOjAwJyxcclxuICAgICAgZW5kVGltZTogJzExOjAyJyxcclxuICAgICAgcmVtYWluVGltZTogMzIsXHJcbiAgICAgIGFycml2ZVRpbWU6ICcxMTowMicsXHJcbiAgICAgIHByb2dyZXNzOiA2MFxyXG4gICAgfVxyXG4gIH1cclxufSxcclxuXHJcbi8vIOWkhOeQhui+k+WFpeahhuWPmOWMllxyXG5vbklucHV0KGUpIHtcclxuICB0aGlzLmlucHV0VGV4dCA9IGUudmFsdWVcclxufSxcclxuXHJcbi8vIOeCueWHu+WPkemAgeaMiemSrlxyXG5vblNlbmQoKSB7XHJcbiAgY29uc3QgdGV4dCA9IHRoaXMuaW5wdXRUZXh0LnRyaW0oKVxyXG4gIGlmICghdGV4dCkgcmV0dXJuXHJcbiAgdGhpcy5zZW5kTWVzc2FnZSh0ZXh0KVxyXG4gIHRoaXMuaW5wdXRUZXh0ID0gJycgICAvLyDmuIXnqbrovpPlhaXmoYZcclxufSxcclxuICAvLyDinIUg5pS555SoIG9uUmVhZHnvvIzmm7TnqLPlrppcclxuICBhc3luYyBvblJlYWR5KCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkSGlzdG9yeSgpXHJcbiAgICBhd2FpdCB0aGlzLmxvYWRDaXR5RGF0YSgpXHJcbiAgICBjb25zb2xlLmxvZygn4pyFIOmhtemdouWIneWni+WMluWujOaIkCcpXHJcbiAgfSxcclxuXHJcbiAgLy8g5Yqg6L295Y6G5Y+y5raI5oGvXHJcbiAgYXN5bmMgbG9hZEhpc3RvcnkoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzcWwgPSBgU0VMRUNUICogRlJPTSBjaGF0X2hpc3RvcnkgT1JERVIgQlkgdGltZXN0YW1wIEFTQyBMSU1JVCA1MGBcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY1NRTChzcWwpXHJcbiAgICAgIGlmIChyZXN1bHQucm93cykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSByZXN1bHQucm93cy5tYXAocm93ID0+ICh7XHJcbiAgICAgICAgICByb2xlOiByb3cucm9sZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJvdy5jb250ZW50LFxyXG4gICAgICAgICAgdGltZTogcm93LnRpbWVzdGFtcFxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUg5Yqg6L295Y6G5Y+y5raI5oGv5oiQ5Yqf77yM5YWxJywgdGhpcy5tZXNzYWdlcy5sZW5ndGgsICfmnaEnKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDliqDovb3ljoblj7LlpLHotKUnLCBlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8g5Yqg6L295Z+O5biC5pWw5o2uXHJcbiAgYXN5bmMgbG9hZENpdHlEYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gY2l0eV9kYXRhIFdIRVJFIGNpdHlfbmFtZSA9ID9gXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNTUUwoc3FsLCBbdGhpcy5jdXJyZW50Q2l0eV0pXHJcbiAgICAgIGlmIChyZXN1bHQucm93cyAmJiByZXN1bHQucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5yb3dzWzBdXHJcbiAgICAgICAgdGhpcy5jaXR5RGF0YSA9IHtcclxuICAgICAgICAgIGF0dHJhY3Rpb25zOiBKU09OLnBhcnNlKGRhdGEuYXR0cmFjdGlvbnMpLFxyXG4gICAgICAgICAgdGlwczogSlNPTi5wYXJzZShkYXRhLnRpcHMpLFxyXG4gICAgICAgICAgZm9vZDogSlNPTi5wYXJzZShkYXRhLmZvb2QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinIUg5Yqg6L295Z+O5biC5pWw5o2u5oiQ5YqfJywgdGhpcy5jaXR5RGF0YSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDliqDovb3ln47luILmlbDmja7lpLHotKUnLCBlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8g5L+d5a2Y5raI5oGvXHJcbiAgYXN5bmMgc2F2ZU1lc3NhZ2Uocm9sZSwgY29udGVudCkge1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3Qgc3FsID0gYFxyXG4gICAgLy8gICAgIElOU0VSVCBJTlRPIGNoYXRfaGlzdG9yeSAocm9sZSwgY29udGVudCwgdGltZXN0YW1wLCBzeW5jZWQpXHJcbiAgICAvLyAgICAgVkFMVUVTICg/LCA/LCA/LCAwKVxyXG4gICAgLy8gICBgXHJcbiAgICAvLyAgIGF3YWl0IGV4ZWNTUUwoc3FsLCBbcm9sZSwgY29udGVudCwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpXSlcclxuICAgIC8vIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKCfinYwg5L+d5a2Y5raI5oGv5aSx6LSlJywgZXJyKVxyXG4gICAgLy8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIOWPkemAgea2iOaBr1xyXG5hc3luYyBzZW5kTWVzc2FnZShpbnB1dCkge1xyXG4gIGlmICghaW5wdXQpIHJldHVyblxyXG5cclxuICAvLyDinIUg55So5oi35raI5oGv77ya5L2/55So5b2T5YmN5pe26Ze0XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IHRpbWVTdHIgPSBub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCd6aC1DTicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KVxyXG4gIFxyXG4gIHRoaXMubWVzc2FnZXMucHVzaCh7IFxyXG4gICAgcm9sZTogJ3VzZXInLCBcclxuICAgIGNvbnRlbnQ6IGlucHV0LCBcclxuICAgIHRpbWU6IHRpbWVTdHIgXHJcbiAgfSlcclxuXHJcbiAgLy8g6LCD55SoIEFJLi4uXHJcbiAgY29uc3QgcmVwbHkgPSBhd2FpdCB0aGlzLmNhbGxBSShpbnB1dClcclxuICBcclxuICAvLyDinIUgQUnlm57lpI3vvJrkuZ/kvb/nlKjlvZPliY3ml7bpl7TvvIjmiJbogIXnlKjlkIzkuIDkuKogbm9377yJXHJcbiAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgXHJcbiAgICByb2xlOiAnYXNzaXN0YW50JywgXHJcbiAgICBjb250ZW50OiByZXBseSwgXHJcbiAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnemgtQ04nLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSlcclxuICB9KVxyXG59LFxyXG5cclxuICAvLyDnprvnur/lm57nrZRcclxuICBnZXRPZmZsaW5lUmVwbHkoaW5wdXQpIHtcclxuICAgIGxldCByZXBseSA9ICfwn5WK77iPIOWbouWbouemu+e6v+aPkOekuu+8midcclxuICAgIGlmIChpbnB1dC5pbmNsdWRlcygn5pmv54K5JykgfHwgaW5wdXQuaW5jbHVkZXMoJ+eOqScpKSB7XHJcbiAgICAgIHJlcGx5ICs9IGBcXG7mjqjojZDmma/ngrnvvJoke3RoaXMuY2l0eURhdGE/LmF0dHJhY3Rpb25zPy5qb2luKCfjgIEnKSB8fCAn5aSW5rup44CB6LGr5ZutJ31gXHJcbiAgICB9IGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKCflkIMnKSB8fCBpbnB1dC5pbmNsdWRlcygn576O6aOfJykpIHtcclxuICAgICAgcmVwbHkgKz0gYFxcbuaOqOiNkOe+jumjn++8miR7dGhpcy5jaXR5RGF0YT8uZm9vZD8uam9pbign44CBJykgfHwgJ+Wwj+esvOWMheOAgeeUn+eFjid9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbHkgKz0gYFxcbuW9k+WJjeWcqCR7dGhpcy5jdXJyZW50Q2l0eX3vvIzmnInpnIDopoHpmo/ml7bpl67miJF+YFxyXG4gICAgfVxyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IHJlcGx5LCB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgfSlcclxuICAgIHRoaXMuc2F2ZU1lc3NhZ2UoJ2Fzc2lzdGFudCcsIHJlcGx5KVxyXG4gIH0sXHJcblxyXG4gIC8vIOiwg+eUqOWQjuerr0FJXHJcbiAgYXN5bmMgY2FsbEFJKGlucHV0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jaGF0Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbXNnOiBpbnB1dCB9KVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICByZXR1cm4gZGF0YS5yZXBseSB8fCAn5Zui5Zui5pqC5pe26LWw56We5LqG77yM5YaN6Zeu5LiA5qyh5ZCnfidcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfosIPnlKhBSeWksei0pScsIGVycilcclxuICAgICAgdGhyb3cgZXJyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZT5cclxuICAucGFnZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOWvvOiIquagjyA9PT09PSAqL1xyXG4gIC5uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICovXHJcbiAgfVxyXG5cclxuICAuYnJhbmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtc3RhciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLXRhZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5icmFuZC10YWctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAubmF2LWljb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pY29uLWNsb2NrIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pY29uLW1lbnUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0g5rua5Yqo5Yy6ID09PT09ICovXHJcbiAgLnNjcm9sbC1hcmVhIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsLWlubmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOawlOazoeihjCA9PT09PSAqL1xyXG4gIC5tc2ctcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiB9XHJcblxyXG4ubXNnLWxlZnQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1zZy1yaWdodCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idWJibGUtdXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLmJ1YmJsZS11c2VyIC5idWJibGUtdGV4dCB7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLWltZyB7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICB9XHJcblxyXG4gIC5idWJibGUtd3JhcCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1vZmZsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmY7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyZDNhNWU7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5idWJibGUtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlY28tYmlyZCB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlOWZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5kZWNvLWltZyB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOWNoeeJh+WMheijhSA9PT09PSAqL1xyXG4gIC5jYXJkLXdyYXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOW/q+aNt+agjyA9PT09PSAqL1xyXG4gIC5xdWljay1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pdGVtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1MCwgMjU1LCAwLjUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2staWNvbi13cmFwIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2staWNvbi13cmFwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBmMDtcclxuICB9XHJcblxyXG4gIC5xdWljay1pY29uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLnF1aWNrLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5xdWljay1zdWIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucXVpY2stbW9yZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTAwLCAxNTAsIDI1NSwgMC4yMik7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5tb3JlLWRvdHMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4ZmEzYzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAubW9yZS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qID09PT09IOi+k+WFpeagjyA9PT09PSAqL1xyXG4gIC5pbnB1dC1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gIH1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMDAsIDIxNiwgMjU1LCAwLjIyKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuXHJcbiAgLmlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYjBiY2Q0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VuZC1idG4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZW5kLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW52LWNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnYtdGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb24td2lmaVwiPjwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImVudi10aXRsZS10ZXh0XCI+5b2T5YmN546v5aKDPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW52LXJvd1wiPlxyXG4gICAgICA8IS0tIOe9kee7nCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pdGVtLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tc21hbGwgaWNvbi13aWZpLXNtXCI+PC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPue9kee7nOeKtuaAgTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZSBlbnYtdmFsdWUtYmx1ZVwiPnt7bmV0d29ya1RleHR9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0g55S16YePIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWl0ZW0taGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGVyeS1iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRlcnktZmlsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPueUtemHjzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZVwiPnt7YmF0dGVyeX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSDkvY3nva4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaXRlbS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXNtYWxsIGljb24tbG9jXCI+PC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImVudi1sYWJlbFwiPuW9k+WJjeS9jee9rjwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImVudi12YWx1ZVwiPnt7bG9jYXRpb259fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgbmV0d29ya1RleHQ6IHsgZGVmYXVsdDogJ+aXoOe6v+e9kee7nOi/nuaOpScgfSxcclxuICAgIGJhdHRlcnk6ICAgICB7IGRlZmF1bHQ6ICc2OCUnIH0sXHJcbiAgICBsb2NhdGlvbjogICAgeyBkZWZhdWx0OiAn5p2t5bee5biCIMK3IOihjOmptuS4rScgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5lbnYtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmVudi10aXRsZSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuLmljb24td2lmaSB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5lbnYtdGl0bGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuLmVudi1yb3cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmVudi1pdGVtIHtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuLmVudi1pdGVtLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uaWNvbi1zbWFsbCB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG4uaWNvbi13aWZpLXNtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZhM2M4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uaWNvbi1sb2Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmEzYzg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi5iYXR0ZXJ5LWJhciB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAxMXB4O1xyXG4gIGJvcmRlci13aWR0aDogMS41cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICM1MmM0MWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmJhdHRlcnktZmlsbCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmVudi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOGZhM2M4O1xyXG59XHJcbi5lbnYtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmQzYTVlO1xyXG59XHJcbi5lbnYtdmFsdWUtYmx1ZSB7XHJcbiAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRyaXAtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbWFwXCI+PC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlLXRleHRcIj7lvZPliY3ooYznqIs8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saW5rXCIgb25jbGljaz1cIm9uRGV0YWlsQ2xpY2tcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGluay10ZXh0XCI+5p+l55yL6K+m5oOFIOKAujwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm91dGUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0aW9uLW5vZGUgYWxpZ24tbGVmdFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuWHuuWPkeWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVwYXJ0dXJlfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzLXRpbWVcIj57e2RlcGFydFRpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm91dGUtbWlkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0cmFpbi1ub1wiPnt7dHJhaW5Ob319PC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1saW5lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWluLWNoaXBcIj48dGV4dCBjbGFzcz1cInRyYWluLWNoaXAtdGV4dFwiPumrmOmTgTwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtYmFkZ2VcIj7ooYznqIvov5vooYzkuK08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRpb24tbm9kZSBhbGlnbi1yaWdodFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicy1sYWJlbFwiPuebrueahOWcsDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtbmFtZVwiPnt7ZGVzdGluYXRpb259fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInMtdGltZVwiPnt7YXJyaXZlVGltZX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWxlZnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWUtbGFiZWxcIj7pooTorqHliankvZnml7bpl7QgPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZS1ib2xkXCI+e3tyZW1haW5UaW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImFycml2ZS1oaW50XCI+6aKE6K6hIHt7YXJyaXZlVGltZX19IOWIsOi+vjwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOiB7e3Byb2dyZXNzfX0lO1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRlcGFydHVyZTogICB7IGRlZmF1bHQ6ICfmna3lt57kuJznq5knIH0sXHJcbiAgICBkZXBhcnRUaW1lOiAgeyBkZWZhdWx0OiAnMTA6MDAnIH0sXHJcbiAgICBkZXN0aW5hdGlvbjogeyBkZWZhdWx0OiAn5LiK5rW36Jm55qGl56uZJyB9LFxyXG4gICAgYXJyaXZlVGltZTogIHsgZGVmYXVsdDogJzExOjAyJyB9LFxyXG4gICAgdHJhaW5ObzogICAgIHsgZGVmYXVsdDogJ0cxMjIzJyB9LFxyXG4gICAgcmVtYWluVGltZTogIHsgZGVmYXVsdDogJzMyIOWIhumSnycgfSxcclxuICAgIHByb2dyZXNzOiAgICB7IGRlZmF1bHQ6IDUyIH0sXHJcbiAgfSxcclxuICBvbkRldGFpbENsaWNrKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGV0YWlsQ2xpY2snKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRyaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLW1hcCB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmQzYTVlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluayB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtbGluay10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOGZhM2M4O1xyXG4gICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICB9XHJcblxyXG4gIC5yb3V0ZS1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpb24tbm9kZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAuYWxpZ24tbGVmdCAgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxyXG4gIC5hbGlnbi1yaWdodCB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxyXG5cclxuICAucy1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogI2IwYmNkNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcblxyXG4gIC5zLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMWEyYTRhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAucy10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNWE2ZDhhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcblxyXG4gIC5yb3V0ZS1taWQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAudHJhaW4tbm8ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM0ZTdjZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrLWxpbmUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIC5kb3Qge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjhjOGU4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRhc2gge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gICAgLyogYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkOyAqL1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2I4YzhlODtcclxuICB9XHJcblxyXG4gIC50cmFpbi1jaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRyYWluLWNoaXAtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzRlN2NmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZhO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGltZS1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAudGltZS1sZWZ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM1YTZkOGE7XHJcbiAgfVxyXG5cclxuICAudGltZS1ib2xkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMWEyYTRhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5hcnJpdmUtaGludCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzhmYTNjODtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy13cmFwIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICB9XHJcbjwvc3R5bGU+IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmVudi1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuZW52LXRpdGxlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi5pY29uLXdpZmlcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI3cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiN3B4XCJcbiAgfSxcbiAgXCIuZW52LXRpdGxlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5lbnYtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCIuZW52LWl0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2cHhcIlxuICB9LFxuICBcIi5lbnYtaXRlbS1oZWFkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNXB4XCJcbiAgfSxcbiAgXCIuaWNvbi1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0cHhcIlxuICB9LFxuICBcIi5pY29uLXdpZmktc21cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiN3B4XCJcbiAgfSxcbiAgXCIuaWNvbi1sb2NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiN3B4XCJcbiAgfSxcbiAgXCIuYmF0dGVyeS1iYXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMXB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjEuNXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMS41cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMS41cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjEuNXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiM1MmM0MWFcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjNTJjNDFhXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiM1MmM0MWFcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiM1MmM0MWFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0cHhcIlxuICB9LFxuICBcIi5iYXR0ZXJ5LWZpbGxcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM1MmM0MWFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmVudi1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiXG4gIH0sXG4gIFwiLmVudi12YWx1ZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiXG4gIH0sXG4gIFwiLmVudi12YWx1ZS1ibHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxMnB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi50cmlwLWNhcmRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE4cHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jYXJkLWhlYWRlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE4cHhcIlxuICB9LFxuICBcIi5jYXJkLXRpdGxlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5pY29uLW1hcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI3cHhcIlxuICB9LFxuICBcIi5jYXJkLXRpdGxlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5jYXJkLWxpbmtcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuY2FyZC1saW5rLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZmEzYzhcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCIucm91dGUtY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLnN0YXRpb24tbm9kZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjkwcHhcIlxuICB9LFxuICBcIi5hbGlnbi1sZWZ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCIuYWxpZ24tcmlnaHRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIucy1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2IwYmNkNFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIucy1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjZweFwiXG4gIH0sXG4gIFwiLnMtdGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzVhNmQ4YVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMnB4XCJcbiAgfSxcbiAgXCIucm91dGUtbWlkXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi50cmFpbi1ub1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50cmFjay1saW5lXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuZG90XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiOGM4ZThcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2I4YzhlOFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwXG4gIH0sXG4gIFwiLmRhc2hcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYjhjOGU4XCJcbiAgfSxcbiAgXCIudHJhaW4tY2hpcFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2cHhcIlxuICB9LFxuICBcIi50cmFpbi1jaGlwLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5zdGF0dXMtYmFkZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuZGl2aWRlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY0ZmFcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE0cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi50aW1lLXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi50aW1lLWxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpbWUtbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1YTZkOGFcIlxuICB9LFxuICBcIi50aW1lLWJvbGRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTJhNGFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5hcnJpdmUtaGludFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiXG4gIH0sXG4gIFwiLnByb2dyZXNzLXdyYXBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI5OXB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwiLnByb2dyZXNzLWJhclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjk5cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnBhZ2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwZjRmZlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLm5hdlwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxOHB4XCJcbiAgfSxcbiAgXCIuYnJhbmRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmJyYW5kLXN0YXJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCIuYnJhbmQtbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI4MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5icmFuZC10YWdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIuYnJhbmQtdGFnLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIlxuICB9LFxuICBcIi5uYXYtaWNvbnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLm5hdi1pY29uLWNsb2NrXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5uYXYtaWNvbi1tZW51XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCIuc2Nyb2xsLWFyZWFcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLnNjcm9sbC1pbm5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTRweFwiXG4gIH0sXG4gIFwiLm1zZy1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIubXNnLWxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLm1zZy1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuYnViYmxlLXVzZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS11c2VyIC5idWJibGUtdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImJ1YmJsZS11c2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJidWJibGUtdGV4dFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmF2YXRhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ2cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIzcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWYyZmZcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5hdmF0YXItaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDZweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS13cmFwXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5idWJibGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS1vZmZsaW5lXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNWY4ZmZcIlxuICB9LFxuICBcIi5idWJibGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5idWJibGUtdGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIycHhcIlxuICB9LFxuICBcIi5kZWNvLWJpcmRcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGNlOWZmXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuZGVjby1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MnB4XCJcbiAgfSxcbiAgXCIuY2FyZC13cmFwXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCIuYm90dG9tLXNwYWNlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWl0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yOClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyNTUsMjUwLDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCJyZ2JhKDI1NSwyNTAsMjU1LDAuNSlcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIucXVpY2staWNvbi13cmFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZjBmMFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjZweFwiXG4gIH0sXG4gIFwiLnF1aWNrLWljb24tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE5cHhcIlxuICB9LFxuICBcIi5xdWljay1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucXVpY2stc3ViXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGZhM2M4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5xdWljay1tb3JlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjgpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMjIpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yMilcIixcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLm1vcmUtZG90c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCJcbiAgfSxcbiAgXCIubW9yZS1sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuaW5wdXQtYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE0cHhcIlxuICB9LFxuICBcIi5pbnB1dC1maWVsZFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI0NHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjgpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwicmdiYSgxMDAsMjE2LDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcInJnYmEoMTAwLDIxNiwyNTUsMC4yMilcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgxMDAsMjE2LDI1NSwwLjIyKVwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgxMDAsMjE2LDI1NSwwLjIyKVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5pbnB1dC1wbGFjZWhvbGRlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2IwYmNkNFwiXG4gIH0sXG4gIFwiLmVtb2ppLWJ0blwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLnNlbmQtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRlN2NmZlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zZW5kLWljb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImVudi1jYXJkXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZW52LXRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImljb24td2lmaVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5b2T5YmN546v5aKDXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZW52LXRpdGxlLXRleHRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZW52LXJvd1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbnYtaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW52LWl0ZW0taGVhZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvbi1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImljb24td2lmaS1zbVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi572R57uc54q25oCBXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZW52LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uZXR3b3JrVGV4dH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW52LXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgXCJlbnYtdmFsdWUtYmx1ZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbnYtaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW52LWl0ZW0taGVhZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYmF0dGVyeS1iYXJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmF0dGVyeS1maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnlLXph49cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnYtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhdHRlcnl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImVudi12YWx1ZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbnYtaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW52LWl0ZW0taGVhZGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvbi1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImljb24tbG9jXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlvZPliY3kvY3nva5cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnYtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbnYtdmFsdWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInRyaXAtY2FyZFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNhcmQtaGVhZGVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmQtdGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb24tbWFwXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlvZPliY3ooYznqItcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXRpdGxlLXRleHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2FyZC1saW5rXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbkRldGFpbENsaWNrXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuafpeeci+ivpuaDhSDigLpcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLWxpbmstdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJvdXRlLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzdGF0aW9uLW5vZGVcIixcbiAgICAgICAgICAgIFwiYWxpZ24tbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlh7rlj5HlnLBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlcGFydHVyZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy1uYW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlcGFydFRpbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtdGltZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyb3V0ZS1taWRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50cmFpbk5vfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0cmFpbi1ub1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRyYWNrLWxpbmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkb3RcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZGFzaFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFpbi1jaGlwXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumrmOmTgVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyYWluLWNoaXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXNoXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRvdFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuihjOeoi+i/m+ihjOS4rVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN0YXR1cy1iYWRnZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzdGF0aW9uLW5vZGVcIixcbiAgICAgICAgICAgIFwiYWxpZ24tcmlnaHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55uu55qE5ZywXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicy1uYW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmFycml2ZVRpbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInMtdGltZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdmlkZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGltZS1yb3dcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGltZS1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumihOiuoeWJqeS9meaXtumXtCBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aW1lLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlbWFpblRpbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWUtYm9sZFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICfpooTorqEgJyArICh0aGlzLmFycml2ZVRpbWUpICsgJyDliLDovr4nfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhcnJpdmUtaGludFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwcm9ncmVzcy13cmFwXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwid2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICh0aGlzLnByb2dyZXNzKSArICclJ31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicGFnZVwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm5hdlwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJicmFuZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLinKZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJicmFuZC1zdGFyXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlm6Llm6JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJicmFuZC1uYW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnJhbmQtdGFnXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumZquS9oOavj+S4gOeoi1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJyYW5kLXRhZy10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYXYtaWNvbnNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4peLXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2LWljb24tY2xvY2tcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKLrlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hdi1pY29uLW1lbnVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzY3JvbGwtYXJlYVwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiZmxleFwiOiAxXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzY3JvbGwtaW5uZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1zZy1yb3dcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtd3JhcFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGVcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAn5L2g5aW977yB5oiR5piv5L2g55qE5peF6KGM5LyZ5Ly0IFRyaXBQYWwg4pyoJyArICgnXFxuJykgKyAn5peg6K66572R57uc5aaC5L2V77yM5oiR6YO95Lya6Zmq5Ly05L2gJyArICgnXFxuJykgKyAn6K6p5q+P5LiA5q615peF56iL6YO95a6J5b+D5Y+I5oSJ5b+rJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ncmVldGluZ1RpbWUxfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlwLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC13cmFwXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZW52LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVzc2FnZXN9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwibXNnXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibXNnLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1zZy5yb2xlPT09J2Fzc2lzdGFudCd9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubXNnLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtc2ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1zZy5yb2xlPT09J3VzZXInfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS11c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubXNnLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm90dG9tLXNwYWNlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicXVpY2stYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInF1aWNrLWl0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWljb24td3JhcFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn5SUXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yiw56uZ5o+Q6YaSXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2stbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW3suW8gOWQr1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLXN1YlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJxdWljay1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1pY29uLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+XulwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuihjOeoi+i/m+W6plwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmn6XnnIvov5vluqZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicXVpY2staWNvbi13cmFwXCIsXG4gICAgICAgICAgICAgICAgXCJyZWRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+SrFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1aWNrLWljb24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumZquaIkeiBiuWkqVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInF1aWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmiZPlj5Hml7bpl7RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdWljay1zdWJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicXVpY2staXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLCt8K3wrdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtb3JlLWRvdHNcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuabtOWkmuWKn+iDvVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1vcmUtbGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJpbnB1dC1iYXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWRiuivieaIkeS9oOeahOmcgOaxguWQp++9nlwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5wdXRUZXh0fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uSW5wdXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlbmQtYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvblNlbmRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4p6kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VuZC1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vRW52Q2FyZC51eD91eFR5cGU9Y29tcFwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9lbnYtY2FyZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9FbnZDYXJkLnV4P3V4VHlwZT1jb21wJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL0VudkNhcmQudXg/dXhUeXBlPWNvbXBcIilcbn0pO1xuOyIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vVHJpcENhcmQudXg/dXhUeXBlPWNvbXBcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvdHJpcC1jYXJkJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wXCIpXG59KTtcbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwicmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdXgtbG9hZGVyLmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmdHlwZT1pbXBvcnQhLi4vLi4vY29tcG9uZW50cy9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcCZuYW1lPXRyaXAtY2FyZFwiKVxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdXgtbG9hZGVyLmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmdHlwZT1pbXBvcnQhLi4vLi4vY29tcG9uZW50cy9FbnZDYXJkLnV4P3V4VHlwZT1jb21wJm5hbWU9ZW52LWNhcmRcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxc5Ly06KGM5peg55WMJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJmltcG9ydE5hbWVzW109dHJpcC1jYXJkLGltcG9ydE5hbWVzW109ZW52LWNhcmRcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJkYXRhIiwibm93IiwiRGF0ZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJncmVldGluZ1RpbWUxIiwibWVzc2FnZXMiLCJjdXJyZW50Q2l0eSIsImNpdHlEYXRhIiwiaW5wdXRUZXh0IiwidHJpcERhdGEiLCJzdGFydFBsYWNlIiwiZW5kUGxhY2UiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVtYWluVGltZSIsImFycml2ZVRpbWUiLCJwcm9ncmVzcyIsIm9uSW5wdXQiLCJlIiwidmFsdWUiLCJvblNlbmQiLCJ0ZXh0IiwidHJpbSIsInNlbmRNZXNzYWdlIiwib25SZWFkeSIsImxvYWRIaXN0b3J5IiwibG9hZENpdHlEYXRhIiwiY29uc29sZSIsImxvZyIsInNxbCIsInJlc3VsdCIsImV4ZWNTUUwiLCJyb3dzIiwibWFwIiwicm93Iiwicm9sZSIsImNvbnRlbnQiLCJ0aW1lIiwidGltZXN0YW1wIiwibGVuZ3RoIiwiZXJyIiwiZXJyb3IiLCJhdHRyYWN0aW9ucyIsIkpTT04iLCJwYXJzZSIsInRpcHMiLCJmb29kIiwic2F2ZU1lc3NhZ2UiLCJpbnB1dCIsInRpbWVTdHIiLCJwdXNoIiwicmVwbHkiLCJjYWxsQUkiLCJnZXRPZmZsaW5lUmVwbHkiLCJpbmNsdWRlcyIsIl90aGlzJGNpdHlEYXRhIiwiX3RoaXMkY2l0eURhdGEkYXR0cmFjIiwiam9pbiIsIl90aGlzJGNpdHlEYXRhMiIsIl90aGlzJGNpdHlEYXRhMiRmb29kIiwidG9Mb2NhbGVTdHJpbmciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwibXNnIiwianNvbiIsInByb3BzIiwibmV0d29ya1RleHQiLCJkZWZhdWx0IiwiYmF0dGVyeSIsImxvY2F0aW9uIiwiZGVwYXJ0dXJlIiwiZGVwYXJ0VGltZSIsImRlc3RpbmF0aW9uIiwidHJhaW5ObyIsIm9uRGV0YWlsQ2xpY2siLCIkZW1pdCJdLCJzb3VyY2VSb290IjoiIn0=