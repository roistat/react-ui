'use strict';

import React, { PropTypes } from 'react';

import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';
import Tail  from '../Tail';

import Transition from '../Transition';
import { StyleSheet, css } from '../helpers/styles';

export default class PopoverContent extends React.Component {
    static propTypes = {
        toggle: PropTypes.func,
        parentDOMNode: PropTypes.object,
        isAutoClosable: PropTypes.bool,
        isAnimated: PropTypes.bool
    };

    _getAppearClassName() {
        const { currentPreset } = this.props;

        if (/middle|inside-left|inside-right/.test(currentPreset.xAxis) && currentPreset.yAxis === 'outside-bottom') {
            return styles.fromBottomAppear;
        }

        if (/middle|inside-left|inside-right/.test(currentPreset.xAxis) && currentPreset.yAxis === 'outside-top') {
            return styles.fromTopAppear;
        }

        if (currentPreset.xAxis === 'outside-left' && /middle|inside-top|inside-bottom/.test(currentPreset.yAxis)) {
            return styles.fromLeftAppear;
        }

        if (currentPreset.xAxis === 'outside-right' && /middle|inside-top|inside-bottom/.test(currentPreset.yAxis)) {
            return styles.fromRightAppear;
        }

        return styles.zoomAppear;
    }

    
    _renderPopup() {
        const { children, isAnimated, toggle, currentPreset, isHasTail } = this.props;
        const extraProps = Object.assign(
            { onClose: () => toggle() },
            isHasTail && {
                children: [
                    ...React.Children.toArray(children.props.children),
                    this._getTail()
                ]
            });

        const popup = React.cloneElement(children, extraProps);

        if (!isAnimated) {
            return popup;
        }

        return (
            <div style={{ visibility: !currentPreset ? 'hidden' : 'visible' }}>
                { currentPreset ?
                    <Transition>
                        {({ isAppear, isEnter, isLeave, isUpdate }) => (
                            <div
                                className={css(
                                    styles.popupContainer, isAppear &&
                                    this._getAppearClassName({ isAppear, isEnter, isLeave, isUpdate }))}>
                                {popup}
                            </div>
                        )}
                    </Transition> :
                    popup
                }
            </div>
        );
    }

    _getTail() {
        const { currentPreset, tailColor, isTailHasShadow, tailSize } = this.props;

        if (!currentPreset) {
            return null
        }

        const { style, direction } = this._getTailParams();

        if (!direction || !style ) {
            return null;
        }

        return (
            <Tail
                isHasShadow={isTailHasShadow}
                color={tailColor}
                tailSize={tailSize}
                direction={direction}
                style={style}
                styles={[styles.tail]}
            />
        )
    }

