import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';
import logo from '../../assets/Header/logo.png';
import PATHS from '../Routes/paths';

import SearchBar from '../SearchBar';

import styles from './styles.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSearch = (query) => {
    dispatch(actionCreators.getProducts(query, dispatch));
    history.push(PATHS.results);
  };
  return (
    <div className={cn('row center full-width', styles.header)}>
      <div className={cn('row middle space-between', styles.container)}>
        <img src={logo} alt="logo" className={styles.logo} />
        <SearchBar handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
