import 'react-native';
import React from 'react';
import Phone from '../src/Phone';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const branchPhoneNumber = '532';

const branch = 'Tacoma';

describe('Phone component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Phone phoneNumber={branchPhoneNumber} branch={branch} />);

    expect(wrapper.find('Text').length).toBe(3);

    expect(wrapper.find('Text').at(0).contains('Branch:')).toBe(true);

    expect(wrapper.find('Text').at(1).contains(branch)).toBe(true);

    expect(wrapper.find('Text').at(2).contains(`(${branchPhoneNumber}) 922-4240`)).toBe(true);
  });
});
