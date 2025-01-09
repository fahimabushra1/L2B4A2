import { Product } from "../interfaces/book.interface";
import { productModel } from "../models/book.model";

const createProductIntoDB = async (product: Product) => {
    const result = await productModel.create(product);
    return result;
};

const getAllProductFromDB = async() =>{
    const result = await productModel.find();
    return result;
};
const getSingleProductFromDB = async(id: string) =>{
    const result = await productModel.findOne({id});
    return result;
};

const updateProductFromDB = async(id: string, updateData: Partial<Product>)=>{
const result = await productModel.findOneAndUpdate({id: id}, updateData,{new: true});
return result;
};

// const deleteProductFromDB = async(id: string)=>{
//     const result = await productModel.deleteOne({id});
//     return result;
// }

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    // deleteProductFromDB,
};