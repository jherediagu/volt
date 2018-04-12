import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// TODO: import info device

// components
import Title from './components/title/Title';
import Menu from './components/menu/Menu';
import Chart from './components/chart/Chart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title />
          <Menu />
        </View>
        <Chart />
        <View>
          <BatteryName />
          <BatteryLevel />
        </View>
        <Alarms />
        <ChartBars />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
