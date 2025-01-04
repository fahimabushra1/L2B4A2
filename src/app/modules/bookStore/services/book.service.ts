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

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
};