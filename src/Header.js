
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = ({ title, name, rate, duration, imageUrl }) => {
  return (
    <View style={styles.headerWrap}>
      <Image
        style={styles.image}
        source={imageUrl ? {uri: imageUrl } : null }
      />
      <View style={styles.txtWrap}>
        <Text style={[styles.txt, styles.title]}>{title}</Text>
        <Text style={[styles.txt, styles.name]}>{name}</Text>
        <Text style={[styles.txt, styles.rate]}>{`$${rate}/hour`}</Text>
        <Text style={[styles.txt, styles.duration]}>{duration}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  txtWrap: {
    marginLeft: 5,
    flex: 1
  },

  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  image: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 19,
    color: '#333',
  },
  name: {
    fontSize: 17,
    color: '#999',
    textTransform: 'uppercase',
  },
  rate: {
    color: '#999',
  },
  duration: {
    color: '#777',
  },
});


export default Header;
