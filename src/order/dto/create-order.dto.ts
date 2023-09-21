import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  orderId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  cart: string;
}
