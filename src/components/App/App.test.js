import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const newsData = {
      default: [{
        id: 0,
        headline: 'Loading...',
        description: 'Please Wait to',
        img: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif'
      }],
      technology: 'Dinosaurs...'
    }
    wrapper = shallow(<App data={newsData}/>);
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
