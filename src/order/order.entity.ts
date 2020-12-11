import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn} from 'typeorm';
// import { goods } from './goods.entity'

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: number;

    @Column({ length: 50 })
    content: string;


    @Column('double')
    price: number;

    @Column('int')
    count: number;

    @CreateDateColumn()
    createdAt: Date;
}
