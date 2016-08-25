'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

var idCount = 0;

export default class Teleport extends React.Component {
	static contextTypes = {
		teleport: PropTypes.shape({
			move: PropTypes.func,
			remove: PropTypes.func,
			update: PropTypes.func,
			isAdded: PropTypes.func,
			getRootDOMNode: PropTypes.func,
			getBoundingClientRect: PropTypes.func,
			getContextLevel: PropTypes.func
		})
	};

	constructor(...args) {
		super(...args);

		this._componentID = `${Math.random().toString(36)}:${++idCount}`;
		this._parentDOMNode = null;
	}

	componentDidMount() {
		this._parentDOMNode = ReactDOM.findDOMNode(this).parentNode;

		if (this.context.teleport.isAdded(this._componentID)) {
			this._update(this.props.children);

			return;
		}

		this._moveToDestination();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.children !== this.props.children) {
			this._update(nextProps.children);
		}

		this._update(nextProps.children);
	}

	componentWillUnmount() {
		this._destroy();
	}

	getParentDOMNode() {
		return this._parentDOMNode || null;
	}

	getRootDOMNode() {
		return this.context.teleport.getRootDOMNode();
	}

	getParentBoundingClientRect() {
		return this._parentDOMNode ? this._parentDOMNode.getBoundingClientRect() : null;
	}

	_moveToDestination(callback: () => void) {
		this.context.teleport.move(this._componentID, this._getValidChildren(), callback);
	}

	_update(newChildren: Object, callback: () => void) {
		this.context.teleport.update(this._componentID, newChildren, callback);
	}

	_destroy(callback: () => void) {
		this.context.teleport.remove(this._componentID, callback);
	}

	_getValidChildren(children) {
		children = children || this.props.children;

	return typeof children === 'string' || typeof children === 'number' ?
		children :
		React.Children.only(children)
	}

	render() {
		return (
			<div />
		)
	}
}
