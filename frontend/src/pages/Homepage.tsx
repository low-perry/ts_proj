import { Col, Row } from "react-bootstrap";
import { initialProducts } from "../data";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { useEffect, useReducer } from "react";
import { APIError } from "../types/APIError";
import { getError } from "../utils";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

/**
 * Represents the state of the Homepage component.
 */
type State = {
    products: Product[],
    loading: boolean,
    error: string
}

/**
 * Represents an action that can be dispatched in the application.
 */
type Action = {type: 'FETCH_REQUEST'} 
            | {type: 'FETCH_SUCCESS'; payload: Product[]}
            | {type: 'FETCH_FAIL'; payload: string}

/**
 * Represents the initial state of the Homepage component.
 */
const initalState: State = {
    products: [],
    loading: true,
    error: ''
}

/**
 * Reducer function that handles state updates based on dispatched actions.
 * @param state - The current state.
 * @param action - The dispatched action.
 * @returns The updated state.
 */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, products: action.payload }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default function Homepage() {
    // { loading, error, products}
    /**
     * Represents the Homepage component.
     * 
     * @remarks
     * This component is responsible for rendering the homepage of the application.
     * 
     * @example
     * ```tsx
     * const [state, dispatch] = 
     *     useReducer<React.Reducer<State, Action>>(reducer, initalState);
     * ```
     * 
     * @returns The rendered Homepage component.
     */
    const [state, dispatch] = 
        useReducer<React.Reducer<State, Action>>(reducer, initalState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                 const response = await axios.get('/api/products');
                 dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
                
            } catch (error) {
    
                dispatch({ type: 'FETCH_FAIL', payload: getError(error as APIError)});
            }
        }
        fetchData();
    }, []);
    return (
        state.loading ? (<LoadingBox />)
        : state.error ? (<MessageBox variant="danger">{state.error}</MessageBox>) 
        : (
            <Row>
                {state.products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                    <Link to={'/product/' + product.slug}>
                        <img src={product.image} alt={product.name} className='product-imgage' />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </Link>

                </Col>
                ))}
            </Row>
    
    )
)
}