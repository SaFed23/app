const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./src/routes/router.js')
const { ui } = require("swagger2-koa");

const apiSpec = require('./apiSpec');

const app = new Koa();
app.use(bodyParser());

app.use(ui(apiSpec, "/swagger"));

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
})

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(router.routes());

app.on('error', (err, ctx) => {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    console.log(ctx.body);
});

app.listen(3000);