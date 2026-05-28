// 蓝心3B 快应用 SDK 调用
// 注意：需在 manifest.json 声明 AI 权限
import ai from '@blueos.ai.inference' // vivo 蓝心推理 SDK

export const localAI = {
  _session: null,

  async _getSession() {
    if (this._session) return this._session
    this._session = await ai.createSession({
      model: 'BlueLM-3B-Chat', // 蓝心3B 模型名
      maxTokens: 512,
    })
    return this._session
  },

  async chat(userMessage, memoryContext = '') {
    const session = await this._getSession()

    const prompt = `<system>你是"团团"，温暖的旅行陪伴助手。用户记忆：${memoryContext}</system>
<human>${userMessage}</human>
<assistant>`

    const result = await session.run({
      prompt,
      temperature: 0.7,
      topP: 0.9,
    })

    return result.text?.trim() ?? '团团在想想……'
  },
}