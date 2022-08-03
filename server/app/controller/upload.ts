import { Controller } from 'egg'
import dayjs from 'dayjs'
import mkdirp from 'mkdirp'
import path from 'path'
import fs from 'fs'

export default class UploadController extends Controller {
	async upload() {
		// 前端上传的文件，若上传多个则需要遍历
		const file = this.ctx.request.files[0]
		// 声明存放资源的路径
		let uploadDir = ''
		try {
			const f = fs.readFileSync(file.filepath)
			const day = dayjs().format('YYYY-MM-DD')
			// 创建图片路径
			const dir = path.join(this.config.uploadDir, day)
			const date = Date.now()
			await mkdirp(dir) // 不存在就创建目录
			// 返回图片保存路径
			uploadDir = path.join(dir, date + path.extname(file.filename))
			// 写入文件夹
			fs.writeFileSync(uploadDir, f)
		} finally {
			// 清除临时文件
			this.ctx.cleanupRequestFiles()
		}
		console.log('uploadir--->', uploadDir)
		this.ctx.body = {
			code: 200,
			msg: 'success',
			data: uploadDir.replace(/app/g, '')
		}
	}
}
