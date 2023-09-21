import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user.dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  async create(@Body() user: UserCreateDto) {
    return await this.userService.create(user);
  }
}
