import store from '../store/index.js'
import { cloudAI } from './cloudAI.js'
import { localAI } from './localAI.js'
import { emotionMemory } from './emotionMemory.js'

export const aiRouter = {
  async send(userMessage) {
    // 1. 读取情感记忆，注入上下文
    const memory = await emotionMemory.getSummary()

    // 2. 路由选择
    const useCloud = store.isOnline && !store.isPowerSaving
    const responder = useCloud ? cloudAI : localAI

    try {
      const reply = await responder.chat(userMessage, memory)

      // 3. 更新情感记忆
      await emotionMemory.record(userMessage, reply)

      return {
        text: reply,
        source: useCloud ? 'cloud' : 'local', // 供 UI 显示来源角标
      }
    } catch (err) {
      // 4. 降级：云端失败 → 自动切本地
      if (useCloud) {
        console.warn('[aiRouter] 云端失败，降级到本地模型', err)
        const reply = await localAI.chat(userMessage, memory)
        return { text: reply, source: 'local_fallback' }
      }
      throw err
    }
  },
}