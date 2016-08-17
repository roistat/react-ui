'use strict';

import React, { PropTypes } from 'react';
import Teleport from '../Teleport';
import PlacerWrapper from './PlacerWrapper';
import addEventListener from '../helpers/addEventListener';

const PRESETS = {
    x : {
        'outside-left': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                left: targetRect.left - placeableRect.width + windowRect.left
            }
        },
        'outside-right': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                left: targetRect.left + targetRect.width + windowRect.left
            }
        },
        'middle': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                left: targetRect.left + targetRect.width / 2 - placeableRect.width / 2  + windowRect.left
            }
        },
        'inside-left': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                left: targetRect.left + windowRect.left
            }
        },
        'inside-right': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                left: targetRect.left + targetRect.width - placeableRect.width + windowRect.left
            }
        }
    },
    y: {
        'outside-top': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                top: targetRect.top - placeableRect.height + windowRect.top
            }
        },
        'outside-bottom': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                top: targetRect.top + targetRect.height + windowRect.top
            }
        },
        'middle':  (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                top: targetRect.top + targetRect.height / 2 - placeableRect.height / 2 + windowRect.top
            }
        },
        'inside-top': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                top: targetRect.top + windowRect.top
            }
        },
        'inside-bottom': (targetRect: Object, placeableRect: Object, windowRect: Object) => {
            return {
                top: targetRect.top + targetRect.height - placeableRect.height + windowRect.top
            }
        }
    }
};

export default class Placer extends React.Component {
    static propTypes = {
        xAxisPresets: PropTypes.arrayOf(PropTypes.oneOf([
            'outside-left',
            'outside-right',
            'inside-left',
            'inside-right',
            'middle'
        ])).isRequired,
        yAxisPresets: PropTypes.arrayOf(PropTypes.oneOf([
            'outside-top',
            'outside-bottom',
            'inside-top',
            'inside-bottom',
            'middle'
        ])).isRequired
    };

    static contextTypes = {
        teleport: PropTypes.shape({
            move: PropTypes.func,
            remove: PropTypes.func,
            update: PropTypes.func,
            isAdded: PropTypes.func,
            getRootDOMNode: PropTypes.func,
            getBoundingClientRect: PropTypes.func
        })
    };
    
    constructor(props, ...args) {
        super(props, ...args);
        
        this._teleportComponent = null;
        this._onWrapperMountHandler = this._onWrapperMountHandler.bind(this);
        this._onTeleportMountHandler = this._onTeleportMountHandler.bind(this);
    }

    componentDidMount() {
        this._isMount = true;

        if (typeof window !== 'undefined') {
            this._resizeEventListener = addEventListener(window, 'resize', () => {
                if (!this._isMount) {
                    return;
                }

                this._setPositionStyles();
            });

            this._scrollEventListener = addEventListener(window, 'scroll', () => {
                if (!this._isMount) {
                    return;
                }

                this._setPositionStyles();
            });
        }
    }

    componentWillUnmount() {
        this._isMount = false;
        this._resizeEventListener && this._resizeEventListener.remove();
        this._scrollEventListener && this._scrollEventListener.remove();
    }

    _onWrapperMountHandler(c) {
        this._wrapperComponent = c;

        this._setPositionStyles();
    }

    _onTeleportMountHandler(c) {
        this._teleportComponent = c;
    }

    _setPositionStyles() {
        this._wrapperComponent && this._wrapperComponent.setStyles(this._generateStyles());
    }

    _getTargetRect() {
        if (!this._teleportComponent) {
            return null;
        }

        return this._teleportComponent.getParentBoundingClientRect();
    }

    _getPlaceableRect() {
        if (!this._wrapperComponent) {
            return null;
        }

        return this._wrapperComponent.getBoundingClientRect();
    }

    _getRootRect() {
        return this.context.teleport.getBoundingClientRect();
    }

    _calculateBestPosition(axis: 'x' | 'y', targetRect: Object, placeableRect: Object, windowRect: Object) {
        var resultPreset = this.props[`${axis}AxisPresets`][0];
        const isXaxis = axis === 'x';
        const axisPropertyKey = isXaxis ? 'left' : 'top';
        const windowPropertyKey = isXaxis ? 'width' : 'height';

        this.props[`${axis}AxisPresets`].some(preset => {
            let rect = PRESETS[axis][preset](targetRect, placeableRect, windowRect);

            if (rect[axisPropertyKey] > -1 &&
                windowRect[windowPropertyKey] - rect[axisPropertyKey] - placeableRect[windowPropertyKey] > 0) {
                resultPreset = preset;

                return true;
            }

            return false;
        });

        return PRESETS[axis][resultPreset](targetRect, placeableRect, windowRect);
    }

    _generateStyles(): Object {
        const targetRect = this._getTargetRect();
        const placeableRect = this._getPlaceableRect();
        const windowRect = this._getWindowRect();
        const args = [targetRect, placeableRect, windowRect];

        const position = Object.assign({},
            this._calculateBestPosition('x', ...args),
            this._calculateBestPosition('y', ...args));

        return {
            top: position.top ? `${position.top}px` : 0,
            left: position.left ? `${position.left}px` : 0,
            visibility: 'visible'
        }
    }

    _getWindowRect() {
        const body = document.getElementsByTagName('body')[0]
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            left: body.scrollLeft,
            top: body.scrollTop,
        }
    }

    render() {
        return (
            <Teleport ref={this._onTeleportMountHandler}>
                <PlacerWrapper onDidMount={this._onWrapperMountHandler}>
                    {React.Children.only(this.props.children)}
                </PlacerWrapper>
            </Teleport>
        );
    }
}