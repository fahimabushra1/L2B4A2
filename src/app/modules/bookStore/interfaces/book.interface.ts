import { ObjectId } from "mongoose";

export type Product = {
    id: ObjectId;
    title: string;
    author: string;
    price: number;
    category: "Fiction"| "Science" | "SelfDevelopment" | "Poetry" | "Religious";
    description: string;
    quantity: number;
    inStock: "in stock" | "out of stock";
}