import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/interface/users.interface';
import { UserCreateDTO } from 'src/dto/users/create.dto';
import { ObjectId, Types } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() query: { id?: string }): Promise<User[]> {
    return await this.usersService.findAll();
  }

  // FIXME get user by id not succes
  // @Get(':id')
  // async findById(@Param() id: string): Promise<User> {
  //   if (!Types.ObjectId.isValid(id)) {
  //     throw new NotFoundException('Invalid user ID');
  //   }

  //   const data = this.usersService.findById(id);

  //   if (!data) {
  //     throw new NotFoundException('User not found');
  //   }

  //   return data;
  // }

  @Post()
  async create(@Body() payload: UserCreateDTO): Promise<User> {
    return await this.usersService.create(payload);
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() payload: UserCreateDTO,
  ): Promise<User> {
    return await this.usersService.update(id, payload);
  }

  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() payload: UserCreateDTO,
  ): Promise<User> {
    return await this.usersService.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.usersService.delete(id);
  }
}
