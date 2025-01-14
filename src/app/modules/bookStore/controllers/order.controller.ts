import { Request, Response } from "express";
import { OrderServices } from "../services/order.service";
import { OrderValidationSchema } from "../validation/order.validation";

const createOrder = async(req: Request, res: Response) =>{
    try{
         const {order : orderData} = req.body;
        //  console.log(orderData.email)
           // data validation using zod
    const zodParseData = OrderValidationSchema.parse(orderData);
         const result = await OrderServices.createOrderIntoDB(zodParseData);

         res.status(200).json({
         success: true,
         message:"order is created successfully",
         data: result,
         });
    }catch(err){
        res.status(500).json({
            success: false,
            message:"err.message || something went wrong",
            error: err,
        });
        res.status(400).json({ message: "No order found", success: false, err });
    }
};

const calculateTotalRevenue = async (req: Request, res: Response) =>{
    try{
         const result = await OrderServices.getRevenueIntoDB();
         console.log(result)
         res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
            data: result,
            });
    }catch(err: any){
          res.status(500).json({
            success: false,
            message:"err.message || something went wrong",
            error: err,
         });
         res.status(400).json({ message: "Error calculating revenue", success: false, err });
    }
};

export const OrderControllers = {
    createOrder,
    calculateTotalRevenue,
}