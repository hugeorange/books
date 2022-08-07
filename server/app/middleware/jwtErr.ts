export default (secret: string) => {
	return async function jwtErr(ctx, next) {
		// 没有 token 返回 null
		const token = ctx.request.header.authorization
		let err = null
		if (token !== 'null' && token) {
			try {
				const decode = ctx.app.jwt.verify(token, secret)
				ctx.tokenUser = decode
				await next()
				return
			} catch (e) {
				err = e
			}
		}
		ctx.status = 200
		const data = err || { msg: 'token validate failed' }
		ctx.body = { code: 401, data }
	}
}
