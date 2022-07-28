import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  // router.get('/user', controller.home.user)
  // router.post('/add_user', controller.home.addUser)
  // router.post('/edit_user', controller.home.editUser)
  // router.post('/delete_user', controller.home.deleteUser)

  // user
  router.post('/api/user/register', controller.user.register)
}
