import { Request, Response } from "express";
import { OrderServices } from "../services/order.service";

const createOrder = async(req: Request, res: Response) =>{
    try{
         const {order : orderData} = req.body;
        //  console.log(orderData.email)
         const result = await OrderServices.createOrderIntoDB(orderData);

         res.status(200).json({
         success: true,
         message:"product is created successfully",
         data: result,
         });
    }catch(err){
        res.status(500).json({
            success: false,
            message:"err.message || something went wrong",
            error: err,
        });
    }
};

export const OrderControllers = {
    createOrder,
}