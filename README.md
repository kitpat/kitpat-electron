# kitpat-electron

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/kitpat/kitpat-electron.git
cd kitpat-electron
npm install
```
## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Protobuf

```bash
npm install ts-proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. \
--ts_proto_opt=esModuleInterop=true \
src/proto/msg.proto
```

Electron结合React和TypeScript进行开发
https://www.cnblogs.com/bleaka/p/16184636.html

npx create-react-app electron-react-typescript-demo --template typescript
npm install --save-dev electron

问题：Electron 项目搭建采坑 RequestError: connect ETIMEDOUT
https://blog.csdn.net/weixin_42728767/article/details/122568179
问题：Electron下载缓慢问题或失败
文档：https://juejin.cn/post/6949529548706807815
.npmrc文件中配置 electron_mirror="https://npm.taobao.org/mirrors/electron/" 

