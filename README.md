# webThinkApi
nestjs+mysql+typeorm+swagger-ui-express

v1.01版本更新内容
1.http返回简单整理
2.部署服务器相关
3.双表接口


dist 整理

技术框架 Typescript graphql mysql postgres typeorm 
typegraphql

pm2 运行
npm install -g pm2  安装
pm2 start .\dist\main.js 运行
pm2 stop 0 停止
pm2 restart 0 重启
pm2 monit 追踪
pm2 list 查看
┌─────┬─────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name    │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ main    │ default     │ 0.0.1   │ fork    │ 0        │ 0      │ 0    │ stopped   │ 0%       │ 0b       │ admin    │ disabled │
└─────┴─────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

v1.02版本更新需求

用户注册：

POST
    user_register
    username , password

用户登录
POST
    user_login
    username ， password

商品列表

POST
    product_find
    currentPage

订单列表(需要登录)

POST
    order_find
    currentPage

订单提交

POST
    order_add
    res_id
    product_str , id ,num
    count
    price

