'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import View from '../View';
import PopupTail from './PopupTail.jsx';

import addEventListener from '../helpers/addEventListener.js';
import { SHADOW } from '../const/theme.js';

import { StyleSheet, css } from '../helpers/styles';

export default class Popup extends React.Component {
	static propTypes = {
		/**
		 * is autoCloseable popup
		 */
		autoCloseable: PropTypes.bool,
		/**
		 * On close event handler
		 */
		onClose: PropTypes.func,
		/**
		 * is popup has tail
		 */
		hasTail: PropTypes.bool,
		/**
		 * popup tail direction
		 */
		tailSide: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		/**
		 * is rounded popup
		 */
		isRounded: PropTypes.bool
	};

	constructor(props, context) {
		super(props, context);
		this._targetNode = props.target ? ReactDOM.findDOMNode(props.target) : null;
	}

	componentDidMount() {
		const props = this.props;
		
		// TODO: remove favore AutoClosable component
		if (this.props.autoCloseable && typeof document !== 'undefined') {
			var node = ReactDOM.findDOMNode(this);
			this._removeOutsideClickListener = addEventListener(document, 'click', (event) => {
				if (!node.contains(event.target) &&
					!(props.target && props.target.contains(event.target))) {
						this._close();
					}
				});

			this._removeKeyDownlickListener = addEventListener(document, 'keydown', (event) => {
				if (event.keyCode === 27) {
					this._close();
				}
			});
		}
	}

	componentWillUnmount() {
		this._removeOutsideClickListener && this._removeOutsideClickListener.remove();
		this._removeKeyDownlickListener && this._removeKeyDownlickListener.remove();
	}

	_close() {
		this.props.onClose && this.props.onClose();
	}

	_getTailName() {
		const props = this.props;
		return `${props.tailSide.replace(/^\w/, (s) => s)}`;
	}

	_renderTail() {
		return (
			<PopupTail direction = { this._getTailName() } />
		)
	}

	render() {
		const props = this.props;

		return (
			<View styles={[styles.root, props.isRounded && styles.rootRounded, ...(props.styles || [])]} >
				{this.props.children}
				{this.props.hasTail && this._renderTail()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	root: {
		position: 'relative',
		background: '#fff',
		boxShadow: SHADOW.POPUP,
		padding: '10px',
		zIndex: 999,
		flexDirection: 'column',
		alignItems: 'stretch'
	},
	rootRounded: {
		borderRadius: '4px'
	}
});

