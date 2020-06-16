import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './index';

describe('#Header', () => {
  it('Mounts the Header component correctly with data', () => {
    const component = mount(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
