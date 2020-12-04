import { Entity, Column, PrimaryGeneratedColumn ,OneToMany} from 'typeorm';
import { Action } from './action.entity';
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, nullable: true})
  label: string;

  @Column({ type: 'text', nullable: true})
  description: string;

  @Column({
    nullable:true
  })
  icon: string;

  @Column({type:'double',default:0})
  price: number;

  @OneToMany((type) => Action, (action) => action.gid) // note: we will create author property in the Photo class below
  restaurant: Action[];
}
