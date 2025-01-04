import { Schema, model } from 'mongoose';
import { Product } from '../interfaces/book.interface';

const productSchema = new Schema<Product>({
      id: {type: String},
        title: {type: String, required: [true, "title must be needed"]},
        author: {type: String, required: [true, "author name must be included"]},
        price: {type: Number, required: true, min: 0 },
        category: {
          type: String,
          enum: {
            values: ["Fiction", "Science" , "SelfDevelopment" , "Poetry" , "Religious"],
            message: "{VALUE} is not valid",
          },
          required: true,
        },
        description: {type: String, required: true},
        quantity: {type: Number, required: true, min: 0 },
        inStock: {
          type: String,
          enum: {
            values: ["in stock" , "out of stock"],
            message:"{VALUE} is not valid "
          },
          required: true,
        },
});

export const productModel = model<Product>('product', productSchema);