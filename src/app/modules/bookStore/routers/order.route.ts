import express from "express";
import { OrderControllers } from "../controllers/order.controller";


const router = express.Router();
router.post('/api/orders', OrderControllers.createOrder);
router.get('/api/orders/revenue', OrderControllers.calculateTotalRevenue);

export const OrderRoutes = router;