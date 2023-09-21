import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
