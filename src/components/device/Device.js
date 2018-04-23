import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Device extends Component {
  render() {
    return (<View style={styles.viewInfo}>
      <Text style={styles.device}>iPhone X</Text>
      <Text style={styles.title}>Battery info</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  device: {
    fontSize: 15,
    paddingLeft: 15,
    fontFamily: 'System',
  },
  viewInfo: {
    flex: 2,
  },
  title: {
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: '700',
    fontFamily: 'System',
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
