import { z } from "zod";

// Zod schema for Product
const ProductValidationSchema = z.object({
  id: z.string().nonempty("ID is required"),
  title: z.string().nonempty("Title is required"),
  author: z.string().nonempty("Author is required"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  category: z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"]),
  description: z.string().nonempty("Description is required"),
  quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
  inStock: z.boolean(),
  isDeleted: z.boolean().default(false),
});
export { ProductValidationSchema };
