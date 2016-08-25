'use strict';

import React, { PropTypes } from 'react';
import Text from '../Text';

import { StyleSheet, css } from '../helpers/styles';
import { COLOR, FONT } from '../const/theme';

const ModalHeaderSubtitle = (props) => (
	<Text styles={[styles.headerSubtitle]}>
		{props.children}
	</Text>
);

ModalHeaderSubtitle.__MODAL_HEADER_LEFT_LAYOUT__ = true;

const styles = StyleSheet.create({
	headerSubtitle: {
		fontSize: FONT.SIZE_TEXT,
		lineHeight: FONT.LINE_HEIGHT_TEXT,
		color: COLOR.MUTED,
		marginRight: '.5rem'
	}
});

export default ModalHeaderSubtitle;

