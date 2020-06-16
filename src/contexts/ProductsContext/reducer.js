export const INITIAL_STATE = {
  categories: [],
  products: [],
  product: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {
        ...state,
        products: action.payload.items,
        categories: action.payload.categories,
      };
    }
    case 'RESET_PRODUCTS': {
      return { ...state, products: [] };
    }
    case 'SET_PRODUCT_DETAIL': {
      return { state, product: action.payload };
    }
    case 'RESET_PRODUCT_DETAIL': {
      return { ...state, product: {} };
    }
    default: {
      return state;
    }
  }
};
