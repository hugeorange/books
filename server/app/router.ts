import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, middleware } = app
  const _jwt = middleware.jwtErr(app.config.jwt.secret)

  router.get('/', controller.home.index)

  // user
  router.post('/api/user/register', controller.user.register)
  router.post('/api/user/login', controller.user.login)
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo)
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo)

  // bill
  router.post('/api/bill/add', _jwt, controller.bill.add)
  router.get('/api/bill/list', _jwt, controller.bill.list)
  router.get('/api/bill/detail', _jwt, controller.bill.detail)
  router.post('/api/bill/update', _jwt, controller.bill.update)
  router.post('/api/bill/delete', _jwt, controller.bill.delete)

  // upload api
  router.post('/api/upload', controller.upload.upload)

  // test token  ===> 放入第二个参数作为中间件过滤项
  router.get('/api/user/test', _jwt, controller.user.test);

}
