import { Product } from "./types/Product";
export const initialProducts: Product[] = [
    {
        name: 'pc',
        slug: 'pc',
        image: '../images/pc.jpg',
        category: 'pc',
        brand: 'pc',
        price: 89.99,
        countInStock: 10,
        description: 'high quality product',
        rating: 4.5,
        numReviews: 10

    },
    {
        name: 'laptop',
        slug: 'laptop',
        image: '../images/laptop.jpg',
        category: 'laptop',
        brand: 'laptop',
        price: 89.99,
        countInStock: 10,
        description: 'high quality product',
        rating: 4.5,
        numReviews: 10
    },
    {
        name: 'phone',
        slug: 'phone',
        image: '../images/phone.jpg',
        category: 'phone',
        brand: 'phone',
        price: 89.99,
        countInStock: 10,
        description: 'high quality product',
        rating: 4.5,
        numReviews: 10
    }
]