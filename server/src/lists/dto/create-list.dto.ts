import { IsEmpty, MaxLength, MinLength, IsString } from 'class-validator';
export class CreateListDto {
  @IsEmpty()
  @MinLength(3)
  @MaxLength(150)
  @IsString()
  list_name: string;
}
