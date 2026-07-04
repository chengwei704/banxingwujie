import { http } from '../common/http.js'

export const cloudAI = {
  async chat(userMessage, memoryContext = '') {
    const systemPrompt = `你是"团团"，一个温暖的旅行陪伴助手。
用户的情感记忆摘要：${memoryContext}
请根据用户当前状态给予陪伴式回应，不超过100字。`

    const res = await http.post('/api/ai/chat', {
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    })
    return res.data.reply
  },
}