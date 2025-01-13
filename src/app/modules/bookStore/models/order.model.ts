import { Schema, model } from 'mongoose';
import { Order } from '../interfaces/order.interface';
import { productModel } from './book.model';


const orderSchema = new Schema<Order>({
    email: {type: String, required: true},
    product: {type: Schema.Types.ObjectId, ref:"product", required: true},
    quantity: {type: Number, required: true, min: 1 },
    totalPrice: {type: Number, required: true},   
},
   { timestamps: true }
);

// query middleware

orderSchema.pre("save", async function(next){
    try{
        console.log("Product ID in order:", this.product);
        const testProduct = await productModel.findById(this.product);
        console.log("Test Product:", testProduct);
        if (!testProduct) {
            throw new Error("Product not found");
          }
          if (testProduct.quantity < this.quantity) {
            throw new Error("Not enough product stock available");
          }else{
           testProduct.quantity -= this.quantity;
          };
          if (testProduct.quantity === 0) {
            testProduct.inStock = false;
          };
          await testProduct.save();
        next()
    }catch (err:any) {
        next(err);
      }
});

export const orderModel = model<Order>('order', orderSchema);