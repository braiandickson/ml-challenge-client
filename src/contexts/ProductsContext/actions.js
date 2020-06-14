const ActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  RESET_PRODUCT_DETAIL: 'RESET_PRODUCT_DETAIL',
};

export const actionCreators = {
  getProducts: () => ({
    type: ActionTypes.GET_PRODUCTS,
    payload: {},
  }),
  resetProducts: () => ({
    type: ActionTypes.RESET_PRODUCTS,
  }),
  getProductDetail: (id) => ({
    type: ActionTypes.GET_PRODUCT_DETAIL,
    payload: {},
  }),
  resetProductDetail: () => ({
    type: ActionTypes.RESET_PRODUCT_DETAIL,
  }),
};
