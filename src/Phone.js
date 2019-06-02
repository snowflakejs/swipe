import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Phone = ({ phoneNumber, branch }) => {
  return (
    <View style={styles.phoneWrap}>
      <Text style={styles.phone}>Branch:</Text>
      <Text style={styles.phone}>{branch}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.phoneNumber}>{`(${phoneNumber}) 922-4240`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  phoneWrap: {
    flexDirection: 'column',
    marginBottom: 1,
    paddingBottom: 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
  },
  phone: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15a4f1',
    borderBottomColor: '#15a4f1',
    borderBottomWidth: 2,
  },
});

export default Phone;
