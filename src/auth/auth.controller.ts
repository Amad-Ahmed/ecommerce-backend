import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Auth } from 'mongodb';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.signIn(loginDto);
  }

  // function to get all products
  @Get('all')
  async getAllProducts(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10, // You can change the default limit as needed
  ): Promise<Auth[]> {
    return await this.authService.getAllUsers(page, limit);
  }
}