    _getTailParams() {
        const { selfRect, currentPreset, tailSize } = this.props;
        const { xAxis, yAxis, tail = {} } = currentPreset;
        const defaultOffset = tailSize / 2;
        const defaultMiddleYOffset = selfRect.height / 2 - tailSize / 2;
        const defaultMiddleXOffset = selfRect.width / 2 - tailSize / 2;
        const maxYOffset = selfRect.height - tailSize;
        const maxXOffset = selfRect.width - tailSize;

        if (xAxis === 'outside-left' && yAxis === 'inside-top') {
            let offset = defaultOffset;

            if (tail.yOffset || tail.yOffset === 0) {
                offset = Math.max(tail.yOffset, 0);
            }

            return {
                direction: 'right',
                style: {
                    top: Math.min(offset, selfRect.height - tailSize),
                    right: 0,
                    transform: 'translate3d(100%, 0, 0)'
                }
            }
        }

        if (xAxis === 'outside-left' && yAxis === 'inside-bottom') {
            let offset = -defaultOffset;

            if (tail.yOffset || tail.yOffset === 0) {
                offset = Math.max(tail.yOffset, -maxYOffset);
            }

            return {
                direction: 'right',
                style: {
                    bottom:  Math.max(-offset, 0),
                    right: 0,
                    transform: 'translate3d(100%, 0, 0)'
                }
            }
        }

        if (xAxis === 'outside-left' && yAxis === 'middle') {
            let offset = defaultMiddleYOffset;

            if (tail.yOffset || tail.yOffset === 0) {
                offset = Math.min(defaultMiddleYOffset + tail.yOffset, maxYOffset);
            }

            return {
                direction: 'right',
                style: {
                    top: Math.max(offset, 0),
                    right: 0,
                    transform: 'translate3d(100%, 0, 0)'
                }
            };
        }

        if (xAxis === 'outside-right' && yAxis === 'inside-top') {
            let offset = defaultOffset;

            if (tail.yOffset || tail.yOffset === 0) {
                offset = Math.max(tail.yOffset, 0);
            }

            return {
                direction: 'left',
                style: {
                    top: Math.min(offset, selfRect.height - tailSize),
                    left: 0,
                    transform: 'translate3d(-100%, 0, 0)'
                }
            }
        }

        if (xAxis === 'outside-right' && yAxis === 'inside-bottom') {
            let offset = -defaultOffset;

            if (tail.yOffset || tail.yOffset === 0) {
                offset = Math.max(tail.yOffset, -maxYOffset);
            }

            return {
                direction: 'left',
                style: {
                    bottom:  Math.max(-offset, 0),
                    left: 0,
                    transform: 'translate3d(-100%, 0, 0)'
                }
            }
        }

        if (xAxis === 'outside-right' && yAxis === 'middle') {
            let offset = defaultMiddleYOffset;

            if (tail.yOffset) {
                offset = Math.min(defaultMiddleYOffset + tail.yOffset, maxYOffset);
            }

            return {
                direction: 'left',
                style: {
                    top: Math.max(offset, 0),
                    left: 0,
                    transform: 'translate3d(-100%, 0, 0)'
                }
            }
        }

        if (xAxis === 'inside-left' && yAxis === 'outside-top') {
            let offset = defaultOffset;

            if (tail.xOffset || tail.xOffset === 0) {
                offset = Math.max(tail.xOffset, 0);
            }

            return {
                direction: 'bottom',
                style: {
                    bottom: 0,
                    left: Math.min(offset, maxXOffset),
                    transform: 'translate3d(0, 100%, 0)'
                }
            }
        }

        if (xAxis === 'inside-right' && yAxis === 'outside-top') {
            let offset = -defaultOffset;

            if (tail.xOffset || tail.xOffset === 0) {
                offset = Math.min(tail.xOffset, 0);
            }

            return {
                direction: 'bottom',
                style: {
                    bottom: 0,
                    right:  Math.min(-offset, maxXOffset),
                    transform: 'translate3d(0, 100%, 0)'
                }
            }
        }

        if (xAxis === 'middle' && yAxis === 'outside-top') {
            let offset = defaultMiddleXOffset;

            if (tail.xOffset) {
                offset = Math.min(defaultMiddleXOffset + tail.xOffset, maxXOffset);
            }

            return {
                direction: 'bottom',
                style: {
                    bottom: 0,
                    left: Math.max(offset, 0),
                    transform: 'translate3d(0, 100%, 0)'
                }
            }
        }

        if (xAxis === 'inside-left' && yAxis === 'outside-bottom') {
            let offset = defaultOffset;

            if (tail.xOffset || tail.xOffset === 0) {
                offset = Math.max(tail.xOffset, 0);
            }

            return {
                direction: 'top',
                style: {
                    top: 0,
                    left: Math.min(offset, maxXOffset),
                    transform: 'translate3d(0, -100%, 0)'
                }
            }
        }

        if (xAxis === 'inside-right' && yAxis === 'outside-bottom') {
            let offset = -defaultOffset;

            if (tail.xOffset || tail.xOffset === 0) {
                offset = Math.min(tail.xOffset, 0);
            }

            return {
                direction: 'top',
                style: {
                    top: 0,
                    right:  Math.min(-offset, maxXOffset),
                    transform: 'translate3d(0, -100%, 0)'
                }
            }
        }

        if (xAxis === 'middle' && yAxis === 'outside-bottom') {
            let offset = defaultMiddleXOffset;

            if (tail.xOffset) {
                offset = Math.min(defaultMiddleXOffset + tail.xOffset, maxXOffset);
            }

            return {
                direction: 'top',
                style: {
                    top: 0,
                    left: Math.max(offset, 0),
                    transform: 'translate3d(0, -100%, 0)'
                }
            }
        }

        return { direction: null, style: null };
    }

    render() {
        const props = this.props;

        return (
            <AutoClosable
                onClose={() => props.isAutoClosable && props.toggle()}
                parentDOMNode={props.parentDOMNode}>
                <TeleportContext>
                    {this._renderPopup()}
                </TeleportContext>
            </AutoClosable>
        )
    }
}

const styles = StyleSheet.create({
    popupContainer: {
        transition: 'all .15s ease-in',
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)'
    },
    fromBottomAppear: {
        opacity: 0,
        transform: 'translate3d(0, 10%, 0)'
    },
    fromTopAppear: {
        opacity: 0,
        transform: 'translate3d(0, -10%, 0)'
    },
    fromLeftAppear: {
        opacity: 0,
        transform: 'translate3d(-10%, 0, 0)'
    },
    fromRightAppear: {
        opacity: 0,
        transform: 'translate3d(10%, 0, 0)'
    },
    zoomAppear: {
        opacity: 0,
        transform: 'scale(.8)'
    },
    tail: {
        position: 'absolute'
    }
});