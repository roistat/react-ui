'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import Control from './TextInputControl';

import { FONT, COLOR, SHADOW } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';
import { generateTextStyles } from './helpers';

export default class TextInput extends React.Component {
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

	static defaultProps = {
		value: '',
		size: 'm',
		placeholder: '',
		isDisabled: false,
		textAlign: 'left',
		multiLine: false,
		rows: 3
	};

	constructor(props) {
		super(props);
		this.state = {
			isFocused: false,
			value: this.props.value
		};

		this._onFocusHandler = this._onFocusHandler.bind(this);
		this._onBlurHandler= this._onBlurHandler.bind(this);
		this._onChangeHandler = this._onChangeHandler.bind(this);
		this._onKeyDownHandler = this._onKeyDownHandler.bind(this);
		this._onKeyPressHandler = this._onKeyPressHandler.bind(this);
		this._onKeyUpHandler = this._onKeyUpHandler.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({ value: newProps.value });
	}

	_onFocusHandler(event) {
		const props = this.props;

		this.setState({ isFocused: true });
		props.onFocus && props.onFocus(event);
	}

	_onBlurHandler(event) {
		const props = this.props;

		this.setState({ isFocused: false });
		props.onBlur && props.onBlur(event);
	}

	_onChangeHandler(event) {
		const value = event.target.value;
		this.setState({ value: value });

		this.props.onChange && this.props.onChange(value);
	}

	_onKeyDownHandler(event) {
		const props = this.props;

		props.onKeyDown && props.onKeyDown(event);
	}

	_onKeyPressHandler(event) {
		const props = this.props;

		props.onKeyPress && props.onKeyPress(event);
	}

	_onKeyUpHandler(event) {
		const props = this.props;

		props.onKeyPress && props.onKeyPress(event);
	}

	_cloneControl(control) {
		const props = this.props;

		return React.cloneElement(
			control,
			{
				...props,
				value: this.state.value,
				rows: props.rows,
				isDisabled: props.isDisabled,
				autoFocus: props.autoFocus,
				onFocus: this._onFocusHandler,
				onBlur: this._onBlurHandler,
				onChange: this._onChangeHandler,
				onKeyDown: this._onKeyDownHandler,
				onKeyPress: this._onKeyPressHandler,
				onKeyUp: this._onKeyUpHandler
			}
		)
	}

	_renderChildren() {
		return React.Children.map(this.props.children, (item) => {
			if (item.type.__TEXT_INPUT_CONTROL__) {
				return this._cloneControl(item);
			}
			return item;
		})
	}

	render() {
		const props = this.props;
		return (
			<View
				style={{ width: this.props.width }}
				onClick={props.onClick}
				styles={[
					STYLE.textInput,
					props.isMultiLine && STYLE.isMultiLine,
					this.state.isFocused && STYLE.isFocused,
					props.isDisabled && STYLE.isDisabled,
					...(props.styles || [])
				]}>
				{this.props.children ? this._renderChildren() : this._cloneControl(<Control/>)}
			</View>
		)
	}
}

const STYLE = StyleSheet.create(Object.assign(generateTextStyles(), {
	textInput: {
		position: 'relative',
		background: '#fff',
		width: '100%',
		borderRadius: '4px',
		boxSizing: 'border-box',
		alignItems: 'center',
		border: '1px solid',
		borderColor: COLOR.BORDER,
		boxShadow: SHADOW.INPUT,
		fontFamily: FONT.FAMILY,
		fontWeight: '400',
		flexWrap: 'wrap'
	},
	isDisabled: {
		color: COLOR.MUTED,
		background: COLOR.DISABLED,
		cursor: 'not-allowed'
	},
	isFocused: {
		boxShadow: `${SHADOW.FOCUS}, inset 0px 1px 2px 0px rgba(27, 42, 48, 0.3)`
	},
	isMultiLine: {
		height: 'auto',
		paddingRight: 0
	}
}));

