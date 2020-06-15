import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';
import { mockedProduct } from '../../screens/Results/mockedResults';
import PATHS from '../../components/Routes/paths';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const history = useHistory();
  const { id } = useParams();
  const {
    title,
    price,
    picture,
    condition,
    sold_quantity: soldCuantity,
    description,
  } = mockedProduct.item;
  const { currency, amount, decimals } = price;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      history.push(PATHS.home);
    } else if (!product.item && id) {
      dispatch(actionCreators.getProductDetail(id, dispatch));
    }
  }, [dispatch, history, id, product]);

  return (
    <div className="column full-width product">
      <div className="row full-width product__header">
        <img className="product__picture" src={picture} alt={title} />
        <div className="column product__price-container">
          <span className="product__status">{`${condition} - ${soldCuantity} vendidos`}</span>
          <h1 className="product__title">{title}</h1>
          <div className="row product__price">
            <h2 className="product__currency">{currency}</h2>
            <h2 className="product__amount">{amount}</h2>
            <h2 className="product__decimals">{decimals}</h2>
          </div>
          <button className="product__button">Comprar</button>
        </div>
      </div>
      <div className="column full-width">
        <h2 className="product__description-title">Descripcion del producto</h2>
        <p
          className="product__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

export default ProductDetail;
