import { Controller } from 'egg'

export default class BillController extends Controller {
	/**
	 * add
	 */
	public async add() {
		const { ctx } = this
		const {
			amount,
			type_id,
			type_name,
			pay_type,
			remark = '',
		} = ctx.request.body

		if (!amount || !type_id || !type_name || !pay_type) {
			ctx.body = { code: 500, msg: 'missing params' }
			return
		}
		try {
			const id = ctx.tokenUser.id
			const res = await ctx.service.bill.add({
				amount,
				type_id,
				type_name,
				date: Date.now(),
				pay_type,
				remark,
				user_id: id,
			})
			ctx.body = { code: 200, msg: 'success', data: res }
		} catch (e) {
			ctx.body = { code: 500, msg: 'failed', data: e }
		}
	}

	/**
	 * list
	 */
	public async list() {
		// 获取日期，date，分页数据，类型 type_id 参数
		const { type_id, date_start, date_end } = this.ctx.query
		try {
			const user_id = this.ctx.tokenUser.id
			// 拿到当前用户的账单列表
			const list = await this.ctx.service.bill.list(user_id, type_id, date_start, date_end)
			// 服务端分页逻辑后续在进行考虑如何实现
			this.ctx.body = {
				code: 200,
				msg: 'successful',
				data: list,
			}
		} catch (e) {
			this.ctx.body = {
				code: 500,
				msg: '系统错误',
				data: e,
			}
		}
	}

	public async detail() {
		const { id } = this.ctx.query
		if (!id) {
			this.ctx.body = { code: 500, msg: 'order id not exist', data: null }
			return
		}
		try {
			const res = await this.ctx.service.bill.detail(this.ctx.tokenUser.id, id)
			this.ctx.body = { code: 200, msg: '', data: res }
		} catch (error) {
			this.ctx.body = { code: 500, msg: 'order id not exist', data: error }
		}
	}

	public async update() {
		const {
			id,
			amount,
			type_id,
			type_name,
			pay_type,
			remark = '',
		} = this.ctx.request.body
		if (!amount || !type_id || !type_name || !pay_type) {
			this.ctx.body = { code: 500, msg: 'missing params' }
			return
		}
		try {
			const res = await this.ctx.service.bill.update({
				user_id: this.ctx.tokenUser.id,
				id,
				amount,
				type_id,
				type_name,
				date: Date.now(),
				pay_type,
				remark
			})
			this.ctx.body = { code: 200, msg: 'success', data: res }
		} catch (error) {
			this.ctx.body = { code: 500, msg: 'fail', data: error }
		}
	}

	public async delete() {
		const { id } = this.ctx.request.body
		if (!id) {
			this.ctx.body = { code: 500, msg: 'order id not exist', data: null }
			return
		}
		try {
			const user_id = this.ctx.tokenUser.id
			const res = await this.ctx.service.bill.delete(user_id, id)
			this.ctx.body = { code: 200, msg: 'success', data: res }
		} catch (error) {
			this.ctx.body = { code: 500, msg: 'fail', data: error }
		}
	}
}
