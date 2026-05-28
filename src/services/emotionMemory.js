import { storage } from '../common/storage.js'

const TABLE = 'emotion_memory'
const MAX_RECORDS = 50

export const emotionMemory = {
  async record(userMsg, aiReply) {
    const history = (await storage.dbGet(TABLE, 'history')) ?? []
    history.push({
      ts: Date.now(),
      user: userMsg,
      ai: aiReply,
    })
    // 只保留最近 50 条
    if (history.length > MAX_RECORDS) history.splice(0, history.length - MAX_RECORDS)
    await storage.dbSet(TABLE, 'history', history)
  },

  async getSummary() {
    const history = (await storage.dbGet(TABLE, 'history')) ?? []
    if (!history.length) return '暂无记录'
    // 取最近 5 条拼简单摘要（可替换为摘要模型）
    return history
      .slice(-5)
      .map(r => `用户说：${r.user}；团团回：${r.ai}`)
      .join('\n')
  },

  async clear() {
    await storage.dbSet(TABLE, 'history', [])
  },
}