import { Service } from "egg";

export default class UserService extends Service {
	// 通过用户名获取用户信息
	async getUserByName(username: string) {
		try {
			// sql 写法 SELECT * FROM `juejin-cost`.`user` WHERE username = 'nick' LIMIT 0, 1;
			// egg-mysql 好像没有 get 方法此路不通
			// const res = await this.app.mysql.get('user', { username })
			// const sql = `select * from user where username=${username}`
			// const res = await this.app.mysql.query(sql)
			const res = await this.app.mysql.select('user',
				{
					where: { username },
					limit: 1
				})
			return res && res[0]
		} catch (e) {
			return e
		}
	}
	// 注册
	async register(params) {
		try {
			const res = await this.app.mysql.insert('user', params)
			return res
		} catch (e) {
			return e
		}
	}

	// 修改用户信息
	async editUserInfo(params) {
		try {
			const res = await this.app.mysql.update('user', { ...params }, { id: params.id })
			return res
		} catch (error) {
			console.log('edituserinfo--->', error)
			return error
		}
	}
}