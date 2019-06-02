import 'react-native';
import React from 'react';
import Location from '../src/Location';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const address = '123 Main Street, Tacoma, WA 98409';

describe('Location component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Location address={address}/>);

    expect(wrapper.find('Text').length).toBe(2);

    expect(wrapper.find('Text').at(0).contains('Location')).toBe(true);

    expect(wrapper.find('Text').at(1).contains(address)).toBe(true);

  });
});
