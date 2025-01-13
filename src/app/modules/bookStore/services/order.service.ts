import { Order } from "../interfaces/order.interface"
import { orderModel } from "../models/order.model"

const createOrderIntoDB = async(order: Order) =>{
    const result = await orderModel.create(order);
    return result;
};

export const OrderServices = {
    createOrderIntoDB,
}