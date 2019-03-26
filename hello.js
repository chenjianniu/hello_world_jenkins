const Koa = require('koa')
const app = new Koa()


app.use(ctx=>{
    ctx.body = 'hello world'
})
console.log('启动成功 1')
app.listen(3001,()=>{
	console.log('启动成功 2')
})

