'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import View from '../View';
import PopupTail from './PopupTail.jsx';

import addEventListener from '../helpers/addEventListener.js';
import { SHADOW } from '../const/theme.js';

import { StyleSheet, css } from '../helpers/styles';

export default class Popup extends React.Component {
	static propTypes = {
		/**
		 * is popup has tail
		 */
		hasTail: PropTypes.bool,
		/**
		 * Tail direction
		 */
		tailDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		/**
		 * Tail color
		 */
		tailColor: PropTypes.string,
		/**
		 * is rounded popup
		 */
		isRounded: PropTypes.bool
	};

	_renderTail() {
		const props = this.props;

		return (
			<PopupTail direction={props.tailDirection} color={props.tailColor} />
		)
	}

	render() {
		const props = this.props;

		return (
			<View styles={[styles.root, props.isRounded && styles.rootRounded, ...(props.styles || [])]} >
				{this.props.children}
				{this.props.hasTail && this._renderTail()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	root: {
		position: 'relative',
		background: '#fff',
		boxShadow: SHADOW.POPUP,
		padding: '10px',
		zIndex: 999,
		flexDirection: 'column',
		alignItems: 'stretch'
	},
	rootRounded: {
		borderRadius: '4px'
	}
});

