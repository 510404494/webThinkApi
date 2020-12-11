import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Goods } from './goods.entity';
import { http } from 'src/common/http';
import { Action } from './action.entity';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly userRepository: Repository<Goods>,
    ) { }
    async findAll() : Promise<any>{
        const res = new http();
        res.resultCode = 200;
        let list = await this.userRepository.find();
        for (let i = 0; i < list.length; i++) {
            const good:any = list[i];
            const actionlist = await getConnection()
                .createQueryBuilder(Action, "action")
                .getOne();
            good.restaurant = actionlist;
            
        }
        res.data = {
            list: list
        }
        return res;
    }
    async findOne(query): Promise<Goods> {
        let list = await this.userRepository.findOne({ id: query.id });
        return list;
    }

    async addOne(object:any): Promise<any> {
        console.log(object);
        const res = new http();
        let info = await this.userRepository.insert(object);
        res.code=200;
        res.data = [];
        if (info) {
            res.message = '新增成功!';
        } else {
            res.message =  '新增失败!';
        }
        return res;
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
