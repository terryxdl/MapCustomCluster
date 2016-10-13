
###简介
前端工程

###安装使用
 
1.下载到本地;
2.进入项目目录;
3.npm install
3-1 如果npm install 报错,那就
    npm install rimraf --save-dev
    npm install webpack --save-dev
4.npm run start:dev ,启动开发者HOT模式;
5.npm run start:server ,启动生成环境服务端渲染模式；

###工程目录结构说明

MapCustomCluster
 - app
    - actions ,Redux actions 目录
    - bussiness,
    - common ,常用方法函数
    - components ,展示组件
    - constants ,常量
    - container ,容器组件
    - reducers, Redux Reducers目录
    - routes,路由相关
    - stores,Redux Store相关
 - node_modules
 - public
 