import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { ListsModule } from 'src/lists/lists.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ListsModule],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TypeOrmModule, TasksService],
})
export class TasksModule {}
