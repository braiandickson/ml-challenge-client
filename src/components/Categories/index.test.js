import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Categories from './index';

const data = ['Computación', 'Mouses, Teclados y Controles', 'Mouses'];

describe('#Categories', () => {
  it('Mounts the Categories component correctly with data', () => {
    const component = mount(<Categories categories={data} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
