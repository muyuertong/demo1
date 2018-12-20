module.exports = async function (ctx, next) {
    try {
        await next()
    } catch (err) {
        ctx.body = {
            code: 500,
            message: err.message
        }
    }
}