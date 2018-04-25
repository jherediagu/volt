import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class Chart extends Component {
  render() {
    const fill = 'rgb(134, 65, 244)';
    const data = [50, 10, 40, 95, 4, 24, 85, 35, 53, 53, 24, 50, 20, 80, 4, 24, 85, 35, 53, 53, 24, 50, 20, 80, 4, 24, 85, 35, 53, 53, 40];

    return (
      <BarChart
        style={{
          width: Dimensions.get('window').width,
          height: 70,
        }}
        data={data}
        svg={{ fill }}
      >
      </BarChart>
    );
  }
}
