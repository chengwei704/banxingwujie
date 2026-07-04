const path = require('path');
const fs = require('fs');

// ----- 调试：直接读取 .env 文件内容 -----
const envPath = path.join(__dirname, '.env');
console.log('📂 尝试读取 .env 文件路径:', envPath);

try {
  const fileContent = fs.readFileSync(envPath, 'utf8');
  console.log('📄 .env 文件内容（原始）:\n', fileContent);
  console.log('📄 文件内容长度:', fileContent.length);
} catch (err) {
  console.error('❌ 读取 .env 文件失败:', err.message);
}
// ----- 调试结束 -----

// 加载 dotenv
require('dotenv').config({ path: envPath });

console.log('🔑 VIVO_API_KEY:', process.env.VIVO_API_KEY);
console.log('🔑 AI_PROVIDER:', process.env.AI_PROVIDER);

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('TripPal 后端服务运行中 🕊️');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ 后端已启动: http://localhost:${PORT}`);
  console.log(`📱 手机访问地址: http://<你的电脑IP>:${PORT}`);
});