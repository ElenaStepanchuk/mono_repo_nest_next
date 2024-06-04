import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';
import { IResponse } from 'src/types/Iresponse';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createList(
    @Body() createListDto: CreateListDto,
  ): Promise<IResponse<List>> {
    return this.listsService.createList(createListDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllList(): Promise<IResponse<List[]>> {
    return this.listsService.findAllList();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOneList(@Param('id') id: number): Promise<IResponse<List>> {
    return this.listsService.findOneList(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateList(
    @Param('id') id: number,
    @Body() updateListDto: UpdateListDto,
  ): Promise<IResponse<List>> {
    return this.listsService.updateList(+id, updateListDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async removeList(@Param('id') id: number): Promise<IResponse<number>> {
    return this.listsService.removeList(+id);
  }
}
