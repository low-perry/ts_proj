import bcrypt from 'bcryptjs';
import { User } from "./models/userModel";
import { Product } from "./models/productModel";
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

export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]