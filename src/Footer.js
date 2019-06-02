import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Footer = () => {

  return (
    <View style={styles.footerWrap}>
      <Text style={styles.btn}>NO THANKS</Text>
      <Text style={styles.btn}>I'LL TAKE IT</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    borderTopColor: '#bbb',
    borderTopWidth: 1,
  },
  btn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15a4f1',
  },
});

export default Footer;
