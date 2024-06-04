import { IsString, IsEmpty } from 'class-validator';
import { Task } from 'src/tasks/entities/task.entity';

export class UpdateListDto {
  @IsEmpty()
  @IsString()
  list_name: string;

  tasks: Task[];
}
