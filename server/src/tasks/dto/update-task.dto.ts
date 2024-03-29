// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTaskDto } from './create-task.dto';

// export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

import { IsString, IsEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsEmpty()
  @IsString()
  task_name: string;

  @IsEmpty()
  @IsString()
  description: string;
}
