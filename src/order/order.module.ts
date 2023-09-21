import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
