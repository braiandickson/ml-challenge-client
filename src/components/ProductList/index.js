import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';

const ProductList = ({ products }) =>
  products.map((product) => <ProductItem {...product} />);

ProductItem.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
