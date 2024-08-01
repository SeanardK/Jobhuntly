import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/interface/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemModel.find().exec();
  }

  async findById(id: string): Promise<Item> {
    return await this.ItemModel.findOne({ id });
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.ItemModel.create(createItemDto);
  }

  async delete(id: string): Promise<Item> {
    return await this.ItemModel.findByIdAndDelete(id);
  }

  async update(id: string, data: CreateItemDto): Promise<Item> {
    return await this.ItemModel.findByIdAndUpdate(id, data, { new: true });
  }
}
