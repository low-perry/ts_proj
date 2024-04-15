import cors from 'cors';
import express, { Request, Response } from 'express';
import { initialProducts } from './data';

const app = express();

/**
 * Enable CORS middleware to allow cross-origin requests.
 * This allows the frontend application running on http://localhost:5173 to access the backend API.
 */
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

/**
 * GET endpoint to retrieve the list of products.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The list of initial products as a JSON response.
 */
app.get('/api/products', (req: Request, res: Response) => {
    res.json(initialProducts);
});

/**
 * GET endpoint to retrieve a specific product by its slug.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The product with the matching slug as a JSON response.
 */
app.get('/api/products/:slug', (req: Request, res: Response) => {
    res.json(initialProducts.find((x) => x.slug === req.params.slug))
})

const PORT = 4000;

/**
 * Start the server and listen on the specified port.
 * @param PORT - The port number to listen on.
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});