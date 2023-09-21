import { Body, Controller, Get, Post, Query,} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard())
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // function to create 
  @Post('create')
  async createProduct(@Body() orderDto: CreateOrderDto): Promise<Order> {
    return await this.orderService.createOrder(orderDto);
  }

  // function to get all
  @Get('all')
  async getAllOrder(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10, // You can change the default limit as needed
  ): Promise<Order[]> {
    return await this.orderService.getAllOrders(page, limit);
  }
}
