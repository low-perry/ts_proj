import { APIError } from "./types/APIError"

export const getError = (error: APIError): string => {
    if (error.response && error.response.data.message) {
        return error.response.data.message
    }
    return error.message
}