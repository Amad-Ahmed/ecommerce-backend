import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  cost: number;

  @Prop({
    type: [
      { userId: String, description: String, title: String, stars: Number },
    ],
  })
  reviews: {
    userId: string;
    description: string;
    title: string;
    stars: number;
  }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
