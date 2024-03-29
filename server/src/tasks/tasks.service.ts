import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IResponse } from 'src/types/Iresponse';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {
    this.logger = new Logger('CHANGING IN DATABASE');
  }

  logger: Logger;

  public async create(
    createTaskDto: CreateTaskDto,
  ): Promise<IResponse<Task> | null> {
    try {
      const existTask = await this.taskRepository.findOne({
        where: {
          task_name: createTaskDto.task_name,
        },
      });

      if (existTask) throw new BadRequestException('This task already exist');

      const newTask = await this.taskRepository.save({
        ...createTaskDto,
      });

      this.logger.warn('New task added in database');
      return {
        status_code: HttpStatus.CREATED,
        detail: newTask,
        result: 'We created new task',
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'Task didn`t create.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async findAll(): Promise<IResponse<Task[]> | null> {
    try {
      const taskList = await this.taskRepository.find();

      return {
        status_code: HttpStatus.OK,
        detail: taskList,
        result: `We get all tasks list`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'We didn`t find tasks!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async findOne(id: number): Promise<IResponse<Task> | null> {
    try {
      const task = await this.taskRepository.findOne({
        where: { id },
      });
      if (!task) throw new BadRequestException('This task not found!');
      return {
        status_code: HttpStatus.OK,
        detail: task,
        result: `We get task width id ${id}`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'Task didn`t found',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async update(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<IResponse<Task> | null> {
    const { task_name, description } = updateTaskDto;
    try {
      await this.taskRepository.update({ id }, { task_name, description });
      return {
        status_code: HttpStatus.OK,
        detail: updateTaskDto,
        result: `Task with id ${id} updated.`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'Task didn`t update',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  public async remove(id: number): Promise<IResponse<number> | null> {
    try {
      await this.taskRepository.delete(id);
      this.logger.warn(`Task with id${id} deleted in database`);
      return {
        status_code: HttpStatus.OK,
        detail: id,
        result: `Task with id ${id} deleted.`,
      };
    } catch (error) {
      throw new HttpException(
        {
          status_code: HttpStatus.FORBIDDEN,
          error: 'Task didn`t update',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
