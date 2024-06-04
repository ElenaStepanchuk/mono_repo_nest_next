import { IsEmpty, MaxLength, MinLength, IsString } from 'class-validator';
import { List } from 'src/lists/entities/list.entity';

export class CreateTaskDto {
  @IsEmpty()
  @MinLength(6)
  @MaxLength(150)
  @IsString()
  task_name: string;

  @IsEmpty()
  @IsString()
  description: string;

  deadline: Date;

  priority: 'Medium' | 'Low' | 'High';

  list: List;
}
