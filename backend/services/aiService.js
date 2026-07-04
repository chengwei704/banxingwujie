const axios = require('axios');

// ---------- 1. 定义不同厂商的调用策略 ----------
const strategies = {
  // 千问策略（保留备用）
  qianwen: {
    url: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    model: 'qwen-plus',
    buildRequestBody: (systemPrompt, userMessage, history) => ({
      model: 'qwen-plus',
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: userMessage }
      ],
      stream: false
    }),
    extractReply: (response) => response.data.choices[0].message.content,
    getHeaders: (apiKey) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    })
  },
  
  // vivo 蓝心九问策略
  vivo: {
    // 完整的 Base URL + 路径
    url: 'https://jiuwen.vivo.com.cn/v1/chat-messages',
    
    // 构建 vivo 专属的请求体
    buildRequestBody: (systemPrompt, userMessage, history, conversationId) => {
      // 把 system prompt 放到 inputs 里
      const inputs = {
        system_prompt: systemPrompt
      };
      
      // 如果有历史对话，可以用 conversation_id 延续
      // 如果没有传 conversation_id，就开启新对话
      const requestBody = {
        inputs: inputs,
        query: userMessage,
        response_mode: 'blocking',  // 阻塞模式，简单可靠
        user: 'tripal-user',        // 固定用户标识，可自定义
      };
      
      // 如果传了 conversation_id，加入请求（实现多轮对话）
      if (conversationId) {
        requestBody.conversation_id = conversationId;
      }
      
      return requestBody;
    },
    
    // 从 vivo 响应中提取回复内容
    extractReply: (response) => {
      // vivo 返回的是 { answer: "回复内容", conversation_id: "xxx", ... }
      return response.data.answer || '抱歉，我没有理解您的问题。';
    },
    
    getHeaders: (apiKey) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    })
  }
};

// ---------- 2. 选择当前生效的策略 ----------
const CURRENT_PROVIDER = process.env.AI_PROVIDER || 'vivo';
const currentStrategy = strategies[CURRENT_PROVIDER];

if (!currentStrategy) {
  throw new Error(`未知的 AI 厂商: ${CURRENT_PROVIDER}`);
}

// ---------- 3. 统一的调用函数 ----------
async function callAI(userMessage, history = [], conversationId = null) {
  const systemPrompt = `你是伴行无界的旅伴"团团"，一只温暖的鸽子。你陪伴用户旅行，回答要简短、有爱、贴心。每次回答控制在50字以内。`;

  try {
    // 读取 API Key
    let apiKey;
    if (CURRENT_PROVIDER === 'vivo') {
      apiKey = process.env.VIVO_API_KEY;
    } else if (CURRENT_PROVIDER === 'qianwen') {
      apiKey = process.env.DASHSCOPE_API_KEY;
    } else {
      apiKey = process.env.DASHSCOPE_API_KEY;
    }

    if (!apiKey) {
      throw new Error(`缺少 ${CURRENT_PROVIDER} 的 API Key，请检查 .env 配置`);
    }

    // 构建请求体（不同厂商不同格式）
    const requestBody = currentStrategy.buildRequestBody(
      systemPrompt, 
      userMessage, 
      history, 
      conversationId
    );

    console.log('📤 请求体:', JSON.stringify(requestBody, null, 2)); // 调试用，可删除

    const response = await axios.post(
      currentStrategy.url,
      requestBody,
      {
        headers: currentStrategy.getHeaders(apiKey),
        timeout: 30000 // 30秒超时
      }
    );

    console.log('📥 响应:', JSON.stringify(response.data, null, 2)); // 调试用，可删除

    // 提取回复（不同厂商不同格式）
    const reply = currentStrategy.extractReply(response);
    
    // 如果 vivo 返回了 conversation_id，一并返回给前端（用于多轮对话）
    const newConversationId = response.data.conversation_id || null;
    
    return {
      reply: reply,
      conversationId: newConversationId
    };

  } catch (err) {
    console.error('AI调用失败:', err.response?.data || err.message);
    throw new Error('AI服务暂时不可用');
  }
}

module.exports = { callAI };