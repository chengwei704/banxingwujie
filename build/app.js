/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\\Users\\chengyuanyuan.com\\伴行无界\\src!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\Users\chengyuanyuan.com\伴行无界\src!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = __webpack_require__(/*! ./js/db */ "./src/js/db.js");
var _initData = __webpack_require__(/*! ./js/initData */ "./src/js/initData.js");
var _default = exports.default = {
  onCreate() {
    this.initDatabase();
  },
  async initDatabase() {
    try {
      await (0, _db.openDB)();
      await (0, _initData.createTables)();
      await (0, _initData.initMockData)();
      console.log('✅ 数据库初始化完成');
    } catch (err) {
      console.error('❌ 数据库初始化失败', err);
    }
  },
  onDestroy() {
    (0, _db.closeDB)();
  }
};}

/***/ }),

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closeDB = closeDB;
exports.execSQL = execSQL;
exports.openDB = openDB;
// src/js/db.js
const database = $app_require$('@app-module/system.database');
const DB_NAME = 'tripal.db';

// 打开数据库
function openDB() {
  return new Promise((resolve, reject) => {
    database.openDatabase({
      name: DB_NAME,
      version: '1.0.0',
      success: res => {
        console.log('数据库打开成功');
        resolve(res);
      },
      fail: err => {
        console.error('数据库打开失败', err);
        reject(err);
      }
    });
  });
}

// 执行 SQL（增删改查通用）
function execSQL(sql, params = []) {
  return new Promise((resolve, reject) => {
    database.executeSql({
      name: DB_NAME,
      sql: sql,
      params: params,
      success: res => {
        resolve(res);
      },
      fail: err => {
        console.error('SQL执行失败', err);
        reject(err);
      }
    });
  });
}

// 关闭数据库
function closeDB() {
  database.closeDatabase({
    name: DB_NAME,
    success: () => console.log('数据库已关闭'),
    fail: err => console.error('关闭失败', err)
  });
}

/***/ }),

/***/ "./src/js/initData.js":
/*!****************************!*\
  !*** ./src/js/initData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTables = createTables;
exports.initMockData = initMockData;
var _db = __webpack_require__(/*! ./db */ "./src/js/db.js");
// src/js/initData.js

// 创建所有表
async function createTables() {
  // 城市预加载数据表
  const sql1 = `
    CREATE TABLE IF NOT EXISTS city_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      city_name TEXT UNIQUE,
      attractions TEXT,
      tips TEXT,
      food TEXT,
      update_time TEXT
    )
  `;
  // 对话历史表
  const sql2 = `
    CREATE TABLE IF NOT EXISTS chat_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT,
      content TEXT,
      timestamp TEXT,
      synced INTEGER DEFAULT 0
    )
  `;
  // 行程信息表
  const sql3 = `
    CREATE TABLE IF NOT EXISTS trip_info (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      start_place TEXT,
      end_place TEXT,
      start_time TEXT,
      progress INTEGER DEFAULT 0,
      status TEXT DEFAULT '进行中'
    )
  `;
  try {
    await (0, _db.execSQL)(sql1);
    await (0, _db.execSQL)(sql2);
    await (0, _db.execSQL)(sql3);
    console.log('✅ 所有数据表创建成功');
  } catch (err) {
    console.error('❌ 创建表失败', err);
  }
}

