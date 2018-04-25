import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
	background-color: papayawhip;
	width: 125px;
	height: 75px;
	margin-left: 20px;
	border-radius: 5px;
	padding: 4px;
`;

export default class Alarm extends Component {
	render() {
		return (
			<StyledView>
				<Text>Alarm</Text>
			</StyledView>
		);
	}
}
