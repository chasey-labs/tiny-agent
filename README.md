# tiny-agent

菜西的 TypeScript 学习项目：从最基础的 TS，一路写到能在本地跑起来的 Agent 对话。

起点是 DeepSeek 开源的 [chat-demo](https://github.com/deepseek-ai/chat-demo)：一个纯前端的聊天应用，浏览器直接请求 DeepSeek 的 Anthropic 兼容接口。它代码不多、写法规范，适合拿来读，也适合在上面一步步加东西。

## 路线

| 阶段 | 做什么 | 学到什么 |
| --- | --- | --- |
| 1. TS 基础 | 读 chat-demo 的真实代码，改小功能 | 类型、函数、模块、Promise / async、async generator |
| 2. Chat 对话 | 加一个自己的 server：藏 Key、流式转发、存会话 | 前后端分工、HTTP / SSE、共享类型 |
| 3. 本地 Agent | 让模型能调用本地工具（读文件、跑命令），每一步要我确认 | 工具调用循环、状态管理、权限边界 |

每一关都留 TODO 和测试，自己写到测试变绿为止。具体关卡在规划中，定下来后放进 `docs/`。

## 先读哪里

1. `src/services/api/sse.ts`：手写的流式解析，练 Promise 和 async generator。
2. `src/services/api/client.ts`：怎么把一次请求包成可以 `for await` 的数据流。
3. `src/services/chat/branches.ts`：消息分支树，练类型和纯函数。
4. `src/services/chat/store.ts`：zustand 状态管理，最后再啃。

## 运行

需要 Node.js 22.12+ 和 pnpm。

```sh
pnpm install
pnpm dev        # 打开 http://localhost:8090，在设置里填 DeepSeek API Key
```

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建到 `dist/` |
| `pnpm type` | TypeScript 类型检查 |
| `pnpm lint` | oxlint 检查 |
| `pnpm format` | oxfmt 格式化 |

## 来源

Fork 自 [deepseek-ai/chat-demo](https://github.com/deepseek-ai/chat-demo)（MIT），原版说明见 [docs/chat-demo-README.zh-CN.md](docs/chat-demo-README.zh-CN.md)。同步上游：

```sh
git fetch upstream && git merge upstream/main
```
