import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'src/interface/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Item> {
    return this.itemService.findById(id);
  }

  @Post()
  async create(@Body() payload: CreateItemDto): Promise<Item> {
    console.log('Type', typeof payload.quantity);

    return this.itemService.create({
      ...payload,
      quantity:
        typeof payload.quantity === 'string'
          ? parseInt(payload.quantity)
          : payload.quantity,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemService.delete(id);
  }

  @Patch(':id')
  async updatePatch(@Param('id') id: string, @Body() data: CreateItemDto) {
    return this.itemService.update(id, data);
  }

  @Put(':id')
  async updatePut(@Param('id') id: string, @Body() data: CreateItemDto) {
    return this.itemService.update(id, data);
  }
}
