import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';
import logo from '../../assets/Header/logo.png';
import PATHS from '../Routes/paths';

import SearchBar from '../SearchBar';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSearch = (query) => {
    dispatch(actionCreators.getProducts(query, dispatch));
    history.push(`${PATHS.results}?search=${query}`);
  };
  return (
    <div className="row center full-width header">
      <div className="row middle space-between header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <SearchBar handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
