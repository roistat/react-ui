'use strict';

import React, { PropTypes } from 'react';
import View from '../View';

import { StyleSheet, css, buildShadowBorder } from '../helpers/styles';
import { COLOR } from '../const/theme';

const ModalHeaderToolbar = (props) => (
	<View styles={[styles.headerToolbar]}>
		{props.children}
	</View>
);

ModalHeaderToolbar.__MODAL_HEADER_ITEM__ = true;
ModalHeaderToolbar.__MODAL_HEADER_RIGHT_LAYOUT__ = true;

const styles = StyleSheet.create({
	headerToolbar: {
		position: 'relative',
		boxShadow: buildShadowBorder('0 0 0 1', COLOR.DIVIDER_GROUP),
		justifyContent: 'stretch',
		padding: '0 .3rem',
		height: '2rem'
	}
});

export default ModalHeaderToolbar;
