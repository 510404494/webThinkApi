import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Goods } from '../database/entity/goods.entity';
import { http } from 'src/common/http';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly userRepository: Repository<Goods>,
    ) { }
    async findAll() {
        const res = new http();
        let list = await this.userRepository.find();
        res.data = list
        return res;
    }
    async findOne(query): Promise<Goods> {
        let list = await this.userRepository.findOne({ id: query.id });
        return list;
    }

    async addOne(object:any): Promise<String> {
        console.log(object);
        
        let list = await this.userRepository.insert(object);
        console.log(list);
        // if (list) {
        //     return '新增成功!';
        // } else {
        //     return '新增失败!';
        // }
        return '新增成功!';
    }
    async updateOne(goods): Promise<String> {
        let list = await this.userRepository.update({ id: goods.id }, goods);
        if (list) {
            return '新增成功!';
        } else {
            return '新增失败!';
        }
    }
    async delOne(query): Promise<String> {
        let list = await this.userRepository.delete({ id: query.id });
        if (list) {
            return '删除成功!';
        } else {
            return '删除失败!';
        }
    }

}
