import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import moment from "moment";

const Day = ({ item }) => {
  const { startDate } = item;
  const hr = moment(startDate).format("hh:mm a").toUpperCase();
  const arr = moment(startDate).toString().split(' ');
  const tz = arr[5].substring(0, 3);
  const time = Number(hr.split(':')[0]).toString() + ':' + hr.split(':')[1];
  return (
    <View style={styles.tr}>
      <Text style={[styles.td, styles.day]}>{`${arr[0]},`}</Text>
      <Text  style={[styles.td, styles.month]}>{`${arr[1]} ${Number(arr[2]).toString()}`}</Text>
      <Text  style={[styles.td, styles.time]}>{`${time} ${tz}`}</Text>
    </View>);
};

const styles = StyleSheet.create({
  tr: { flexDirection: 'row',},
  td: {
    fontWeight: 'bold',
    fontSize: 17
  },
  day: { width: 50, },
  month: { width: 70,},
  time: { width: 120, },
});

export default Day;
