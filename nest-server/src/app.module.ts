import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BillModule } from './bill/bill.module';
import { Bill } from './bill/bill.model'; // 定义的User模型，后面我们定义

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // 数据库类型，sequelize支持  Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 且对数据库版本有要求。可移步官网查看
      host: '101.132.103.126', // 主机ip
      port: 3306, // 数据库端口 mysql默认在3306端口
      username: 'cost', // 数据库用户名
      password: 'rKdMekwCKYh5dpJk', // 数据库密码
      database: 'cost', // 具体数据库
      //   models: [Bill], // 要开始使用`User`模型，我们需要通过将其插入到`forRoot()`方法选项的`models`数组中来让`Sequelize`知道它的存在。
      autoLoadModels: true, // 自动加载模型，不必在单独声明
    }),
    BillModule,
  ],
})
export class AppModule {}
