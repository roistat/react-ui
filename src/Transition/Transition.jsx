'use strict';

import React, { PropTypes } from 'react';

//TODO: 'improve update'

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

        this.state = { children: null, isEnter: false, isLeave: true, isAppear: false };
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
                isEnter: true,
                isAppear: false,
                isLeave: false
            });

            return;
        }

        props.onWillEnter && props.onWillEnter();

        this._isMounted && this.setState(
            {
                children: props.children,
                isEnter: false,
                isAppear: true,
                isLeave: false,
                isUpdate: !!isUpdate
            },
            () => setTimeout(() => {
                this._isMounted && this.setState({
                    isEnter: true,
                    isAppear: false
                }, () => props.onDidEnter && props.onDidEnter());
            }, 5));
    }

    _removeOldChildren(callback: () => void, isUpdate: boolean) {
        let props = this.props;

        if (!this._isMounted || this._isRemoving) {
            return;
        }

        const timeout = props.leaveTimeout === undefined ?
            props.timeout :
            props.leaveTimeout;

        this._isRemoving = true;

        props.onWillLeave && props.onWillLeave();

        this.setState({ isEnter: false, isLeave: true, isUpdate: !!isUpdate }, () => {
            setTimeout(() => {
                if (callback) {
                    props.onDidLeave && props.onDidLeave();
                    callback();
                    this._isRemoving = false;

                    return;
                }

                if (this._isMounted) {
                    this.setState(
                        {
                            children: null,
                            isEnter: false,
                            isLeave: false,
                            isUpdate: !!isUpdate
                        },
                        () => {
                            this._isRemoving = false;
                            props.onDidLeave && props.onDidLeave();
                        });
                }
            }, timeout);
        });
    }

    render() {
        if (!this.state.children) {
            return null;
        }

        const { isEnter, isLeave, isUpdate, isAppear } = this.state;

        return this.state.children({ isEnter, isLeave, isUpdate, isAppear });
    }
}