import { Schema, model } from 'mongoose';
import { Product } from '../interfaces/book.interface';

const productSchema = new Schema<Product>({
      id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        price: {type: Number, required: true, min: 0 },
        category: ["Fiction", "Science" , "SelfDevelopment" , "Poetry" , "Religious"],
        description: {type: String, required: true},
        quantity: {type: Number, required: true, min: 0 },
        inStock: ["in stock" , "out of stock"],
});

export const productModel = model<Product>('product', productSchema);