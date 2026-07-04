const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

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