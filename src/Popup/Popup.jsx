'use strict';

import React, { PropTypes } from 'react';

import View from '../View';

import { SHADOW } from '../const/theme.js';
import { StyleSheet, css } from '../helpers/styles';

export default class Popup extends React.Component {
	static propTypes = {
		isRounded: PropTypes.bool
	};

	render() {
		const { styles, isRounded, children }  = this.props;

		return (
			<View styles={[STYLES.popup, isRounded && STYLES.rounded, ...(styles || [])]} >
				{children}
			</View>
		)
	}
}

const STYLES = StyleSheet.create({
	popup: {
		position: 'relative',
		background: '#fff',
		boxShadow: SHADOW.POPUP,
		padding: '10px',
		zIndex: 999,
		flexDirection: 'column',
		alignItems: 'stretch'
	},
	rounded: {
		borderRadius: '4px'
	}
});

