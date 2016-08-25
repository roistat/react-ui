'use strict';

import React, { PropTypes } from 'react';
import View from '../View';

import { COLOR } from '../const/theme';
import { StyleSheet, css } from '../helpers/styles';

const ModalBody = (props) => (
	<View styles={[STYLE.body, STYLE.getPreset('theme', props.theme), ...(props.styles || [])]}>
		{props.children}
	</View>
);

ModalBody.propTypes = {
	/**
	 * ModalBody theme
	 */
	theme: PropTypes.oneOf(['gray', 'normal'])
};

ModalBody.defaultProps = {
	theme: 'normal'
};

const STYLE = StyleSheet.create({
	body: {
		padding: '1rem .8rem',
		flex: 1
	},
	themeNormal: {
		background: '#fff'
	},
	themeGray: {
		background: COLOR.BACKGROUND
	}
});

export default ModalBody;
