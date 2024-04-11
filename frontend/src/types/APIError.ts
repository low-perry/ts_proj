/**
 * Represents an API error response.
 */
export declare type APIError = {
    message: string,
    response: {
        data: {
            message: string
        }
    }
};