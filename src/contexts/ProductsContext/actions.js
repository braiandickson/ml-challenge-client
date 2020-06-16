import { getProducts, getProductDetail } from '../../services/ProductsService';
import { LoaderIds } from '../../constants/loaderIds';

const ActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCTS: 'SET_PRODUCTS',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  SET_PRODUCT_DETAIL: 'SET_PRODUCT_DETAIL',
  RESET_PRODUCT_DETAIL: 'RESET_PRODUCT_DETAIL',
  SET_LOADER: 'SET_LOADER',
};

export const actionCreators = {
  getProducts: async (query, dispatch) => {
    dispatch(actionCreators.setLoader(LoaderIds.productsLoader, true));
    dispatch(actionCreators.resetProducts());
    const response = await getProducts(query);
    if (response.data) {
      dispatch(actionCreators.setProducts(response.data));
      dispatch(actionCreators.setLoader(LoaderIds.productsLoader, false));
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
  getProductDetail: async (id, dispatch) => {
    dispatch(actionCreators.setLoader(LoaderIds.productLoader, true));
    dispatch(actionCreators.resetProductDetail());
    const response = await getProductDetail(id);
    if (response.data) {
      dispatch(actionCreators.setProductDetail(response.data));
      dispatch(actionCreators.setLoader(LoaderIds.productLoader, false));
    } else {
      return response.error;
    }
  },
  setProductDetail: (product) => ({
    type: ActionTypes.SET_PRODUCT_DETAIL,
    payload: product,
  }),
  resetProductDetail: () => ({
    type: ActionTypes.RESET_PRODUCT_DETAIL,
  }),
  setLoader: (id, value) => ({
    type: ActionTypes.SET_LOADER,
    payload: { id, value },
  }),
};
