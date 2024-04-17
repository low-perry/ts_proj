import express, {Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';
import { initialProducts, sampleUsers } from '../data';
import { UserModel } from '../models/userModel';

export const seedRouter = express.Router();

seedRouter.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(initialProducts);

        await UserModel.deleteMany({});
        const createdUsers = await UserModel.insertMany(sampleUsers);
        res.json({createdProducts, createdUsers});
    })
)