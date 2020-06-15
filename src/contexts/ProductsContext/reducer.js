export const INITIAL_STATE = {
  categories: [],
  products: [],
  productId: null,
  product: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return { ...state, products: action.payload };
    }
    case 'RESET_PRODUCTS': {
      return { ...state, products: [] };
    }
    case 'GET_PRODUCT_DETAIL': {
      return { state: INITIAL_STATE };
    }
    case 'RESET_PRODUCT_DETAIL': {
      return { ...state, productId: null, product: {} };
    }
    default: {
      return state;
    }
  }
};
