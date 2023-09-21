import { Injectable } from '@nestjs/common';
import { Product } from './schemas/product.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  // function to create product
  async createProduct(productDto: CreateProductDto): Promise<Product> {
    const { name, description, price, stock, cost } = productDto;
    return await this.productModel.create({
      name,
      description,
      price,
      stock,
      cost,
    });
  }

  // function to get all products

  async getAllProducts(page: number, limit: number): Promise<Product[]> {
    const skip = (page - 1) * limit;
    return await this.productModel.find().skip(skip).limit(limit).exec();
  }
}
