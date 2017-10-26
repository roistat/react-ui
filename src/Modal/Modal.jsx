'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import Teleport, { TeleportContext } from '../Teleport';
import Popup from '../Popup';
import Transition from '../Transition';
import AutoClosable from '../AutoClosable';

import { StyleSheet } from '../helpers/styles';

export default class Modal extends React.Component {
    static propTypes = {
        isShown: PropTypes.boolean,
        isAutoClosable: PropTypes.boolean,
        onDidClose: PropTypes.func,
        onDidShow: PropTypes.func,
        onClose: PropTypes.func,
        zIndex: PropTypes.number
    };

    static defaultProps = { zIndex: 999 };

    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            isShown: false
        };

        this._onShowHandler =  this._onShowHandler.bind(this);
        this._onCloseHandler =  this._onCloseHandler.bind(this);
        this._onDidLeaveHandler =  this._onDidLeaveHandler.bind(this);
        this._isBodyScrollDisabled = null;
        this._prevBodyOverflow = null;

        this._onDidShowCallbacks = [];
        this._onDidHideCallbacks = [];
    }

    componentDidMount() {
        this.props.isShown && this.show();
    }

    componentWillUnmount() {
        this._enableRootScroll();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isShown !== this.props.isShown) {
            nextProps.isShown ? this.show() : this.hide();
        }
    }

    show(callback: () => void) {
        callback && this._onDidShowCallbacks.push(callback);

        this.setState({ isShown: true }, () => this._disableRootScroll());
    }

    hide(callback: () => void) {
        callback && this._onDidHideCallbacks.push(callback);

        this.setState({ isShown: false });
    }

    _renderChildren() {
        const props = this.props;

        return React.Children.map(props.children, (child) => {
            if (child && child.type && child.type.__MODAL_HEADER__) {
                return React.cloneElement(child, {
                    onClose: props.onClose
                });
            }

            return child;
        });
    }

    _disableRootScroll() {
        if (typeof document !== 'undefined' && !this._isBodyScrollDisabled) {
            let parentDOMNodeWithScroll = this._getParentDOMNodeWithScroll();

            this._isBodyScrollDisabled = true;
            this._prevBodyOverflow = parentDOMNodeWithScroll.style.overflow;
            parentDOMNodeWithScroll.style.overflow = 'hidden';
        }
    }

    _enableRootScroll() {
        if (typeof document !== 'undefined' && this._isBodyScrollDisabled) {
            this._isBodyScrollDisabled = false;

            this._getParentDOMNodeWithScroll().style.overflow = this._prevBodyOverflow;
        }
    }

    _onShowHandler() {
        const callbacks = this._onDidShowCallbacks;

        this._onDidShowCallbacks = [];

        callbacks.forEach((callback) => callback());

        this.props.onDidShow && this.props.onDidShow();
    }

    _onCloseHandler() {
        const { isAutoClosable, onClose } = this.props;

        isAutoClosable && onClose && onClose();
    }

    _onDidLeaveHandler() {
        const callbacks = this._onDidHideCallbacks;

        this._onDidHideCallbacks = [];
        callbacks.forEach((callback) => callback());

        this._enableRootScroll();
        this.props.onDidClose && this.props.onDidClose();
    }


    _getParentDOMNodeWithScroll() {
        if (!this._parentDOMNodeWithScroll) {
            const rootDOMNode = this._getRootDOMNode();

            this._parentDOMNodeWithScroll = (rootDOMNode &&
                getParentDOMNodeWithScroll(rootDOMNode)) ||
                    document.getElementsByTagName('body')[0];
        }

        return this._parentDOMNodeWithScroll;
    }

    _getRootDOMNode() {
        if (!this._teleport) {
            return null;
        }

        if (!this._rootDOMNode) {
            this._rootDOMNode = this._teleport.getRootDOMNode();
        }

        return this._rootDOMNode;
    }

    render() {
        const { zIndex } = this.props;

        return (
            <Teleport ref={(c) => this._teleport = c}>
                <Transition
                    timeout={200}
                    leaveTimeout={400}
                    onDidEnter={this._onShowHandler}
                    onDidLeave={this._onDidLeaveHandler}>
                    {this.state.isShown && (({ isEnter, isLeave }) => (
                        <View
                            style={{ zIndex }}
                            styles={[
                                styles.overlay,
                                isEnter && styles.shownOverlay,
                                isLeave && styles.leaveOverlay
                            ]}>
                            <View
                                styles={[
                                    styles.inner,
                                    isEnter && styles.shownInner,
                                    isLeave && styles.leaveInner
                                ]}>

                                <AutoClosable onClose={this._onCloseHandler}>
                                    <TeleportContext>
                                        <View styles={[styles.popupWrapper]}>
                                            <Popup styles={[styles.popup]} isRounded>
                                                {this._renderChildren()}
                                            </Popup>
                                        </View>
                                    </TeleportContext>
                                </AutoClosable>
                            </View>
                        </View>
                    ))}
                </Transition>
            </Teleport>
        )
    }
}

function getParentDOMNodeWithScroll(parentDOMNode) {
    if (!parentDOMNode) {
        return null;
    }

    const clientWidth = parentDOMNode.clientWidth;
    const clientHeight = parentDOMNode.clientHeight;

    const scrollWidth = parentDOMNode.scrollWidth;
    const scrollHeight = parentDOMNode.scrollHeight;

    if (clientWidth === undefined) {
        return null;
    }

    if ((clientWidth || clientHeight)) {

        const isCanScroll = ['overflow', 'overflow-x', 'overflow-y'].some((key) => {
            return /auto|scroll/.test(window.getComputedStyle(parentDOMNode)[key]);
        });

        if (isCanScroll && (clientWidth !== scrollWidth || clientHeight !== scrollHeight)) {
            return parentDOMNode;
        }
    }

    return getParentDOMNodeWithScroll(parentDOMNode.parentNode);
}

const styles = StyleSheet.create({
    overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transform: 'translate3d(0, 0, 0)',
        transition: 'all .2s ease-out',
        background: 'rgba(0, 0, 0, 0)',
        overflow: 'auto'
    },
    inner: {
        minWidth: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        transition: 'all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'translate3d(0, 0, 0) scale(.9)',
        opacity: 0,
    },
    popupWrapper: {
        margin: '4.4rem 140px 5rem 140px'
    },
    popup: {
        padding: 0,
        minHeight: 400,
        minWidth: 720,
        flexDirection: 'column',
        overflow: 'hidden',
    },
    shownOverlay: {
        background: 'rgba(0, 0, 0, .4)'
    },
    shownInner: {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1
    },
    leaveInner: {
        transition: 'all .4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    },
    leaveOverlay: {
        transition: 'all .4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    }
});