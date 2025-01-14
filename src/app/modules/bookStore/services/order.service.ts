import { Order } from "../interfaces/order.interface"
import { orderModel } from "../models/order.model"

const createOrderIntoDB = async(order: Order) =>{
    const result = await orderModel.create(order);
    return result;
};

const getRevenueIntoDB = async ()=>{
 const result = await orderModel.aggregate([
   
    { $unwind: "$totalPrice" },
    {
        $group: {
            _id: null,
            totalRevenue: {
                $sum: {
                    $multiply: ["$totalPrice", "$quantity"], 
                }
            }
        }
    }
 ]);
 return result[0]?.totalRevenue || 0;
};

export const OrderServices = {
    createOrderIntoDB,
    getRevenueIntoDB,
}