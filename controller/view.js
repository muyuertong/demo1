const fs = require('fs')
const path = require('path')

module.exports = {
    home: function() {
        fs.readFileSync(path.join(__dirname, '../dist/index.html'))
    },
    userProfile (ctx) {
        ctx.body = ctx.session.get()['user'] || '用户未找到'
        // const _user = user.getUserInfo()
        // ctx.body = `<h1>${_user.nickname}</h1>`
    },
    notFound: function (ctx) {
        ctx.body = '这是 404 页面'
    }
}