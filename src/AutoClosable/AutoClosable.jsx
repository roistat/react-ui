'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import addEventListener from '../helpers/addEventListener.js';

export default class AutoClosable extends React.Component {
	static propTypes = {
		/**
		 * On close event handler
		 */
		onClose: PropTypes.func,
		/**
		 * Parent component of autoclosable element
		 */
		parentComponent: PropTypes.object
	};

	componentDidMount() {
		const props = this.props;
		const parentNode = this._getParentDOMNode();

		this._removeOutsideClickListener = addEventListener(document, 'click', (event) => {
			if (!(parentNode && parentNode.contains(event.target)) &&
					!this._node.contains(event.target) &&
						!(props.targetNode && props.targetNode.contains(event.target))) {
				this._emitClose();
			}
		});

		this._removeKeyDownlickListener = addEventListener(document, 'keydown', (event) => {
			if (event.keyCode === 27) {
				this._emitClose();
			}
		});
	}

	_getParentDOMNode() {
		const props = this.props;

		if (!this._parentNode) {
			this._parentNode = (props.parentComponent && ReactDOM.findDOMNode(props.parentComponent));
		}
		return this._parentNode;
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

