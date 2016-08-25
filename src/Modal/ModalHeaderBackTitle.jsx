'use strict';

import React, { PropTypes } from 'react';
import Text from '../Text';

import { StyleSheet, css } from '../helpers/styles';
import { COLOR, FONT } from '../const/theme';

import Color from 'color';

const ModalHeaderBackTitle = (props) => (
	<Text onClick={props.onClick} styles={[styles.backTitle]}>
	   <span className={css(styles.arrow)}>
			{'\u2190'}
		</span>
		{'\u00a0'}
		{props.children}
	</Text>
);

ModalHeaderBackTitle.propTypes = {
	/**
	 * On click handler
	 */
	onClick: PropTypes.func
};
ModalHeaderBackTitle.__MODAL_HEADER_LEFT_LAYOUT__ = true;

const styles = StyleSheet.create({
	backTitle: {
		cursor: 'pointer',
		fontSize: FONT.SIZE_TITLE,
		lineHeight: FONT.LINE_HEIGHT_TITLE,
		fontWeight: 600,
		marginRight: '.5rem',
		color: COLOR.LINK_BUTTON,
		transition: 'color .15s ease-in',
		'&:hover': {
			color: Color(COLOR.LINK_BUTTON).darken(.3).rgbaString()
		}
	},
	arrow: {
		fontFamily: 'Arial'
	}
});

export default ModalHeaderBackTitle;
