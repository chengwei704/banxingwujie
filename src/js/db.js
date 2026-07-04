// src/js/db.js
const database = require('@system.database')

const DB_NAME = 'tripal.db'

// 打开数据库
export function openDB() {
  return new Promise((resolve, reject) => {
    database.openDatabase({
      name: DB_NAME,
      version: '1.0.0',
      success: (res) => {
        console.log('数据库打开成功')
        resolve(res)
      },
      fail: (err) => {
        console.error('数据库打开失败', err)
        reject(err)
      }
    })
  })
}

// 执行 SQL（增删改查通用）
export function execSQL(sql, params = []) {
  return new Promise((resolve, reject) => {
    database.executeSql({
      name: DB_NAME,
      sql: sql,
      params: params,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        console.error('SQL执行失败', err)
        reject(err)
      }
    })
  })
}

// 关闭数据库
export function closeDB() {
  database.closeDatabase({
    name: DB_NAME,
    success: () => console.log('数据库已关闭'),
    fail: (err) => console.error('关闭失败', err)
  })
}