'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';

const Tail = (props) => (
	<div className={css(styles.tailRoot, styles.getPreset('size', props.size))}>
		<i
			className={css(
			styles.tail,
			styles.getPreset('direction', props.direction),
			...(props.styles || []))
		}
			style={{ background: props.color }}
		/>
	</div>
);

Tail.propTypes = {
	/**
	 * Tail direction
	 */
	direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
	/**
	 * Tail color
	 */
	color: PropTypes.string,
	/**
	 * Tail size
	 */
	size: PropTypes.oneOf(['xs', 's']),
	styles: PropTypes.arrayOf(PropTypes.string)
};

Tail.defaultProps = {
	color: '#fff',
	size: 's'
};

const styles = StyleSheet.create({
	tailRoot: {
		position: 'relative',
		display: 'inline-block',
		overflow: 'hidden',
	},
	tail: {
		display: 'block',
		position: 'absolute',
		left: '20%',
		top: '20%',
		right: '20%',
		bottom: '20%'
	},
	sizeS: {
		width: '14px',
		height: '14px'
	},
	sizeXs: {
		width: '10px',
		height: '10px'
	},
	directionLeft: {
		transform: 'translateX(85%) rotate(45deg)'
	},
	directionTop: {
		transform: 'translateY(85%) rotate(45deg)'
	},
	directionRight: {
		transform: 'translateX(-85%) rotate(45deg)'
	},
	directionBottom: {
		transform: 'translateY(-80%) rotate(45deg)'
	},
});

export default Tail;