import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchBar from './index';

describe('#SearchBar', () => {
  const handleSearch = jest.fn();
  it('Mounts the SearchBar component correctly with data', () => {
    const component = mount(<SearchBar handleSearch={handleSearch} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
