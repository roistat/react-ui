'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import FontIcon from '../FontIcon';

import { StyleSheet } from '../helpers/styles';
import { COLOR, FONT } from '../const/theme';

const ModalHeaderToolbarItem = (props) => (
	<View
		styles={[styles.container, styles.fontIcon]}
		onClick={props.onClick}>
		<FontIcon name={props.iconName} />
	</View>
);

ModalHeaderToolbarItem.propTypes = {
	/**
	 * FontIcon name
	 */
	iconName: PropTypes.string,
	/**
	 * On click handler
	 */
	onClick: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		width: '1.5rem',
		justifyContent: 'center',
		alignItems: 'center',
		lineHeight: '2rem',
		cursor: 'pointer'
	},
	fontIcon: {
		color: COLOR.MUTED,
		fontSize: FONT.SIZE_SUBHEAD,
		lineHeight: '2rem'
	}
});

export default ModalHeaderToolbarItem;

