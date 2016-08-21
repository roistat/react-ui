'use strict';

import React, { PropTypes } from 'react';
import raf from 'raf';

export default class Transition extends React.Component {
    static propTypes = {
        enterStyle: PropTypes.object,
        leaveStyle: PropTypes.object,
        enterTimeout: PropTypes.number,
        leaveTimeout: PropTypes.number,
        updateTimeout: PropTypes.number,
        timeout: PropTypes.number,
        isImmediatelyUpdate: PropTypes.bool,
        updateDelay: PropTypes.number,
        onWillEnter: PropTypes.func,
        onDidEnter: PropTypes.func,
        onWillLeave: PropTypes.func,
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