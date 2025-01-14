import { Types } from "mongoose";
import { z } from "zod";

// Zod validation schema for  Order

const objectIdSchema = z.custom<Types.ObjectId>(
    (value) => Types.ObjectId.isValid(value?.toString()), 
    { message: "Invalid product ID" }
  );
 const OrderValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }), 
    product: objectIdSchema,
    quantity: z
      .number()
      .min(1, { message: "Quantity must be at least 1" })
      .int({ message: "Quantity must be an integer" }), 
    totalPrice: z.number().min(0, { message: "Total price must be non-negative" }),
  });

  export {OrderValidationSchema};