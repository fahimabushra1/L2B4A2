import { Schema, model } from 'mongoose';
import { Order } from '../interfaces/order.interface';


const orderSchema = new Schema<Order>({
    email: {type: String, required: true},
    product: {type: Schema.Types.ObjectId, required: true},
    quantity: {type: Number, required: true, min: 1 },
    totalPrice: {type: Number, required: true},
});

export const orderModel = model<Order>('order', orderSchema);