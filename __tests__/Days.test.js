import 'react-native';
import React from 'react';
import Days from '../src/Days';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const shifts = [{
    "startDate": "2016-09-04T21:00:00Z",
    "endDate": "2016-09-05T05:00:00Z",
  },
  {
    "startDate": "2016-09-05T21:00:00Z",
    "endDate": "2016-09-06T05:00:00Z",
  },
  {
    "startDate": "2016-09-06T21:00:00Z",
    "endDate": "2016-09-07T05:00:00Z",
  }];

describe('Days component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Days list={shifts}/>);

    expect(wrapper.find('Text').length).toBe(1);

    expect(wrapper.find('Text').at(0).contains('If you take this job you are agreeing to work ALL DAYS.')).toBe(true);

    expect(wrapper.find('FlatList').first().props().data).toBe(shifts);
  });
});
