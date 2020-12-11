import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { http } from 'src/common/http';
import { User } from './user.entity';
import { Repository, getConnection, createQueryBuilder } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    async findAll(): Promise<any> {
        const res = new http();
        res.resultCode = 200;
        let list = await this.userRepository.find();
        res.data = {
            list: list
        }
        return res;
    }
    async login(query:any): Promise<any> {
        const res = new http();
        res.resultCode = 200;
        let info = await this.userRepository.findOne({ where: { username: query.username, password: query.password } });
        res.data = {
            info: info
        }
        return res;
    }
    async addOne(object: any): Promise<any> {
        const res = new http();
        res.resultCode = 200;
        res.data = null;
        if (object.password != object.repassword) {
            res.message = "确认密码与密码不一致！"
            res.data = []
        }else{
            const postData = {
                username: object.username,
                password: object.password
            }
            const isHis = await this.userRepository.findOne({ where: { username: object.username} });
            console.log(isHis);
            if (isHis){
                res.message = '此用户存在!';
            }else{
                let info = await this.userRepository.insert(postData);
                res.data = {
                    id: info.raw.insertId
                }
                if (info) {
                    res.message = '新增成功!';
                } else {
                    res.message = '新增失败!';
                }
            }
            
        }
        return res;
    }

}
