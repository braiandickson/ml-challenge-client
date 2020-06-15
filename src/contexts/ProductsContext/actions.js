import { getProducts, getProductDetail } from '../../services/ProductsService';

import { mockedResults } from '../../screens/Results/mockedResults';

const ActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCTS: 'SET_PRODUCTS',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  RESET_PRODUCT_DETAIL: 'RESET_PRODUCT_DETAIL',
};

export const actionCreators = {
  // TODO: CAMBIAR EL NOMBRE DEL ACTION A GET_RESULTS;
  getProducts: async (query, dispatch) => {
    const response = await getProducts(query);
    if (response) {
      // TODO: QUITAR LA DATA MOCKEADA;
      dispatch(
        actionCreators.setProducts(response.data || mockedResults.items)
      );
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
