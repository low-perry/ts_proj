import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Product } from "../types/Product";

/**
 * Custom hook to fetch products from the server.
 * @returns An object containing the products data.
 */
export const useGetProductsQuery = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => (await apiClient.get<Product []>(`api/products`)).data
    })