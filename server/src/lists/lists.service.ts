import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';
import { IResponse } from 'src/types/Iresponse';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
  ) {
    this.logger = new Logger('CHANGING IN DATABASE');
  }

  logger: Logger;

  public async createList(
    createListDto: CreateListDto,
  ): Promise<IResponse<List> | null> {
    try {
      const existTask = await this.listRepository.findOne({
        where: {
          list_name: createListDto.list_name,
        },
      });

      if (existTask) throw new BadRequestException('This list already exist');

      const newList = await this.listRepository.save({
        ...createListDto,
      });

      this.logger.warn('New list added in database');
      return {
        status_code: HttpStatus.CREATED,
        detail: newList,
        result: 'We created new list',
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'List didn`t create.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async findAllList() {
    try {
      const listList = await this.listRepository.find();

      return {
        status_code: HttpStatus.OK,
        detail: listList,
        result: `We get all lists.`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'We didn`t find tlists!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async findOneList(id: number): Promise<IResponse<List> | null> {
    try {
      const findList = await this.listRepository.findOne({
        where: { id },
      });
      if (!findList) throw new BadRequestException('This list not found!');
      return {
        status_code: HttpStatus.OK,
        detail: findList,
        result: `We get list width id ${id}`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'List didn`t found!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async updateList(
    id: number,
    updateListDto: UpdateListDto,
  ): Promise<IResponse<List> | null> {
    const { list_name } = updateListDto;
    try {
      await this.listRepository.update({ id }, { list_name });
      return {
        status_code: HttpStatus.OK,
        detail: updateListDto,
        result: `Lisk with id ${id} updated.`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'Lisk didn`t update',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async removeList(id: number) {
    try {
      await this.listRepository.delete(id);
      this.logger.warn(`List with id${id} deleted in database`);
      return {
        status_code: HttpStatus.OK,
        detail: id,
        result: `List with id ${id} deleted.`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'List didn`t delete!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
