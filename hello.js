const Koa = require('koa')
const app = new Koa()

console.log('启动成功')
app.use(ctx=>{
    ctx.body = 'hello world'
})

app.listen(3001)