// 插入示例城市数据（只插上海，其他可后续从后端拉取）
async function initMockData() {
  try {
    // 先检查是否已有上海数据
    const checkSql = `SELECT * FROM city_data WHERE city_name = '上海'`;
    const result = await (0, _db.execSQL)(checkSql);
    if (result.rows && result.rows.length > 0) {
      console.log('⏭️ 上海数据已存在，跳过插入');
      return;
    }
    const insertSql = `
      INSERT INTO city_data (city_name, attractions, tips, food, update_time)
      VALUES (?, ?, ?, ?, ?)
    `;
    await (0, _db.execSQL)(insertSql, ['上海', JSON.stringify(['外滩', '豫园', '陆家嘴', '南京东路']), JSON.stringify(['带伞', '注意防晒', '避开早晚高峰']), JSON.stringify(['小笼包', '生煎', '蟹粉汤包']), new Date().toISOString()]);
    console.log('✅ 预置数据插入成功');
  } catch (err) {
    console.error('❌ 插入预置数据失败', err);
  }
}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.banxing.app","name":"伴行无界","versionCode":1,"versionName":"1.0.0","minPlatformVersion":1080,"icon":"assets/images/logo.png","config":{"logLevel":"off"},"permissions":[{"origin":"*"}],"features":[{"name":"system.network"},{"name":"system.battery"},{"name":"system.database"},{"name":"system.fetch"},{"name":"system.geolocation"},{"name":"system.map"}],"router":{"entry":"pages/Chat","pages":{"pages/Chat":{"component":"index"},"pages/Home":{"component":"index"},"pages/Profile":{"component":"index"},"pages/Navigation":{"component":"index"}},"tabBar":{"textColor":"#8fa3c8","selectedColor":"#4e7cff","backgroundColor":"#ffffff","borderColor":"#f0f4fa","tabBarList":[{"text":"聊天","icon":"assets/images/tab-chat.png","activeIcon":"assets/images/tab-chat-active.png","path":"pages/Chat"},{"text":"地图","icon":"assets/images/tab-map.png","activeIcon":"assets/images/tab-map-active.png","path":"pages/Home"},{"text":"我的","icon":"assets/images/tab-profile.png","activeIcon":"assets/images/tab-profile-active.png","path":"pages/Profile"}]}},"display":{"titleBarBackgroundColor":"#FF8C69","titleBarTextColor":"#FFFFFF","titleBarText":"伴行无界","pages":{"pages/Chat":{"titleBarText":"伴行无界"},"pages/Home":{"titleBarText":"地图","titleBar":false},"pages/Profile":{"titleBarText":"我的"},"pages/Navigation":{"titleBarText":"导航"}}}}');

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
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\Users\chengyuanyuan.com\伴行无界\src!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\伴行无界&cacheDirectory&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\\Users\\chengyuanyuan.com\\伴行无界\\src!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\伴行无界&cacheDirectory&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "2.0.9" })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUN6QixDQUFDO0lBQ0ZqQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDM0IsQ0FBQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtJQUNaRixPQUFPLENBQUNHLEtBQUssQ0FBQyxZQUFZLEVBQUVELEdBQUcsQ0FBQztFQUNsQztBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyw0dkRBQXk0Qjs7QUFFcDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDRDQUFpQjtBQUMzRCxpQ0FBaUM7QUFDakM7QUFDQSxDQUFDO0FBQ0QsMENBQTBDLGlCQUFpQixPQUF3QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9hcHAudXg/MjNjMyIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2pzL2RiLmpzPzQ2NWQiLCJ3ZWJwYWNrOi8vYmFueGluZy8uL3NyYy9qcy9pbml0RGF0YS5qcz9iODY5Iiwid2VicGFjazovL2Jhbnhpbmcvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly9iYW54aW5nLy4vc3JjL2FwcC51eD9mYjIzIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbmltcG9ydCB7IG9wZW5EQiwgY2xvc2VEQiB9IGZyb20gJy4vanMvZGInXHJcbmltcG9ydCB7IGNyZWF0ZVRhYmxlcywgaW5pdE1vY2tEYXRhIH0gZnJvbSAnLi9qcy9pbml0RGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvbkNyZWF0ZSgpIHtcclxuICAgIHRoaXMuaW5pdERhdGFiYXNlKClcclxuICB9LFxyXG5cclxuICBhc3luYyBpbml0RGF0YWJhc2UoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBvcGVuREIoKVxyXG4gICAgICBhd2FpdCBjcmVhdGVUYWJsZXMoKVxyXG4gICAgICBhd2FpdCBpbml0TW9ja0RhdGEoKVxyXG4gICAgICBjb25zb2xlLmxvZygn4pyFIOaVsOaNruW6k+WIneWni+WMluWujOaIkCcpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign4p2MIOaVsOaNruW6k+WIneWni+WMluWksei0pScsIGVycilcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICBjbG9zZURCKClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gc3JjL2pzL2RiLmpzXHJcbmNvbnN0IGRhdGFiYXNlID0gcmVxdWlyZSgnQHN5c3RlbS5kYXRhYmFzZScpXHJcblxyXG5jb25zdCBEQl9OQU1FID0gJ3RyaXBhbC5kYidcclxuXHJcbi8vIOaJk+W8gOaVsOaNruW6k1xyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRCKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBkYXRhYmFzZS5vcGVuRGF0YWJhc2Uoe1xyXG4gICAgICBuYW1lOiBEQl9OQU1FLFxyXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruW6k+aJk+W8gOaIkOWKnycpXHJcbiAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfmlbDmja7lupPmiZPlvIDlpLHotKUnLCBlcnIpXHJcbiAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vLyDmiafooYwgU1FM77yI5aKe5Yig5pS55p+l6YCa55So77yJXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjU1FMKHNxbCwgcGFyYW1zID0gW10pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZGF0YWJhc2UuZXhlY3V0ZVNxbCh7XHJcbiAgICAgIG5hbWU6IERCX05BTUUsXHJcbiAgICAgIHNxbDogc3FsLFxyXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU1FM5omn6KGM5aSx6LSlJywgZXJyKVxyXG4gICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuLy8g5YWz6Zet5pWw5o2u5bqTXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURCKCkge1xyXG4gIGRhdGFiYXNlLmNsb3NlRGF0YWJhc2Uoe1xyXG4gICAgbmFtZTogREJfTkFNRSxcclxuICAgIHN1Y2Nlc3M6ICgpID0+IGNvbnNvbGUubG9nKCfmlbDmja7lupPlt7LlhbPpl60nKSxcclxuICAgIGZhaWw6IChlcnIpID0+IGNvbnNvbGUuZXJyb3IoJ+WFs+mXreWksei0pScsIGVycilcclxuICB9KVxyXG59IiwiLy8gc3JjL2pzL2luaXREYXRhLmpzXHJcbmltcG9ydCB7IGV4ZWNTUUwgfSBmcm9tICcuL2RiJ1xyXG5cclxuLy8g5Yib5bu65omA5pyJ6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUYWJsZXMoKSB7XHJcbiAgLy8g5Z+O5biC6aKE5Yqg6L295pWw5o2u6KGoXHJcbiAgY29uc3Qgc3FsMSA9IGBcclxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGNpdHlfZGF0YSAoXHJcbiAgICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgICAgY2l0eV9uYW1lIFRFWFQgVU5JUVVFLFxyXG4gICAgICBhdHRyYWN0aW9ucyBURVhULFxyXG4gICAgICB0aXBzIFRFWFQsXHJcbiAgICAgIGZvb2QgVEVYVCxcclxuICAgICAgdXBkYXRlX3RpbWUgVEVYVFxyXG4gICAgKVxyXG4gIGBcclxuICAvLyDlr7nor53ljoblj7LooahcclxuICBjb25zdCBzcWwyID0gYFxyXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgY2hhdF9oaXN0b3J5IChcclxuICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxyXG4gICAgICByb2xlIFRFWFQsXHJcbiAgICAgIGNvbnRlbnQgVEVYVCxcclxuICAgICAgdGltZXN0YW1wIFRFWFQsXHJcbiAgICAgIHN5bmNlZCBJTlRFR0VSIERFRkFVTFQgMFxyXG4gICAgKVxyXG4gIGBcclxuICAvLyDooYznqIvkv6Hmga/ooahcclxuICBjb25zdCBzcWwzID0gYFxyXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdHJpcF9pbmZvIChcclxuICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxyXG4gICAgICBzdGFydF9wbGFjZSBURVhULFxyXG4gICAgICBlbmRfcGxhY2UgVEVYVCxcclxuICAgICAgc3RhcnRfdGltZSBURVhULFxyXG4gICAgICBwcm9ncmVzcyBJTlRFR0VSIERFRkFVTFQgMCxcclxuICAgICAgc3RhdHVzIFRFWFQgREVGQVVMVCAn6L+b6KGM5LitJ1xyXG4gICAgKVxyXG4gIGBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGV4ZWNTUUwoc3FsMSlcclxuICAgIGF3YWl0IGV4ZWNTUUwoc3FsMilcclxuICAgIGF3YWl0IGV4ZWNTUUwoc3FsMylcclxuICAgIGNvbnNvbGUubG9nKCfinIUg5omA5pyJ5pWw5o2u6KGo5Yib5bu65oiQ5YqfJylcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDliJvlu7rooajlpLHotKUnLCBlcnIpXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmj5LlhaXnpLrkvovln47luILmlbDmja7vvIjlj6rmj5LkuIrmtbfvvIzlhbbku5blj6/lkI7nu63ku47lkI7nq6/mi4nlj5bvvIlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRNb2NrRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgLy8g5YWI5qOA5p+l5piv5ZCm5bey5pyJ5LiK5rW35pWw5o2uXHJcbiAgICBjb25zdCBjaGVja1NxbCA9IGBTRUxFQ1QgKiBGUk9NIGNpdHlfZGF0YSBXSEVSRSBjaXR5X25hbWUgPSAn5LiK5rW3J2BcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNTUUwoY2hlY2tTcWwpXHJcbiAgICBpZiAocmVzdWx0LnJvd3MgJiYgcmVzdWx0LnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn4o+t77iPIOS4iua1t+aVsOaNruW3suWtmOWcqO+8jOi3s+i/h+aPkuWFpScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2VydFNxbCA9IGBcclxuICAgICAgSU5TRVJUIElOVE8gY2l0eV9kYXRhIChjaXR5X25hbWUsIGF0dHJhY3Rpb25zLCB0aXBzLCBmb29kLCB1cGRhdGVfdGltZSlcclxuICAgICAgVkFMVUVTICg/LCA/LCA/LCA/LCA/KVxyXG4gICAgYFxyXG4gICAgYXdhaXQgZXhlY1NRTChpbnNlcnRTcWwsIFtcclxuICAgICAgJ+S4iua1tycsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KFsn5aSW5rupJywgJ+ixq+WbrScsICfpmYblrrblmLQnLCAn5Y2X5Lqs5Lic6LevJ10pLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShbJ+W4puS8nicsICfms6jmhI/pmLLmmZInLCAn6YG/5byA5pep5pma6auY5bOwJ10pLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShbJ+Wwj+esvOWMhScsICfnlJ/nhY4nLCAn6J+557KJ5rGk5YyFJ10pLFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgIF0pXHJcbiAgICBjb25zb2xlLmxvZygn4pyFIOmihOe9ruaVsOaNruaPkuWFpeaIkOWKnycpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfinYwg5o+S5YWl6aKE572u5pWw5o2u5aSx6LSlJywgZXJyKVxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3N0eWxlJCA9IHt9XG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tYW5pZmVzdC1sb2FkZXIuanM/cGF0aD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYxcXFxcc3JjIS4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFzkvLTooYzml6DnlYwmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyEuLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uICgkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgXG4gICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgfVxuICAkYXBwX21vZHVsZSQuZXhwb3J0cy5tYW5pZmVzdCA9IHJlcXVpcmUoXCIuL21hbmlmZXN0Lmpzb25cIilcbiAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSB7IGxpc3Q6IFsgJGFwcF9zdHlsZSQgXSB9XG4gIFxufSlcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCB7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pXG4iXSwibmFtZXMiOlsiX2RiIiwicmVxdWlyZSIsIl9pbml0RGF0YSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJvbkNyZWF0ZSIsImluaXREYXRhYmFzZSIsIm9wZW5EQiIsImNyZWF0ZVRhYmxlcyIsImluaXRNb2NrRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm9uRGVzdHJveSIsImNsb3NlREIiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9wZW5EYXRhYmFzZSIsIm5hbWUiLCJ2ZXJzaW9uIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJleGVjU1FMIiwic3FsIiwicGFyYW1zIiwiZXhlY3V0ZVNxbCIsImNsb3NlRGF0YWJhc2UiLCJzcWwxIiwic3FsMiIsInNxbDMiLCJjaGVja1NxbCIsInJlc3VsdCIsInJvd3MiLCJsZW5ndGgiLCJpbnNlcnRTcWwiLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==