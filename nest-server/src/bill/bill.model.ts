import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'bill', //  指定表名。默认会使用模型名（User）生成sql。
  timestamps: false, // 默认true。true时会带createdAt、updatedAt字段查表
})
export class Bill extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  pay_type: number;

  @Column
  amount: string;

  @Column
  type_id: number;

  @Column
  user_id: number;

  @Column
  type_name: string;

  @Column
  date: Date;

  @Column
  remark: string;
}
