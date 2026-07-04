// services/geocache.js
import sqlite from '@system.sqlite'

const db = sqlite.openDatabase({ name: 'trip_cache.db' })

// 读取目的地缓存
export function getDestinationCache(city) {
  return new Promise((resolve) => {
    db.executeSql(
      'SELECT * FROM destination_data WHERE city=?',
      [city],
      (ret) => {
        if (ret.rows.length > 0) {
          const row = ret.rows[0]
          resolve({
            pois: JSON.parse(row.poi_list),
            stories: JSON.parse(row.stories),
            tips: JSON.parse(row.safety_tips)
          })
        } else {
          resolve(null)
        }
      }
    )
  })
}

// 保存目的地数据
export function saveDestinationCache(city, data) {
  db.executeSql(
    'INSERT OR REPLACE INTO destination_data VALUES(?,?,?,?)',
    [city, JSON.stringify(data.pois), JSON.stringify(data.stories), JSON.stringify(data.tips)]
  )
}