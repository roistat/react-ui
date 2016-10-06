'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';
import { SHADOW } from '../const/theme.js';

const Tail = ({ size, color, isHasShadow, direction, styles, style }) => {
	const tailSize = Math.sqrt(2 * Math.pow(size / 2, 2));

	return (
		<div
			style={{ width: size, height: size, ...(style || {})}}
			className={css(STYLES.tailRoot, ...(styles || []))}>
			<i
				className={css(STYLES.tail, isHasShadow && STYLES.shadow)}
				style={{
					width: tailSize,
					height: tailSize,
					background: color,
				 	transform: getTailTransform(direction, size)
				}}
			/>
		</div>
	)
};

Tail.propTypes = {
	/**
	 * Is tail has shadow
	 */
	isHasShadow: PropTypes.bool,
	/**
	 * Tail direction
	 */
	direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
	/**
	 * Tail color
	 */
	color: PropTypes.string,
	/**
	 * Custom tail size in px
	 */
	size: PropTypes.number,
	/**
	 * Extra styles
	 */
	styles: PropTypes.arrayOf(PropTypes.string)
};

Tail.defaultProps = {
	color: '#fff',
	size: 14
};

const getTailTransform = (direction, size) => {
	switch (direction) {
		case 'top':
			return `translate3d(${size / 2}px, ${size + size / 2}px, 0) rotate(225deg)`;
		case 'right':
			return `translate3d(0, ${size}px, 0) rotate(225deg)`;
		case 'bottom':
			return `translate3d(${size / 2}px, ${size / 2}px, 0) rotate(225deg)`;
		case 'left':
			return `translate3d(${size}px, ${size}px, 0) rotate(225deg)`;
	}
};

const STYLES = StyleSheet.create({
	tailRoot: {
		position: 'relative',
		display: 'inline-block',
		overflow: 'hidden',
	},
	tail: {
		position: 'absolute',
		display: 'block',
		transformOrigin: 'top left'
	},
	shadow: {
		boxShadow: '0px 0px 6px rgba(114, 125, 129, .75)'
	}
});

export default Tail;