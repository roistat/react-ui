'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import View from '../View';
import Control from './TextInputControl.jsx';

import { FONT, COLOR, SHADOW } from '../const/theme.js';

import { StyleSheet, css } from '../helpers/styles';

export default class TextInput extends React.Component {
	static propTypes = {
		placeholder: PropTypes.string,
		validateState: PropTypes.oneOf(['success', 'warning', 'error']),
		size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'title']),
		isDisabled: PropTypes.bool,
		value: PropTypes.string,
		width: PropTypes.string,
		textAlign: PropTypes.oneOf(['left', 'center', 'right']),
		isMultiLine: PropTypes.bool,
		autoFocus: PropTypes.bool,
		rows: PropTypes.number,
		onChange: PropTypes.func,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		onClick: PropTypes.func,
		onKeyDown: PropTypes.func,
		onKeyPress: PropTypes.func,
		onKeyUp: PropTypes.func
	};

	static defaultProps = {
		value: '',
		size: 'm',
		placeholder: 'rrr',
		isDisabled: false,
		textAlign: 'left',
		multiLine: false,
		rows: 3
	};

	constructor(props) {
		super(props);
		console.log(props);
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
		let props = this.props;

		this.setState({ isFocused: true });
		props.onFocus && props.onFocus(event);
	}

	_onBlurHandler(event) {
		let props = this.props;

		this.setState({ isFocused: false });
		props.onBlur && props.onBlur(event);
	}

	_onChangeHandler(event) {
		let value = event.target.value;

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
			})
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
				style={{ width:this.props.width }}
				onClick={props.onClick}
				className={
					css(
						STYLE.root,
						STYLE[`rootSize${(props.size || 'm').toUpperCase()}`],
						props.isMultiLine && STYLE.isMultiLine,
						this.state.isFocused && STYLE.rootIsFocused,
						props.isDisabled && STYLE.rootIsDisabled,
					)
				}>
				{this.props.children ? this._renderChildren() : this._cloneControl(<Control/>)}
			</View>
		)
	}
}

const STYLE = StyleSheet.create({
	root: {
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
	rootIsDisabled: {
		color: COLOR.MUTED,
		background: COLOR.DISABLED,
		cursor: 'not-allowed'
	},
	rootSizeXL: {
		height: '2rem',
		lineHeight: '2rem',
		padding: '0 .4rem',
		fontSize: FONT.SIZE_BUTTON_LARGE
	},
	rootSizeL: {
		height: '1.8rem',
		lineHeight: '1.8rem',
		padding: '0 .3rem',
		fontSize: FONT.SIZE_BUTTON
	},
	rootSizeM: {
		height: '1.6rem',
		lineHeight: '1.6rem',
		padding: '0 .2rem',
		fontSize: FONT.SIZE_BUTTON_SMALL
	},
	rootSizeS: {
		height: '1.4rem',
		lineHeight: '1.4rem',
		padding: '0 .2rem',
		fontSize: FONT.SIZE_BUTTON_TINY
	},
	rootSizeXS: {
		height: '1.2rem',
		lineHeight: '1.2rem',
		padding: '0 .2rem',
		fontSize: FONT.SIZE_BUTTON_TINY
	},
	rootSizeTITLE: {
		height: '1.6rem',
		lineHeight: '1.6rem',
		padding: '0 .2rem',
		fontSize: FONT.SIZE_TITLE,
		fontWeight: 700
	},
	rootIsFocused: {
		boxShadow: `${SHADOW.FOCUS}, inset 0px 1px 2px 0px rgba(27, 42, 48, 0.3)`
	},
	isMultiLine: {
		height: 'auto',
		paddingRight: 0
	}
});
