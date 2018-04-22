import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// TODO: import info device

// components
import Title from './components/title/Title';
// import Menu from './components/menu/Menu';
import Chart from './components/chart/Chart';
import Device from './components/device/Device';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Title />
          {/* <Menu /> */}
        </View>
        <Chart />
        <View>
          <Device />
        </View>
        {/* <Alarms />
        <ChartBars /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
