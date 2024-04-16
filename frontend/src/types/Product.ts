export type Product = {
    _id: string
    name: string,
    // used for seo friendly url
    slug: string,
    image: string,
    category: string,
    brand: string,
    price: number,
    countInStock: number,
    description: string,
    rating: number,
    numReviews: number
}