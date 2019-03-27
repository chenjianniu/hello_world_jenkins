const Koa = require('koa')
const app = new Koa()
const os = require('os')


app.use(ctx=>{
    ctx.body = 'hello world'
})
console.log('启动成功 1')
app.listen(3001,(error)=>{
	console.log(error || '成功 2')
	console.log('IP => ',os.networkInterfaces())
})

