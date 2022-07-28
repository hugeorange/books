import { Service } from 'egg'

/**
 * Test Service
 */
export default class HomeService extends Service {
  async user() {
    const QUERY_sTR = 'id, name'
    const sql = `select ${QUERY_sTR} from list`
    try {
      const res = await this.app.mysql.query(sql)
      return res
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async addUser(name: string) {
    try {
      const res = await this.app.mysql.insert('list', { name })
      return res
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async editUser(id: number, name: string) {
    try {
      const res = await this.app.mysql.update(
        'list',
        { name },
        {
          where: { id },
        },
      )
      return res
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async deleteUser(id: number) {
    try {
      const res = await this.app.mysql.delete('list', { id })
      return res
    } catch (e) {
      console.log(e)
      return null
    }
  }
}
