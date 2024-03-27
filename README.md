
基于 NuxtJS 的导航网站，正在开发中...

## TODO

- 增加暗黑主题
- 适配移动端
- 支持纯静态化部署
- 添加初始页面

## 使用 Vercel 免费部署基于 NuxtJS 的全栈式导航网站

nav 是我以前为收集网址做的一个导航网站，主要是关于前端的，最近用 NuxtJS 重写并重新部署。如果你只想要一个免费的，有后台管理的导航网站，那么你找对了地方。要达到这个目的，你需要两个东西：一个前后端应用，一个部署环境和数据库

## 前后端一体的应用

方式千千万，这里介绍下我重构的网站，有几个特性：

- 适配PC端和移动端

- 支持亮色和暗色主题

- 搜索引擎友好

- 带后台管理功能

- 继承访问分析功能

## 部署环境和数据库

你可以使用自己的服务器和数据库，也可以白嫖一些云平台的免费服务。这里主要介绍下，vercel 这个对前端开发者非常友好的云平台。[vercel]() 是一个提供web应用部署和托管的云平台，不仅可以部署像 vue 这样的纯静态应用，也可以部署像 NuxtJS 这样的 serverless 函数。甚至，vercel 还提供了免费的 postgres 数据库(尽管只有 250 M，但个人基本够用)。这种对开发者如此友好的云平台，完成可以支持我们部署一个免费的、前端端都有的web应用。

## 部署过程

基于以上内容，你不需要懂 NuxtJS，甚至不需要懂代码，也可以免费白嫖一个导航网站。接下来，将以新手视角，带你完成所有步骤。

##

package import var const type struct interface map func return chan select defer go for range if else continue break while case default fallthrough goto