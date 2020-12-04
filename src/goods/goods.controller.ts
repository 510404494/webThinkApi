import { Controller, Get, Post, Put, Delete, Query, Body, Res, HttpStatus, ExecutionContext, NestInterceptor} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Goods } from '../database/entity/goods.entity';



import { ApiTags, ApiParam, ApiQuery, ApiHeader, ApiBody} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { http } from 'src/common/http';


@ApiTags('商品')
@Controller('goods')
export class GoodsController  {
    constructor(private readonly goodsService: GoodsService) { }

    /* 查询所有列表 */
    @Get('list')
    // @ApiParam({
    //     name: 'id',
    //     description: '这是用户id',
    // })
    // @ApiQuery({
    //     name: 'role',
    //     description: '这是需要传递的参数',
    // })
    // @ApiHeader({
    //     name: 'authoriation',
    //     required: true,
    //     description: '本次请求请带上token',
    // })
    findAll(){
        return this.goodsService.findAll();
    }
    /* 查询单个详情 */
    @Get('detail')
    findOne(@Query() query): Promise<Goods> {
        return this.goodsService.findOne(query);
    }
    /* 新增数据 */
    @Post('add')
    addOne(@Body() body){
        console.log(body);
        
        return this.goodsService.addOne(body);
    }
    /* 修改数据 */
    @Put('update')
    updateOne(@Body() goods): Promise<String> {
        return this.goodsService.updateOne(goods);
    }
    /* 删除数据 */
    @Delete('del')
    delOne(@Query() query): Promise<String> {
        return this.goodsService.delOne(query);
    }
}
