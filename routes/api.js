const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const preloadData = require('../data/preload.json');

// 在线问答接口
router.post('/chat', async (req, res) => {
  const { msg, history, conversation_id } = req.body;
  
  if (!msg) {
    return res.status(400).json({ code: -1, message: '消息不能为空' });
  }

  try {
    const result = await aiService.callAI(msg, history || [], conversation_id || null);
    res.json({ 
      code: 0, 
      data: { 
        reply: result.reply,
        conversation_id: result.conversationId  // 返回给前端，下次对话时带上
      } 
    });
  } catch (err) {
    res.status(500).json({ code: -1, message: err.message });
  }
});

// 预加载数据接口（不用改）
router.get('/preload', (req, res) => {
  const city = req.query.city || '上海';
  const data = preloadData[city] || preloadData['上海'];
  res.json({ code: 0, data: { city, ...data } });
});

module.exports = router;