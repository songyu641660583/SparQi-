# 前端框架
vue3 + Vite

# 项目描述
这是一个基于vue3 + Vite的web项目，首页的动效采用css3的@keyframes，详情可看css文件中有@keyframes标识

# 项目结构

  ```
  ├─ public(公共资源)无需改动
  ├─ .gitignore(git 忽略文件)无需改动
  ├─ index.html(入口html文件)无需改动
  ├─ package(包依赖文件)无需改动
  ├─ tsconfig.app.json/ tsconfig.json/tsconfig.node.json(tsconfig配置文件)无需改动
  ├─ vite.config.ts(vite配置文件)无需改动
  ├─ src(页面代码)
  ├─── css(模块样式) 对应每个模块拆分出的样式文件
  ├─── assets(静态资源图片)
  ├─── css(模块样式)
  ├─── App.vue(主页面)
  ├─── main.ts(入口文件)
  ├─── utils(工具)
  ├───── language(多语言配置模块)
  ├────── index.ts (入口文件)
  ├────── chinese.ts (中文配置文件)
  ├────── english.ts (英文配置文件)
  ```
# 新增其他语言配置方法
1、在language模块下新增.ts结尾的文件，例如french.ts，把english.ts里面的内容复制过来，然后修改里面的内容即可 ,默认配置了中文
2、修改在App.vue文件中 languageOptions 和 languateType
```
const languageOptions = [
  {
    label: '中文',
    key: 'chinese'
  },
  {
    label: 'English',
    key: 'english'
  },
  {
    label: '法语',
    key: 'french'
  },
]
type languateType = 'chinese' | 'english' | 'french'


# 本地运行命令
npm run dev

# 打包命令
npm run build

