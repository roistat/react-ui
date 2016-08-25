'use strict';

import React, { PropTypes } from 'react';
import raf from 'raf';

export default class Transition extends React.Component {
	static propTypes = {
		/**
		 * Custom style for mounting new children
		 */
		enterStyle: PropTypes.object,
		/**
		 * Custom style for removing old children
		 */
		leaveStyle: PropTypes.object,
		/**
		 * Custom timeout before mounting new children
		 */
		enterTimeout: PropTypes.number,
		/**
		 * Custom timeout before removing old children
		 */
		leaveTimeout: PropTypes.number,
		/**
		 * Default value for timeout function
		 */
		timeout: PropTypes.number,
		/**
		 * Show new children without update delay
		 */
		isImmediatelyUpdate: PropTypes.bool,
		/**
		 * Update delay for new children
		 */
		updateDelay: PropTypes.number,
		/**
		 * Update delay for new children
		 */
		/**
		 * Before mounting children function
		 */
		onWillEnter: PropTypes.func,
		/**
		 * After mounting children function
		 */
		onDidEnter: PropTypes.func,
		/**
		 * Before removing children function
		 */
		onWillLeave: PropTypes.func,
		/**
		 * After removing children function
		 */
		onDidLeave: PropTypes.func
	};

	static defaultProps = {
		timeout: 250,
		updateDelay: 50,
		isImmediatelyUpdate: true
	};

	constructor(props, context) {
		super(props, context);

		this.state = {
			children: null,
			isEnter: false,
			isLeave: true,
			isAppear: false,
			isDidEnter: false
		};
	}

    componentDidMount() {
		const props = this.props;
		this._isMounted = true;

		props.children && this._showNewChildren(props);
	}

	componentWillReceiveProps(nextProps) {
		if (this._isRemoving || nextProps.children === undefined || nextProps.children === this.state.children) {
			return;
		}

		const nextChildren = nextProps.children || null;

		if (!this.state.children && nextChildren) {
			this._showNewChildren(nextProps);
			return;
		}

		if (this.state.children && !nextChildren) {
			this._removeOldChildren();

			return;
		}

		if (this.state.children !== nextChildren) {
			this.props.isImmediatelyUpdate ?
				this._showNewChildren(nextProps, true, true) :
				this._removeOldChildren(
					() => { setTimeout(() => this._showNewChildren(nextProps, true), nextProps.updateDelay)},
					true);
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	_showNewChildren(props, isUpdate, isSkipAppear) {
		if (this._isMounted && isSkipAppear) {
			this.setState({
				children: props.children || null,
			});

			return;
		}

		props.onWillEnter && props.onWillEnter();

		raf(() => this._isMounted && this.setState(
			{
				children: props.children,
				isEnter: false,
				isAppear: true,
				isLeave: false,
				isUpdate: !!isUpdate
			},
			() => raf(() => {
				this._isMounted && this.setState({
					isEnter: true,
					isAppear: false
				}, () => {
					const timeout = this._getTimeout('enter');
					setTimeout(() => this.setState(
						{ isDidEnter: true },
						() => props.onDidEnter && props.onDidEnter()), timeout);
				});
			})));
	}

	_removeOldChildren(callback: () => void, isUpdate: boolean) {
		let props = this.props;

		if (!this._isMounted || this._isRemoving) {
			return;
		}

		const timeout = this._getTimeout('leave');

		this._isRemoving = true;

		props.onWillLeave && props.onWillLeave();

		raf(() => this._isMounted &&
			this.setState({ isEnter: false, isLeave: true, isUpdate: !!isUpdate, isDidEnter: false }, () => {
				setTimeout(() => {
					if (callback) {
						props.onDidLeave && props.onDidLeave();
						callback();
						this._isRemoving = false;

						return;
					}

					raf(() => this._isMounted && this.setState(
						{
							children: null,
							isEnter: false,
							isLeave: false,
							isUpdate: !!isUpdate
						},
						() => {
							this._isRemoving = false;
							props.onDidLeave && props.onDidLeave();
						}));

				}, timeout);
		}));
	}

	_getTimeout(stage: 'enter'|'leave'): number {
		const props = this.props;

		return props[`${stage}Timeout`] === undefined ?
			props.timeout :
			props[`${stage}Timeout`];
	}

	render() {
		if (!this.state.children) {
			return null;
		}

		const { isEnter, isLeave, isUpdate, isAppear } = this.state;
		return this.state.children({ isEnter, isLeave, isUpdate, isAppear });
	}
}
