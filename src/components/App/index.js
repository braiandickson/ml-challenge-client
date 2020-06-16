import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet';

import Routes from '../Routes';
import { Context as ProductsContext } from '../../contexts/ProductsContext';
import {
  reducer as productsReducer,
  INITIAL_STATE,
} from '../../contexts/ProductsContext/reducer';

import '../../styles/application.scss';

function App() {
  const [productsState, userDispatch] = useReducer(
    productsReducer,
    INITIAL_STATE
  );
  return (
    <ProductsContext.Provider
      value={{ state: productsState, dispatch: userDispatch }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>ML Challenge</title>
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <Routes />
    </ProductsContext.Provider>
  );
}

export default App;
