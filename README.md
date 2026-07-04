# 🕊️ TripPal 伴行无界 · 后端服务

> 基于 Node.js + Express，已对接 vivo 蓝心九问大模型，为快应用提供 AI 问答与预加载数据接口。

---

## 🚀 1. 快速启动（给前端/新同学）

### 环境要求
- Node.js >= 18.x
- npm >= 8.x

### 克隆代码并安装依赖
```bash
git clone https://github.com/chengwei704/banxingwujie.git
cd banxingwujie
npm install
```

### ⚠️ 配置密钥（必须！）
项目代码**不包含** API 密钥。请在 `backend/` 目录下手动创建 `.env` 文件：

1. 进入后端目录：
   ```bash
   cd backend
   ```
2. 创建 `.env` 文件（Windows 用 `type nul > .env`，Mac/Linux 用 `touch .env`）。
3. 在 `.env` 中写入以下内容（**替换成你实际申请的 vivo API Key**）：
   ```env
   AI_PROVIDER=vivo
   VIVO_API_KEY=app-你的真实密钥
   PORT=3000
   ```

### 启动服务
回到项目根目录，执行：
```bash
node backend/server.js
```

看到以下提示即表示启动成功：
```
✅ 后端已启动: http://localhost:3000
📱 手机访问地址: http://192.168.x.x:3000
```

### 测试接口

#### 测试 AI 问答：
打开新终端（保持服务运行），执行：
```bash
curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d "{\"msg\":\"推荐一个上海景点\"}"
```

#### 测试预加载数据：
在浏览器访问：
```
http://localhost:3000/api/preload?city=北京
```

---

## 📡 2. 接口说明（给前端联调）

> **Base URL**：`http://[你的电脑IP]:3000`（例如 `http://192.168.1.100:3000`）  
> ⚠️ 真机调试时**必须使用局域网 IP**，不能用 `localhost`。

### ① AI 智能问答
| 项目 | 说明 |
| :--- | :--- |
| **接口** | `POST /api/chat` |
| **请求体** | `{ "msg": "用户问题", "conversation_id": "可选" }` |
| **返回** | `{ "code": 0, "data": { "reply": "AI回答", "conversation_id": "会话ID" } }` |

**请求示例（curl）：**
```bash
curl -X POST http://192.168.1.100:3000/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"msg\": \"推荐一个上海景点\"}"
```

---

### ② 预加载数据
| 项目 | 说明 |
| :--- | :--- |
| **接口** | `GET /api/preload` |
| **参数** | `city`（可选，默认上海，如 `?city=北京`） |
| **返回** | `{ "code": 0, "data": { "city": "北京", "attractions": [...], "food": [...], "tips": [...] } }` |

**测试方法**：直接在浏览器访问  
`http://192.168.1.100:3000/api/preload?city=杭州`

---

## 🗂️ 3. 目录结构（开发参考）

```
triapl-backend/
├── backend/            # 🟢 后端核心代码
│   ├── .env            # 环境变量（不提交Git）
│   ├── server.js       # 入口文件
│   ├── routes/         # 路由层
│   ├── services/       # 业务逻辑（AI调用）
│   └── data/           # 静态JSON数据
├── src/                # 🔵 前端快应用源码（不动）
└── node_modules/       # 依赖包
```

---

## ❓ 4. 常见问题

| 问题 | 解决方法 |
| :--- | :--- |
| **手机无法访问** | 1. 手机和电脑连同一个 WiFi。<br>2. 检查 Windows 防火墙是否放行 3000 端口。 |
| **IP 地址变了** | 切换 WiFi 或重启电脑后，用 `ipconfig`(Win) 或 `ifconfig`(Mac) 重新查看。 |
| **AI 返回“服务不可用”** | 检查 `backend/.env` 中的 `VIVO_API_KEY` 是否有效。 |
| **端口 3000 被占用** | 修改 `.env` 中的 `PORT=3001`，重启服务。 |

---

## 📌 5. 联系开发者

如有问题或接口变更，请联系后端负责人 @chengwei704。