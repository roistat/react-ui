'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';

import { COLOR } from '../const/theme';
import Icon from '../SVGIcons/CloseCross';

export default class CloseCross extends React.Component {
	static propTypes = {
		/**
		 * Size of CloseCross icon
		 */
		size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
		/**
		 * is animation used, when hovered
		 */
		isHasHover: PropTypes.bool
	};

	static defaultProps = {
		size: 'm',
		isHasHover: false
	};

	render() {
		const { size, styles, isHasHover, ...rest } = this.props;

		return (
			<div
				{...rest}
				className={css(
					STYLE.closeCross,
					STYLE.getPreset('size', size),
					isHasHover && STYLE.closeCrossHover,
					...(styles || []))
				}>
				<Icon color={COLOR.TEXT} />
			</div>
		)
	}
}

const STYLE = StyleSheet.create({
	closeCross: {
		cursor: 'pointer',
		verticalAlign: 'top',
		height: '16px',
		width: '16px',
		lineHeight: '16px'
	},
	closeCrossHover: {
		'&:hover path': {
			stroke: COLOR.MUTED,
			transition: 'all 0.15s'
		}
	},
	sizeL: {
		fontSize: '1.4rem'
	},
	sizeM: {
		fontSize: '1.2rem'
	},
	sizeS: {
		fontSize: '1rem'
	},
	sizeXs: {
		fontSize: '.8rem'
	}

});
