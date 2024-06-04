import { IsString, IsEmpty } from 'class-validator';
import { List } from 'src/lists/entities/list.entity';

export class UpdateTaskDto {
  @IsEmpty()
  @IsString()
  task_name: string;

  @IsEmpty()
  @IsString()
  description: string;

  deadline: Date;

  priority: 'Medium' | 'Low' | 'High';

  @IsEmpty()
  @IsString()
  list: List;
}
