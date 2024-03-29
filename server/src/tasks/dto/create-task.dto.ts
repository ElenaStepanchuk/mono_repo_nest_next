import { IsEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsEmpty()
  @MinLength(6)
  @MaxLength(150)
  @IsString()
  task_name: string;

  @IsEmpty()
  @IsString()
  description: string;
}
