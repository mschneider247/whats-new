import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Menu
      filterNews={jest.fn()}
      />);
      expect(wrapper).toMatchSnapshot();

    });
});