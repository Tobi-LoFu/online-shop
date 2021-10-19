export const getProducts = (products) => {
    return {
        type: 'GET-PRODUCTS',
        payload: products
    }
}


export const getError = (error) => {
    return {
        type: 'GET-ERROR',
        payload: error
    }
}
