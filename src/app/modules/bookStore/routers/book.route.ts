import express from "express";
import { ProductControllers } from "../controllers/book.controller";


const router = express.Router();
router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getAllProducts);
router.get('/api/products/:productId', ProductControllers.getSingleProduct);
router.get('/api/products/:productId', ProductControllers.updateProduct);

export const ProductRoutes = router;