'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Toggler extends React.Component {
	static propTypes = {
		/**
		 * Initial value
		 */
		value: PropTypes.boolean,
		/**
		 * Wrapper function
		 */
		children: PropTypes.func.isRequired
	};

	static defaultProps = {
		value: false
	};

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: !!props.value
		};

		this._controlDOMNode = null;
	}

	toggle() {
		this.setState({ value: !this.state.value });
	}

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error('Toggler component: children must be a function');
		}

		return React.cloneElement(
			this.props.children(this.state.value, this._controlDOMNode, this.toggle.bind(this)),
			{
				onClick: () => this.toggle(),
				ref: (c) => c && (this._controlDOMNode = ReactDOM.findDOMNode(c))
			})
	}
}
