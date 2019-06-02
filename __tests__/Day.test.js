import 'react-native';
import React from 'react';
import Day from '../src/Day';
import moment from "moment";

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import {StyleSheet, Text, View, FlatList} from 'react-native';

const item = {
    "startDate": "2016-09-04T21:00:00Z",
    "endDate": "2016-09-05T05:00:00Z",
  };

describe('Days component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Day item={item} />);

    expect(wrapper.find('Text').length).toBe(3);

    expect(wrapper.find('Text').at(0).contains('Mon,')).toBe(true);

    expect(wrapper.find('Text').at(1).contains('Sep 5')).toBe(true);

    expect(wrapper.find('Text').at(2).contains('7:00 AM GMT')).toBe(true);

  });
});
