import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Battery extends Component {
    render() {
        return <Text style={styles.title}>80%</Text>;
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 40,
        paddingTop: 10,
        paddingLeft: 15,
        fontWeight: '700',
        fontFamily: 'System',
        backgroundColor: 'green',
        justifyContent: 'center',
    },
});
