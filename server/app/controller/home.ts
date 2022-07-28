import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    // 将 title 传入 index.html
    await ctx.render('index.html', { title: '我是尼克陈' })
  }

  public async user() {
    const { ctx } = this
    const res = await ctx.service.home.user()
    ctx.body = res
  }

  public async addUser() {
    const { ctx } = this
    const name = ctx.request.body.name
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    try {
      const res = await ctx.service.home.addUser(name)
      ctx.body = { code: 200, msg: 'success', data: res }
    } catch (e) {
      ctx.body = { code: 500, msg: e, data: null }
    }
  }

  public async editUser() {
    const { ctx } = this
    const { id, name } = ctx.request.body
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    try {
      const res = await ctx.service.home.editUser(id, name)
      ctx.body = { code: 200, msg: 'success', data: res }
    } catch (e) {
      ctx.body = { code: 500, msg: e, data: null }
    }
  }

  public async deleteUser() {
    const { ctx } = this
    const { id } = ctx.request.body
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    try {
      const res = await ctx.service.home.deleteUser(id)
      ctx.body = { code: 200, msg: 'success', data: res }
    } catch (e) {
      ctx.body = { code: 500, msg: e, data: null }
    }
  }
}
