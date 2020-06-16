import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';

const ProductList = ({ products }) =>
  products.map((product) => <ProductItem key={product.id} {...product} />);

ProductItem.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
