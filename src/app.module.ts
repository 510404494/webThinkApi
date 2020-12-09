import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './goods/goods.entity';
import { Action } from './goods/action.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: "47.113.205.53",
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'test',
        entities: [Goods, Action],
      }
    ), GoodsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
