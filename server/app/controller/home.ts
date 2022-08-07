import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    // 将 title 传入 index.html
    await ctx.render('index.html', { title: '我是尼克陈' })
  }
}
