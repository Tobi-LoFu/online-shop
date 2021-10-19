export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET-PRODUCTS":
      return { ...state, fetchedProducts: action.payload };

    case "GET-Error":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
