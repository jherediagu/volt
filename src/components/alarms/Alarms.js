import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Button } from 'react-native';

import Alarm from './Alarm';

export default class Alarms extends Component {

	onPressAddAlarm() {
		alert('onPressAddAlarm');
	}

	render() {
		return (
			<View style={styles.title}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					<Alarm />
					<Alarm />
					<Alarm />
				</ScrollView>
				<Button
					onPress={this.onPressAddAlarm}
					title="Add Alarm"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	title: {
		flex: 1,
		width: Dimensions.get('window').width,
	},
});