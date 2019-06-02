import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Day from './Day.js';

const Days = ({ list }) => (
    <View style={styles.daysWrap}>
      <Text style={styles.warningTxt}>If you take this job you are agreeing to work ALL DAYS.</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => <Day item={item}/> }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

const styles = StyleSheet.create({
  daysWrap: {
    flexDirection: 'column',
    marginBottom: 2,
    paddingBottom: 15,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
  },
  warningTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Days;
