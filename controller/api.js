const user = require('../service/user.js')

module.exports = {
    getUserInfo: function (ctx) {
        ctx.session.set('user', {
            nickname: ctx.query.user
        })
        // 1. 请求参数校验
        ctx.body = '用户写入成功'
        // ctx.body = user.getUserInfo()
    }
}