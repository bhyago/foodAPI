/* eslint-disable camelcase */
import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('foodbase')
class Food {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  amount: string;

  @Column()
  weight: string;

  @Column()
  taste: string;

  @Column()
  texture: string;

  @Column()
  expiredDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Food;
