import express, {Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';
import { initialProducts } from '../data';

export const seedRouter = express.Router();

seedRouter.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(initialProducts);
        res.json({createdProducts});
    })
)