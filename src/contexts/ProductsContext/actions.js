import { getProducts, getProductDetail } from '../../services/ProductsService';

const ActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  RESET_PRODUCT_DETAIL: 'RESET_PRODUCT_DETAIL',
};

export const actionCreators = {
  getProducts: async (query) => {
    const response = await getProducts(query);
    if (response) {
      return {
        type: ActionTypes.GET_PRODUCTS,
        payload: response.data,
      };
    } else {
      return response.error;
    }
  },
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
