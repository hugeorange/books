import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, middleware } = app
  console.log('secret===>', app.config.jwt.secret)
  const _jwt = middleware.jwtErr(app.config.jwt.secret)

  router.get('/', controller.home.index)

  // user
  router.post('/api/user/register', controller.user.register)
  router.post('/api/user/login', controller.user.login)
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo)
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo)

  // upload api
  router.post('/api/upload', controller.upload.upload)

  // test token  ===> 放入第二个参数作为中间件过滤项
  router.get('/api/user/test', _jwt, controller.user.test);

}
