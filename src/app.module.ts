import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './goods/goods.entity';
import { Action } from './goods/action.entity';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { Order } from './order/order.entity'
import { User } from './user/user.entity'
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
        entities: [Goods, Action,Order,User],
        //entities: ["dist/**/*.entity{.ts,.js}"],
        autoLoadEntities:true,
        synchronize: true, // 会自动生成数据表
        logging:'all',//打印执行sql语句
      }
    ), GoodsModule, OrderModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
