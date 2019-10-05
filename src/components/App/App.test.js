import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when filterNews method is called', () => {
    const initialState = wrapper.state();
    wrapper.instance().filterNews('technology');
    wrapper.instance().filterNews('default')
    expect(wrapper.state()).toEqual(initialState);
  })
  
})
