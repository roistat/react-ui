'use strict';

import React, { PropTypes } from 'react';

export default class StateProvider extends React.Component {
	static propTypes = {
		/**
		 * Initial state
		 */
		state: PropTypes.object,
		/**
		 * Wrapper function
		 */
		children: PropTypes.func.isRequired
	};

	static defaultProps = {
		state: {}
	};

	constructor(props, context) {
		super(props, context);
		this.state = props.state || {};
	}

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error('StateProvider component: children must be a function');
		}

		return (
			<div>
				{this.props.children(this.state, (...args) => this.setState(...args))}
			</div>
		)
	}
}
