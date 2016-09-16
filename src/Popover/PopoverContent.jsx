'use strict';

import React, { PropTypes } from 'react';

import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';

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
        const { children, isAnimated, toggle, currentPreset } = this.props;
        const popup = React.cloneElement(children, { onClose: () => toggle() });

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

    }
});