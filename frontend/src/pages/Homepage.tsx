import { Col, Row } from "react-bootstrap";
import { APIError } from "../types/APIError";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";

export default function Homepage() {
    // { loading, error, products}
    const {data: products, isLoading, error } = useGetProductsQuery();
    
    return (
        isLoading ? (<LoadingBox />)
        : error ? (<MessageBox variant="danger">{getError(error as unknown as APIError)}</MessageBox>) 
        : (
            <Row>
                <Helmet>
                    <title>Typezone</title>
                </Helmet>
                {products!.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                   <ProductItem product={product}></ProductItem>

                </Col>
                ))}
            </Row>
    
    )
)
}