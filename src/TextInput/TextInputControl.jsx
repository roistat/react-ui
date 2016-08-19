'use strict';

import React, { PropTypes } from 'react';
import View from '../View';

import { StyleSheet, css } from '../helpers/styles';
import { FONT, COLOR, SHADOW } from '../const/theme.js';
import { generateTextStyles } from './helpers';

export default class TextInputControl extends React.Component {
	static __TEXT_INPUT_CONTROL__ = true;

	static propTypes = {
		/**
		 * placeholder text
		 */
		placeholder: PropTypes.string,
		/**
		 * size of the input
		 */
		size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'title']),
		/**
		 * Is input field disabled.
		 */
		isDisabled: PropTypes.bool,
		/**
		 * text value of the input
		 */
		value: PropTypes.string,
		/**
		 * width value of the input
		 */
		width: PropTypes.string,
		/**
		 * text-align of the input text
		 */
		textAlign: PropTypes.oneOf(['left', 'center', 'right']),
		/**
		 * is multiline field (textarea)
		 */
		isMultiLine: PropTypes.bool,
		/**
		 * is input has autofocus after create
		 */
		autoFocus: PropTypes.bool,
		/**
		 * number of textarea rows
		 */
		rows: PropTypes.number,
		/**
		 * On change event handler
		 */
		onChange: PropTypes.func,
		/**
		 * On focus event handler
		 */
		onFocus: PropTypes.func,
		/**
		 * On blur event handler
		 */
		onBlur: PropTypes.func,
		/**
		 * On click event handler
		 */
		onClick: PropTypes.func,
		/**
		 * On keydown event handler
		 */
		onKeyDown: PropTypes.func,
		/**
		 * On keypress event handler
		 */
		onKeyPress: PropTypes.func,
		/**
		 * On keyup event handler
		 */
		onKeyUp: PropTypes.func
	};

	_renderControl() {
		const props = this.props;

		return React.createElement(
			props.isMultiLine ? 'textarea' : 'input',
			Object.assign({},
				{
					value: props.value,
					disabled: props.isDisabled,
					autoFocus: props.autoFocus,
					onFocus: props.onFocus,
					onBlur: props.onBlur,
					onChange: props.onChange,
					onKeyDown: props.onKeyDown,
					onKeyPress: props.onKeyPress,
					onKeyUp: props.onKeyUp,
					className: css(
						STYLE.control,
						STYLE.getPreset('size', props.size),
						props.isMultiLine && STYLE.textarea)
				},
				props.isMultiLine && { rows: props.rows }
			));
	}

	_renderPlaceholder() {
		const props = this.props;
		
		if (!props.placeholder || props.value) {
			return null
		}

		return (
			<div
				className={css(STYLE.placeholder, STYLE.getPreset('placeholderSize', props.size))}>
				{props.placeholder}
			</div>
		)
	}

	render() {
		return (
			<View styles={[STYLE.controlRoot]}>
				{this._renderPlaceholder()}
				<View styles={[STYLE.controlWrapper]}>
					{this._renderControl()}
				</View>
			</View>
		)
	}
}

const STYLE = StyleSheet.create(Object.assign(generateTextStyles(), generateTextStyles('placeholderSize'), {
	controlRoot: {
		position: 'relative',
		flex: 1
	},
	controlWrapper: {
		position: 'relative',
		flex: 1
	},
	control: {
		position: 'relative',
		display: 'inline-block',
		verticalAlign: 'top',
		margin: 0,
		padding: 0,
		border: 'none',
		outline: 'none',
		lineHeight: '1rem',
		background: 'transparent',
		minWidth: '40px',
		width: '100%',
		cursor: 'text',
		resize: 'vertical'
	},
	placeholder: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		color: COLOR.MUTED,
		background: 'transparent',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	textarea: {
		height: 'auto!important'
	}
}));

