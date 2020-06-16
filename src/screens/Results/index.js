import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';

import PATHS from '../../components/Routes/paths';
import ProductList from '../../components/ProductList';
import Categories from '../../components/Categories';
import Loader from '../../components/Spinner/components/loading';

const Results = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products, categories, productsLoader } = useSelector(
    (state) => state
  );

  const query = new URLSearchParams(useLocation().search).get('search');

  useEffect(() => {
    if (!query) {
      history.push(PATHS.home);
    } else if (!products.length && query) {
      dispatch(actionCreators.getProducts(query, dispatch));
    }
  }, [dispatch, history, products.length, query]);

  return productsLoader ? (
    <Loader />
  ) : (
    <div className="column center full-width results">
      <Categories categories={categories} />
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Results;
