import {
  IsDate,
  IsDateString,
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class UserCreateDTO {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  role: string;

  @IsString()
  gender: string;

  @IsString()
  description: string;

  @IsDateString()
  birth: Date;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
