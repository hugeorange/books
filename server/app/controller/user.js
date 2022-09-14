'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    // 将 title 传入 index.html
    await ctx.render('index.html', { title: '我是尼克陈' });
  }
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    if (!username || !password) {
      ctx.body = { code: 500, msg: '账号和密码不能为空', data: null };
      return;
    }

    const user = await ctx.service.user.getUserByName(username);

    if (user) {
      ctx.body = {
        code: 500,
        msg: '账户名已被注册，请重新输入',
        data: null,
      };
      return;
    }
    try {
      const res = await ctx.service.user.register({
        username,
        password,
        ctime: Date.now(),
        signature: '',
        avatar: '',
      });
      ctx.body = { code: 200, msg: 'success', data: res };
    } catch (error) {
      ctx.body = { code: 500, msg: 'fail', data: error };
    }
  }


  async login() {
    const { username, password } = this.ctx.request.body;
    try {
      const user = await this.ctx.service.user.getUserByName(username);
      if (!user) {
        this.ctx.body = { code: 500, msg: '账号不存在', data: null };
        return;
      }
      if (user && password !== user.password) {
        this.ctx.body = { code: 500, msg: '账号或密码错误', data: null };
        return;
      }
      console.log('user-->', user, this.app.config.jwt.secret);
      // 当信息验证通过后，生成 token 加盐
      // app.jwt.sign 方法接受两个参数
      // 1. 对象，对象内是需要加密的内容（username，id）
      // 2. 加密字符串  config 里面配置的固定字符串
      const token = this.app.jwt.sign({
        id: user.id,
        username: user.username,
        // exp: 1659446393, // 有效期 24h, 这种方式设置无效
      }, this.app.config.jwt.secret, {
        expiresIn: '1d', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
      });
      this.ctx.body = { code: 200, msg: '登陆成功', data: token };
    } catch (error) {
      this.ctx.body = { code: 500, msg: 'fail', data: error };
    }
  }

  async getUserInfo() {
    const { ctx } = this;
    try {
      const userInfo = await ctx.service.user.getUserByName(ctx.tokenUser.username);
      ctx.body = {
        code: 200,
        msg: 'success',
        data: { ...userInfo, password: undefined },
      };
    } catch (error) {
      ctx.body = {
        code: 200,
        msg: 'fail',
        data: error,
      };
    }
  }

  async editUserInfo() {
    const { ctx } = this;
    const { signature, avatar } = ctx.request.body;
    try {
      const userInfo = await ctx.service.user.getUserByName(ctx.tokenUser.username);
      const res = await ctx.service.user.editUserInfo({ ...userInfo, signature, avatar });
      ctx.body = {
        code: 200,
        msg: 'success',
        data: res,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: 'fail',
        data: error,
      };
    }
  }

  /**
   * test  测试 token.
   * authorization 上的 Bearer 是什么
   */
  async test() {
    this.ctx.body = { code: 200, msg: 'successful', data: this.ctx.tokenUser };
  }
}

module.exports = UserController;
