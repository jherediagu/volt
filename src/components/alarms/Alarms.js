import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';


export default class Alarms extends Component {
    render() {
        return <Text style={styles.title}>Alarms</Text>;
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 3,
    },
});
