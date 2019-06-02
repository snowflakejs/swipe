import 'react-native';
import React from 'react';
import Footer from '../src/Footer';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Footer component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('Text').length).toBe(2);

    expect(wrapper.find('Text').at(0).contains('NO THANKS')).toBe(true);

    expect(wrapper.find('Text').at(1).contains("I'LL TAKE IT")).toBe(true);
  });
});
