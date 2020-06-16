import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useSelector, useDispatch } from '../../contexts/ProductsContext';
import { actionCreators } from '../../contexts/ProductsContext/actions';
import PATHS from '../../components/Routes/paths';
import Categories from '../../components/Categories';
import Loader from '../../components/Spinner/components/loading';

const ProductDetail = () => {
  const { product, categories, productLoader } = useSelector((state) => state);

  const history = useHistory();
  const { id } = useParams();
  const {
    title,
    price,
    picture,
    condition,
    sold_quantity: soldCuantity,
    description,
  } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      history.push(PATHS.home);
    } else {
      dispatch(actionCreators.getProductDetail(id, dispatch));
    }
  }, [dispatch, history, id]);

  return productLoader ? (
    <Loader />
  ) : (
    <div className="column product__container">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Categories categories={categories} />
      <div className="column full-width product">
        <div className="row full-width product__header">
          <img className="product__picture" src={picture} alt={title} />
          <div className="column product__price-container">
            <span className="product__status">{`${condition} - ${soldCuantity} vendidos`}</span>
            <h1 className="product__title">{title}</h1>
            <div className="row product__price">
              {price && <h2 className="product__currency">{price.currency}</h2>}
              {price && <h2 className="product__amount">{price.amount}</h2>}
              {price && price.decimals > 0 && (
                <h2 className="product__decimals">{price.decimals}</h2>
              )}
            </div>
            <button className="product__button">Comprar</button>
          </div>
        </div>
        <div className="column full-width">
          <h2 className="product__description-title">
            Descripcion del producto
          </h2>
          <p
            className="product__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
