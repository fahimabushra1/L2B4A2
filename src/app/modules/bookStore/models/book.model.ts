import { Schema, model } from 'mongoose';
import { Product } from '../interfaces/book.interface';

const productSchema = new Schema<Product>({
      id: {type: String},
        title: {type: String, required: [true, "title must be needed"]},
        author: {type: String, required: [true, "author name must be included"]},
        price: {type: Number, required: [true, "price must be needed"], min: 0 },
        category: {
          type: String,
          enum: {
            values: ["Fiction", "Science" , "SelfDevelopment" , "Poetry" , "Religious"],
            message: "{VALUE} is not valid",},
          required: [true, "category must be needed"]},
        description: {type: String, required: [true, "description must be needed"]},
        quantity: {type: Number, required: [true, "quantity must be needed"], min: 0 },
        inStock: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
      },
        {timestamps: true},
);

export const productModel = model<Product>('product', productSchema);