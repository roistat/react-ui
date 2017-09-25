'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import CloseCross from '../CloseCross';

import { SHADOW } from '../const/theme.js';
import { StyleSheet, css } from '../helpers/styles';

export default class Popup extends React.Component {
	static propTypes = {
		isRounded: PropTypes.bool,
		isHasClose: PropTypes.bool,
		onClose: PropTypes.func
	};

	render() {
		const { styles, isRounded, onClose, children }  = this.props;

		return (
			<View styles={[STYLES.popup, isRounded && STYLES.rounded, ...(styles || [])]} >
				{React.Children.map(children, (child) => {
					if (typeof child !== 'object') {
						return child;
					}

					return React.cloneElement(child, { onClose: onClose }) })
				}
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
	},
	close: {
		position: 'absolute',
		top: '.8rem',
		right: '.6rem'
	}
});

