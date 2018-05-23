import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('Library', () => {

  it('renders the title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toEqual('Add Books');
  });
});

