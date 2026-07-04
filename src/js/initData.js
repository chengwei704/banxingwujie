// src/js/initData.js
import { execSQL } from './db'

// 创建所有表
export async function createTables() {
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
  `
  // 对话历史表
  const sql2 = `
    CREATE TABLE IF NOT EXISTS chat_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT,
      content TEXT,
      timestamp TEXT,
      synced INTEGER DEFAULT 0
    )
  `
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
  `

  try {
    await execSQL(sql1)
    await execSQL(sql2)
    await execSQL(sql3)
    console.log('✅ 所有数据表创建成功')
  } catch (err) {
    console.error('❌ 创建表失败', err)
  }
}

// 插入示例城市数据（只插上海，其他可后续从后端拉取）
export async function initMockData() {
  try {
    // 先检查是否已有上海数据
    const checkSql = `SELECT * FROM city_data WHERE city_name = '上海'`
    const result = await execSQL(checkSql)
    if (result.rows && result.rows.length > 0) {
      console.log('⏭️ 上海数据已存在，跳过插入')
      return
    }

    const insertSql = `
      INSERT INTO city_data (city_name, attractions, tips, food, update_time)
      VALUES (?, ?, ?, ?, ?)
    `
    await execSQL(insertSql, [
      '上海',
      JSON.stringify(['外滩', '豫园', '陆家嘴', '南京东路']),
      JSON.stringify(['带伞', '注意防晒', '避开早晚高峰']),
      JSON.stringify(['小笼包', '生煎', '蟹粉汤包']),
      new Date().toISOString()
    ])
    console.log('✅ 预置数据插入成功')
  } catch (err) {
    console.error('❌ 插入预置数据失败', err)
  }
}