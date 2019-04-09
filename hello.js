const Koa = require('koa')
const app = new Koa()

app.use(ctx=>{
    ctx.body = 'hello world jenkins'
})

app.listen(3001,(error)=>{
  console.log(error || '启动成功')
})

