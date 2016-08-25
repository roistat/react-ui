'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import TextInput from '../TextInput';

import { StyleSheet, css } from '../helpers/styles';

const ModalHeaderEditableTitle = (props) => (
	<View styles={[styles.editableTitle]}>
		<TextInput
			onChange={props.onChange}
			value={props.children}
			size='title'
			autoFocus
		/>
	</View>
);

ModalHeaderEditableTitle.propTypes = {
	/**
	 * On change EditableTitle handler
	 */
	onChange: PropTypes.func,
	/**
	 * EditableTitle children
	 */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ModalHeaderEditableTitle.__MODAL_HEADER_LEFT_LAYOUT__ = true;

const styles = StyleSheet.create({
	editableTitle: {
		maxWidth: '240px'
	}
});

export default ModalHeaderEditableTitle;
