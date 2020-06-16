import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatProductRoute, formatPrice } from '../../utils/formats';

const ProductItem = ({ id, title, price, condition, picture, location }) => {
  return (
    <Link key={id} to={formatProductRoute(id)}>
      <div className="row middle product-item">
        <img className="product-item__picture" src={picture} alt={title} />
        <div className="column product-item__information">
          <div className="row middle product-item__price-container">
            <h2 className="product-item__price">{formatPrice(price)}</h2>
            {condition && <div className="product-item__status" />}
          </div>
          <p className="product-item__title">{title}</p>
        </div>
        <div className="column">
          <span className="product-item__location">{location}</span>
        </div>
      </div>
    </Link>
  );
};

ProductItem.defaultProps = {
  id: '',
  title: '',
  price: {
    currency: '$',
    amount: 0,
    decimals: 0,
  },
  condition: 'Nuevo',
  picture: '',
};

ProductItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.shape({
    currency: PropTypes.string,
    amount: PropTypes.number,
    decimals: PropTypes.number,
  }),
  condition: PropTypes.string,
  picture: PropTypes.string,
};

export default ProductItem;
