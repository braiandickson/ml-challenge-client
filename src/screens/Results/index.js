import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';

import PATHS from '../../components/Routes/paths';
import ProductList from '../../components/ProductList';

const Results = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.products);
  const query = new URLSearchParams(useLocation().search).get('search');

  useEffect(() => {
    if (!query) {
      history.push(PATHS.home);
    } else if (!products.length && query) {
      dispatch(actionCreators.getProducts(query, dispatch));
    }
  }, [dispatch, history, products.length, query]);

  return (
    <div className="column center full-width results">
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Results;
