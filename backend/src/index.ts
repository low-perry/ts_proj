import express, { Request, Response } from 'express';
import { initialProducts } from './data';
const app = express();
app.get('/api/products', (req: Request, res: Response) => {
    res.json(initialProducts);
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});