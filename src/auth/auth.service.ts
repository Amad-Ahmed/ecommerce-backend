import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  // function to sign up a user
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate jwt token
    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  // function to sign in a user
  async signIn(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    // find the user by email
    const user = await this.userModel.findOne({ email });

    // if no user found, throw an error
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // if password is invalid, throw an error
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // generate jwt token
    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}
