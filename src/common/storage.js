import database from '@system.database'

const MEMORY_CACHE = {}

export const storage = {
  // 内存缓存（临时、快速）
  mem: {
    set(key, val) { MEMORY_CACHE[key] = val },
    get(key) { return MEMORY_CACHE[key] ?? null },
    del(key) { delete MEMORY_CACHE[key] },
  },

  // SQLite 持久化
  async dbSet(table, key, value) {
    const db = await database.openDatabase({ name: 'banxing.db' })
    await db.executeSql({
      sql: `CREATE TABLE IF NOT EXISTS ${table} (k TEXT PRIMARY KEY, v TEXT)`,
    })
    await db.executeSql({
      sql: `INSERT OR REPLACE INTO ${table}(k,v) VALUES(?,?)`,
      parameters: [key, JSON.stringify(value)],
    })
  },

  async dbGet(table, key) {
    try {
      const db = await database.openDatabase({ name: 'banxing.db' })
      const res = await db.executeSql({
        sql: `SELECT v FROM ${table} WHERE k=?`,
        parameters: [key],
      })
      const row = res.rows?.item(0)
      return row ? JSON.parse(row.v) : null
    } catch {
      return null
    }
  },
}