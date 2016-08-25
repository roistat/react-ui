'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { getChildByType, filterChildrenByNotType } from '../helpers/reactElements';

export default class TargetWrapper extends React.Component {
	static propTypes = {};

	render() {
		const { children, ...rest } = this.props;

		if (React.Children.count(children) > 2) {
			throw new Error('TargetWrapper component: children must have less or equal two');
		}

		const placer = getChildByType(children, '__PLACER__');
		const target = filterChildrenByNotType(children, '__PLACER__')[0];

		return React.cloneElement(target, {
			...rest,
			ref: (c) => c && (this._targetDOMNode = ReactDOM.findDOMNode(c)),
			children: [
				...React.Children.map(
					target.props.children,
					(child, idx) => typeof child === 'object' ? React.cloneElement(child, { key: idx }) : child),
				placer && React.cloneElement(placer, {
					key: 'placer',
					targetDOMNode: this._targetDOMNode || null
				})
			]
		})
	}
}
