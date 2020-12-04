import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { goods } from './goods.entity'

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gid: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  icon: string;

  @Column('double')
  price: number;
}
