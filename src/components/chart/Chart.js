import React, { Component } from 'react';
import ChartView from 'react-native-highcharts';
import { StyleSheet, View, Dimensions } from 'react-native';


export default class Chart extends Component {
  render() {
    let Highcharts = 'Highcharts';
    let conf = {
      title: {
        text: '',
      },
      chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            // set up the updating of the chart each second
            let series = this.series[0];
            setInterval(function () {
              let x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
      },
      yAxis: {
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          let data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        }()),
      }],
    };

    const options = {
      global: {
        useUTC: false,
      },
      lang: {
        decimalPoint: ',',
        thousandsSep: '.',
      },
    };

    return (
      <View style={styles.container}>
        <ChartView
          style={{ height: 300, width: Dimensions.get('window').width }}
          config={conf}
          options={options}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
