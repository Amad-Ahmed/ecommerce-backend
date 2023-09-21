import { Injectable } from '@nestjs/common';

import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  // function to create an order
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  // function to create 
  async createOrder(orderDto: CreateOrderDto): Promise<Order> {
    const { orderId, userId, cart } = orderDto;
    return await this.orderModel.create({
      orderId,
      userId,
      cart,
    });
  }

  // function to get all 

  async getAllOrders(page: number, limit: number): Promise<Order[]> {
    const skip = (page - 1) * limit;
    return await this.orderModel.find().skip(skip).limit(limit).exec();
  }
}
