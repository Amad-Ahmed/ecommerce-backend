import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type ProductDocument = HydratedDocument<Order>;

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  orderId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: [{ productId: String, quantity: Number }] })
  cart: { productId: string; quantity: number }[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
