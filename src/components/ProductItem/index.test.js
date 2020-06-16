import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProductItem from './index';

const data = {
  id: 'MLA826445412',
  title: 'Mouse Inalámbrico Recargable Negro Tedge',
  price: {
    currency: '$',
    amount: 449,
    decimals: 0,
  },
  picture: 'http://mla-s1-p.mlstatic.com/744481-MLA41024544993_032020-I.jpg',
  condition: 'Nuevo',
};

describe('#ProductItem', () => {
  it('Mounts the ProductItem component correctly with data', () => {
    const component = mount(
      <Router>
        <ProductItem {...data} />
      </Router>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
