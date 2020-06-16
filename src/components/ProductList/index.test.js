import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProductList from './index';

const data = [
  {
    id: 'MLA826445412',
    title: 'Mouse Inalámbrico Recargable Negro Tedge',
    price: {
      currency: '$',
      amount: 449,
      decimals: 0,
    },
    picture: 'http://mla-s1-p.mlstatic.com/744481-MLA41024544993_032020-I.jpg',
    condition: 'Nuevo',
    free_shipping: false,
  },
  {
    id: 'MLA801490420',
    title: 'Mini Mouse Optico Retráctil Usb M851 Neo',
    price: {
      currency: '$',
      amount: 195,
      decimals: 0,
    },
    picture: 'http://mla-s1-p.mlstatic.com/979762-MLA31493746282_072019-I.jpg',
    condition: 'Nuevo',
    free_shipping: false,
  },
  {
    id: 'MLA676896211',
    title: 'Mouse Genius Dx-110 Usb 1000 Dpi Optico Negro',
    price: {
      currency: '$',
      amount: 470,
      decimals: 0,
    },
    picture: 'http://mla-s2-p.mlstatic.com/671210-MLA31138775834_062019-I.jpg',
    condition: 'Nuevo',
    free_shipping: false,
  },
  {
    id: 'MLA822593058',
    title: 'Mouse Gamer 3200dpi Personalizable Software - Gtia Gamer24hs',
    price: {
      currency: '$',
      amount: 1233,
      decimals: 91,
    },
    picture: 'http://mla-s1-p.mlstatic.com/928384-MLA40720990763_022020-I.jpg',
    condition: 'Nuevo',
    free_shipping: false,
  },
];

describe('#ProductList', () => {
  it('Mounts the ProductList component correctly with data', () => {
    const component = mount(
      <Router>
        <ProductList products={data} />
      </Router>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
