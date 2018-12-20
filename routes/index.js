const Router = require('koa-router')

const view = require('../controller/view.js')
const api = require('../controller/api.js')

const router = new Router()

router.get('/', view.home)

router.get('/user/profile', view.userProfile)

router.get('/api/user/info', api.getUserInfo)

router.get('/api/getIt', async (ctx)=>{
    ctx.response.set("Content-Type", "application/json")
    ctx.status = 200;
        ctx.body = {
            data: '你是'
        };
})

router.get('*', view.notFound)

module.exports = router