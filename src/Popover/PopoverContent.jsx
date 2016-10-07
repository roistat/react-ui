'use strict';

import React, { PropTypes } from 'react';

import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';
import Tail  from '../Tail';

import Transition from '../Transition';
import { StyleSheet, css } from '../helpers/styles';
import { getTailParams } from './helpers';

const RectShapePropType = PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
});

export default class PopoverContent extends React.Component {
    static propTypes = {
        toggle: PropTypes.func,
        parentDOMNode: PropTypes.object,
        isAutoClosable: PropTypes.bool,
        isAnimated: PropTypes.bool,
        isHasTail: PropTypes.bool,
        isTailHasShadow: PropTypes.bool,
        tailSize: PropTypes.number,
        selfRect: RectShapePropType,
        targetRect: RectShapePropType,
        currentPreset: PropTypes.object
    };

    _getAppearClassName() {
        // TODO: move to helpers
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
       //TODO: add invariant for children
        
        const extraProps = Object.assign(
            { onClose: () => toggle() },
            isHasTail && {
                children: [
                    ...React.Children.toArray(React.Children.only(children).props.children),
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

        const { style, direction } = getTailParams(this.props);

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