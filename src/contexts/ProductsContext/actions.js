import { getProducts, getProductDetail } from '../../services/ProductsService';

const ActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCTS: 'SET_PRODUCTS',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  RESET_PRODUCT_DETAIL: 'RESET_PRODUCT_DETAIL',
};

export const actionCreators = {
  getProducts: async (query, dispatch) => {
    const response = await getProducts(query);
    debugger;
    if (response) {
      dispatch(actionCreators.setProducts(response.data));
    } else {
      return response.error;
    }
  },
  setProducts: (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }),
  resetProducts: () => ({
    type: ActionTypes.RESET_PRODUCTS,
  }),
  getProductDetail: async (id) => {
    const response = await getProductDetail(id);
    if (response) {
      return {
        type: ActionTypes.GET_PRODUCT_DETAIL,
        payload: response.data,
      };
    } else {
      return response.error;
    }
  },
  resetProductDetail: () => ({
    type: ActionTypes.RESET_PRODUCT_DETAIL,
  }),
};
