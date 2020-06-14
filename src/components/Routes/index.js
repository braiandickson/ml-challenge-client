import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Suspense from '../Suspense';
import PATHS from './paths';
import styles from './styles.module.scss';

const Home = lazy(() => import('../../screens/Home'));
const Results = lazy(() => import('../../screens/Results'));
const ProductDetail = lazy(() => import('../../screens/ProductDetail'));

function Routes() {
  return (
    <Router>
      <div className={styles.container}>
        <Suspense>
          <Switch>
            <Route path={PATHS.results} component={Results} exact />
            <Route
              path={PATHS.productProfile}
              component={ProductDetail}
              exact
            />
            <Route path={PATHS.Home} component={Home} exact={false} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
