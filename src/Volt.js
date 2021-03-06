import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// TODO: import info device

// components
import Title from './components/title/Title';
// import Menu from './components/menu/Menu';
import Chart from './components/chart/Chart';
import Device from './components/device/Device';
import Battery from './components/battery/Battery';
import Alarms from './components/alarms/Alarms';
import AccumulatedChart from './components/accumulated-chart/AccumulatedChart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <Title />
          {/* <Menu /> */}
        </View>
        <Chart />
        <View style={styles.inline}>
          <Device />
          <Battery />
        </View>
        <Alarms />
        <AccumulatedChart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
