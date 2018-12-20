

const path = require('path')

const Koa = require('koa')
const staticServe = require('koa-static')
const router = require('./routes/index')

const onerror = require('./middleware/onerror.js')

const sessionStore = {}

const app = new Koa()

app.use(onerror)
app.use((ctx, next) => {
    const sessKey = 'sess'
    const id = ctx.cookies.get(sessKey) || uuid()
    
    ctx.session = {
        all () {
            return sessionStore
        },
        get () {
            return sessionStore[id] || {}
        },
        set (key, value) {
            sessionStore[id] = sessionStore[id] || {}
            sessionStore[id][key] = value
            ctx.cookies.set(sessKey, id)
        }
    }

    return next()
})
app.use(staticServe(path.join(__dirname, './dist')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(7030, function () {
    console.log('Listen on http://127.0.0.1:7030')
})

function uuid () {
    return Math.random().toString(32).substr(2)
}