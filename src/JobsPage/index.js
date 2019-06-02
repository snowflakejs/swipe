// @format
// @flow
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator, Dimensions} from 'react-native';

import Header from '../Header.js';
import Footer from '../Footer.js';
import Days from '../Days.js';
import Location from '../Location.js';
import Phone from '../Phone.js';

import { fetchData } from '../api/api.js';

const nav = {
  title: 'Jobs Available',
  headerStyle: {
    backgroundColor: '#3ab4e8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 26,
    backgroundColor: '#15a4f1',
    padding: 0,
    paddingLeft: 3,
    paddingTop: 3,
    paddingBottom: 3,
    width: 200,
  },
}

const initData = {
  title: '',
  company: '',
  shifts: [],
  rate: '',
  branch: '',
  branchPhoneNumber: '',
  name: '',
  address: '',
  logo: '',
  duration: ''
};

type Props = {};
class JobsPage extends Component<Props> {
  static navigationOptions = nav;

  state = {
    isLoading: false,
    data: initData
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchData().then((response) => {
      this.setState({
        isLoading: false,
        data: response.value
      });
    })
  }

  render() {
    const { data, isLoading } = this.state;
    const {
      title,
      name,
      rate,
      shifts,
      logo,
      duration,
      branchPhoneNumber,
      branch,
      address,
    } = data;

    return (
      <ScrollView style={styles.wrapper}>
        {isLoading ? (
          <ActivityIndicator size='large' style={styles.spinner}/>
        ) : (
          <View style={styles.container}>
            <Header
              title={title}
              name={name}
              rate={rate}
              duration={duration}
              imageUrl={logo}
            />
            <Days list={shifts}/>
            <Location address={address}/>
            <Phone phoneNumber={branchPhoneNumber} branch={branch}/>
            <Footer />
          </View>
        )}
      </ScrollView>
    );
  }
}

export default JobsPage;

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#ddd', },
  container: {
    marginTop: 1,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  spinner: {
    height: Dimensions.get("window").height - 100,
  }
});
