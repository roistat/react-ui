'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';

export default class PopupTail extends React.Component {
	static propTypes = {
		/**
		 * PopupTail direction
		 */
		direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
		/**
		 * tail color
		 */
		color: PropTypes.string
	};

	render() {
		const props = this.props;
		console.log(props.color);
		return (
			<i className={css(STYLE.root, STYLE[props.direction])}
				style={{ 
					borderBottomColor: props.direction === 'top' && (props.color),
					borderLeftColor: props.direction === 'right' && (props.color),
					borderTopColor: props.direction === 'bottom' && (props.color),
					borderRightColor: props.direction === 'left' && (props.color)
				}}
			/>
		)
	}
}

const STYLE = StyleSheet.create({
	root: {
		position: 'absolute',
		width: 0,
		height: 0
	},
	top: {
		top: '-5px',
		left: '50%',
		transform: 'translateX(-50%)',
		msTransform: 'translateX(-50%)',
		borderLeft: '5px solid transparent',
		borderRight: '5px solid transparent',
		borderBottom: '5px solid #006498'
	},
	right: {
		top: '50%',
		right: '-5px',
		transform: 'translateY(-50%)',
		msTransform: 'translateY(-50%)',
		borderTop: '5px solid transparent',
		borderBottom: '5px solid transparent',
		borderLeft: '5px solid #006498'
	},
	bottom: {
		bottom: '-5px',
		left: '50%',
		transform: 'translateX(-50%)',
		msTransform: 'translateX(-50%)',
		borderLeft: '5px solid transparent',
		borderRight: '5px solid transparent',
		borderTop: '5px solid #006498'
	},
	left: {
		top: '50%',
		left: '-5px',
		transform: 'translateY(-50%)',
		msTransform: 'translateY(-50%)',
		borderTop: '5px solid transparent',
		borderBottom: '5px solid transparent',
		borderRight: '5px solid #006498'
	}
});

