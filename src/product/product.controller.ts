import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schemas';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // function to create product
  @Post('create')
  async createProduct(@Body() productDto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(productDto);
  }
}
