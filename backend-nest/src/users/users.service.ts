import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserCreateDTO } from 'src/dto/users/create.dto';
import { User } from 'src/interface/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    let result = await this.UserModel.find();

    return result;
  }

  async findById(id: ObjectId): Promise<User> {
    return await this.UserModel.findById(id).exec();
  }

  async create(data: UserCreateDTO): Promise<User> {
    return await this.UserModel.create(data);
  }

  async update(id: string, data: UserCreateDTO): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<User> {
    return await this.UserModel.findByIdAndDelete(id);
  }
}
