import 'react-native';
import React from 'react';
import Header from '../src/Header';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const branchPhoneNumber = '532';

const title='Construction and Related Workers - General';
const name='C.D BARNES & ASSOCIATES'
const rate='8.50';
const duration='Mon, Sep 5 - Fri Sep 16';
const logo='pic';

describe('Header component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Header title={title} name={name} rate={rate} duration={duration} imageUrl={logo}/>);

    expect(wrapper.find('Text').length).toBe(4);

    expect(wrapper.find('Text').at(0).contains(title)).toBe(true);

    expect(wrapper.find('Text').at(1).contains(name)).toBe(true);

    expect(wrapper.find('Text').at(2).contains(`$${rate}/hour`)).toBe(true);

    expect(wrapper.find('Text').at(3).contains(duration)).toBe(true);

    expect(wrapper.find('Image').first().props().source.uri).toBe(logo);
  });
});
