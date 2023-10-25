# 技术栈
Vue 3 + Vite
# 安装依赖包
cd到项目根目录,执行下面的命令
```bash
npm install
```
# 启动项目
```bash
npm run dev
```
# 主要功能描述
1. 主要页面：`/` 主页 `/login` 登陆注册页 `/userList` 用户列表页
2. 注册：天蝎账号+密码，账号信息存入浏览器本地LocalStorage
3. 登陆：从浏览器本地LocalStorage中取出已经注册的账号，进行账号密码的校验，通过则跳转用户列表页
4. 用户列表：展示所有注册用户的账号密码