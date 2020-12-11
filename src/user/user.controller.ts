import { Controller, Get, Post, Put, Delete, Query, Body, Res, HttpStatus, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiTags, ApiParam, ApiQuery, ApiHeader, ApiBody } from '@nestjs/swagger';
import { http } from 'src/common/http';
import { get } from 'http';

@ApiTags('用户')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    /* 查询所有列表 */
    @Get('list')
    findAll() {
        return this.userService.findAll();
    }
    @Get('user_login')
    login(@Query() query) {
        return this.userService.login(query);
    }
    @Post('user_register')
    register(@Body() body){ 
        return this.userService.addOne(body);
    }
}
