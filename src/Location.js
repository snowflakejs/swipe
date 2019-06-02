import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Location = ({ address }) => {

  return (
    <View style={styles.locationWrap}>
      <Text style={styles.location}>Location</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  locationWrap: {
    flexDirection: 'column',
    marginBottom: 2,
    paddingBottom: 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3ab4e8',
    borderBottomColor: '#15a4f1',
    borderBottomWidth: 2,
  },
});

export default Location;
