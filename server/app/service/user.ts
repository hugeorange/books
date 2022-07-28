import { Service } from "egg";

export default class UserService extends Service {
	// 通过用户名获取用户信息
	async getUserByName(username: string) {
		try {
			// SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;
			// @ts-ignore egg-mysql 好像没有 get 方法此路不通
			// const res = await this.app.mysql.get('user', { username })
			// const sql = `select * from user where username=${username}`
			// const res = await this.app.mysql.query(sql)
			const res = await this.app.mysql.select('user', { where: {username} })
			return res
		} catch (e) {
			console.log(e)
			return null
		}
	}
	// 注册
	async register(params) {
		try {
			const res = await this.app.mysql.insert('user', params)
			return res
		} catch(e) {
			console.log(e)
			return e
		}
	}
}