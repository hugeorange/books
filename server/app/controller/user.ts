import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async register() {
    const { ctx } = this
    const { username, password } = ctx.request.body

    if (!username || !password) {
        ctx.body = { code: 500, msg: '账号和密码不能为空', data: null }
        return 
    }

    const user = await ctx.service.user.getUserByName(username)
    if (user && user.length) {
      // @ts-ignore
      const flag = user.some(v => v.username === username)
      // 由于 egg-mysql 方法有问题所以暂时这样替代
      if (flag) {
        ctx.body = {
          code: 500,
          msg: '账户名已被注册，请重新输入',
          data: null
        }
        return
      }
    }

    const res = await ctx.service.user.register({
      username,
      password,
      ctime: Date.now(),
      signature: '',
      avatar: ''
    })

     ctx.body = {
      code: !!res.insertId ? 200 : 500,
      msg: !!res.insertId ? 'success' : 'fail',
      data: res
    }
  }
}
