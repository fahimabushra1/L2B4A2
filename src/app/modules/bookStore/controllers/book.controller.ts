import { Request, Response } from "express";
import { ProductServices } from "../services/book.service";
import { ProductValidationSchema } from "../validation/book.validation";

const createProduct= async (req: Request, res: Response)=>{
    try{
        const {product: productData} = req.body;

         // data validation using zod
    const zodParseData = ProductValidationSchema.parse(productData);
      
    const result = await ProductServices.createProductIntoDB(zodParseData);
    
    res.status(200).json({
        success: true,
        message:"product is created successfully",
        data: result,
    });
    }catch(err:any){
      res.status(500).json({
        success: false,
        message:"err.message || something went wrong",
        error: err,
    });
    res.status(400).json({ message: "No product found", success: false, err });
    }
    };

const getAllProducts = async(req: Request, res: Response) =>{
        try{
          const result = await ProductServices.getAllProductFromDB();
      
          res.status(200).json({
              success: true,
              message:"products are retrieved successfully",
              data: result,
          });
        }catch(err:any){
          res.status(500).json({
            success: false,
            message:"something went wrong",
            error: err,
        });
        res.status(400).json({ message: "Fail to retrieve products", success: false, err });
        }
      }
const getSingleProduct = async(req: Request, res: Response) =>{
        try{
          const {productId} = req.params;
          console.log({productId})
          const result = await ProductServices.getSingleProductFromDB(productId);
      
          res.status(200).json({
              success: true,
              message:"product is retrieved successfully",
              data: result,
          });
        }catch(err:any){
          console.log(err);
          res.status(500).json({
            success: false,
            message:"err.message || something went wrong",
            error: err,
        });
        res.status(400).json({ message: "Fail to retrieve single product", success: false, err });
      }};
      

const updateProduct = async(req: Request, res: Response) =>{
  try{
    const {productId} = req.params;
    // console.log({productId})
    const updatedProduct = req.body;
    // console.log(updatedProduct)
    const result = await ProductServices.updateProductFromDB(productId, updatedProduct);
    // console.log(result)

    res.status(200).json({
      success: true,
      message:"product is updated successfully",
      data: result,
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({
      success: false,
      message:"err.message || something went wrong",
      error: err,
  });
  res.status(400).json({ message: "Fail to update product", success: false, err });
}};

const deleteProduct = async(req: Request, res: Response) =>{
  try{
    const {productId} = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
        success: true,
        message:"product is deleted successfully",
        data: result,
    });
  }catch(err:any){
    console.log(err);
    res.status(500).json({
      success: false,
      message:"err.message || something went wrong",
      error: err,
  });
  res.status(400).json({ message: "Product can not be deleted", success: false, err });
}};
 

      export const ProductControllers = {
          createProduct,
          getAllProducts,
          getSingleProduct,
          updateProduct,
          deleteProduct,
      }