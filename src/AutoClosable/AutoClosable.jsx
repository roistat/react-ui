'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import addEventListener from '../helpers/addEventListener';

export default class AutoClosable extends React.Component {
	static propTypes = {
		/**
		 * On close event handler
		 */
		onClose: PropTypes.func,
		/**
		 * Optional parent dom node, click event on parent dom node don't fire close event
		 */
		parentDOMNode: PropTypes.object
	};

	componentDidMount() {
		const props = this.props;
		const parentNode = props.parentDOMNode;

		this._removeOutsideClickListener = addEventListener(document, 'click', (event) => {
			if (!(parentNode && parentNode.contains(event.target)) &&
				!this._node.contains(event.target)) {
				this._emitClose();
			}
		});

		this._removeKeyDownlickListener = addEventListener(document, 'keydown', (event) => {
			if (event.keyCode === 27) {
				this._emitClose();
			}
		});
	}

	_emitClose() {
		const props = this.props;
		props.onClose && props.onClose();
	}

	componentWillUnmount() {
		this._removeOutsideClickListener && this._removeOutsideClickListener.remove();
		this._removeKeyDownlickListener && this._removeKeyDownlickListener.remove();
	}

	render() {
		const props = this.props;

		return React.Children.only(React.cloneElement(
			props.children, { ref: (c) => { c && (this._node = ReactDOM.findDOMNode(c))} }));
	}
}

