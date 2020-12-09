import { Module } from '@nestjs/common';
import {GoodsService} from "./goods.service"
import {GoodsController} from './goods.controller';
import {Goods as GoodsEntity} from './goods.entity'
import { TypeOrmModule } from '@nestjs/typeorm'




@Module({
  imports: [TypeOrmModule.forFeature([GoodsEntity])],
  controllers: [GoodsController],
  providers: [GoodsService]
})

export class GoodsModule {}

