import { Service } from 'egg'

export default class BillService extends Service {
	async add(params) {
		const res = await this.app.mysql.insert('bill', params)
		return res
	}

	// 获取账单列表
	async list(user_id, type_id, date_start, date_end) {
		const QUERY_STR = 'id, pay_type, amount, date, type_id, type_name, remark'
		const haveTypeId = type_id ? ` AND type_id = ${type_id}` : ''
		const haveDate = date_start && date_end ? ` AND date >= ${date_start} AND date <= ${date_end}` : ''
		const sql = `select ${QUERY_STR} from bill where user_id = ${user_id}${haveTypeId}${haveDate}`
		const res = await this.app.mysql.query(sql)
		// egg-mysql 的 where 语句不知道咋写 >= <=
		// const res = await this.app.mysql.select('bill', {
		// 	where: { user_id, type_id, date },
		// 	columns: ['id', 'pay_type', 'amount', 'date', 'type_id', 'type_name', 'remark'],
		// 	// limit: 5 分页细节稍后在研究， limit 及 offset
		// })
		return res
	}

	// 获取指定账单详情
	async detail(user_id, id) {
		const res = await this.app.mysql.select('bill', { where: { user_id, id } })
		return res
	}

	// 更新指定账单
	async update(params) {
		const { user_id, id } = params
		const res = await this.app.mysql.update('bill', params, { where: { user_id, id } })
		return res
	}

	// delete
	async delete(user_id, id) {
		const res = await this.app.mysql.delete('bill', { user_id, id })
		return res
	}
}
