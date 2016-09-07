'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Tail from '../Tail';
import { StyleSheet, css } from '../helpers/styles';

const INVERTED_DIRECTION = {
	top: 'bottom',
	right: 'left',
	bottom: 'top',
	left: 'right'
};

export default class Popover extends React.Component {
	static propTypes = {
		/**
		 * Tail direction
		 */
		tailDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
		/**
		 * Tail color
		 */
		tailColor: PropTypes.string,
		/**
		 * Popover appearance delay
		 */
		delay: PropTypes.number
	};

	componentDidMount() {
		const props = this.props;

		setTimeout(() => this._reflow(), props.delay || 0);
	}

	_reflow() {
		if (this._node) {
			const style = this._getOffsetStyles();
			Object.assign(this._node.style, style.root);
			Object.assign(this._tailNode.style, style.tail);
			this._node.style.visibility = 'visible'
		}
	}

	_getOffsetStyles() {
		const result = { tail: {}, root: {} };
		const params = this._node.getBoundingClientRect();
		const right = document.body.getBoundingClientRect().width - (params.left + params.width);

		if (params.left < 5) {
			result.root.transform = `translateX(${5 - params.left}px)`;
		}

		if (right < 5) {
			result.root.transform = `translateX(-${5 - right}px)`;
			result.tail.marginLeft = `${5 - right}px`;
		}

		result.width = `${params.width}px`;

		return result;
	}

	render() {
		const props = this.props;

		return (
			<div
				{...props}
				style={{ ...props.style, visibility: 'hidden' }}
				className={css(STYLE.root)}
				ref={(c) => c && (this._node = ReactDOM.findDOMNode(c))}>
				{props.children}
				<Tail
					color={props.tailColor}
					direction={INVERTED_DIRECTION[props.tailDirection]}
					ref={(c) => c && (this._tailNode = ReactDOM.findDOMNode(c))}
				/>
			</div>
		)
	}
}

const STYLE = StyleSheet.create({
	root: {
		position: 'relative',
		display: 'table',
		minWidth: '120px',
		padding: '5px'
	},
	top: {
		marginBottom: '7px'
	},
	bottom: {
		marginTop: '7px'
	}
});

