import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Title extends Component {
  render() {
    return <Text style={styles.title}>Volt</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    height: 110,
    fontSize: 40,
    paddingTop: 50,
    paddingLeft: 15,
    fontWeight: '700',
    fontFamily: 'System',
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
