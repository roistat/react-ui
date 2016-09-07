'use strict';

import React, { PropTypes } from 'react';
import Teleport from '../Teleport';
import PlacerWrapper from './PlacerWrapper';
import addEventListener from '../helpers/addEventListener';

const PRESETS = {
    x : {
        'outside-left': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                left: targetRect.left - placeableRect.width - rootRect.left + offsets.left
            }
        },
        'outside-right': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                left: targetRect.left + targetRect.width - rootRect.left + offsets.left
            }
        },
        'middle': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                left: targetRect.left + targetRect.width / 2 - placeableRect.width / 2  - rootRect.left + offsets.left
            }
        },
        'inside-left': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                left: targetRect.left - rootRect.left + offsets.left
            }
        },
        'inside-right': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                left: targetRect.left + targetRect.width - placeableRect.width - rootRect.left + offsets.left
            }
        }
    },
    y: {
        'outside-top': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                top: targetRect.top - placeableRect.height - rootRect.top + offsets.top
            }
        },
        'outside-bottom': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                top: targetRect.top + targetRect.height - rootRect.top + offsets.top
            }
        },
        'middle':  (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                top: targetRect.top + targetRect.height / 2 - placeableRect.height / 2 - rootRect.top + offsets.top
            }
        },
        'inside-top': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                top: targetRect.top - rootRect.top + offsets.top
            }
        },
        'inside-bottom': (targetRect: Object, placeableRect: Object, rootRect: Object, offsets: Object) => {
            return {
                top: targetRect.top + targetRect.height - placeableRect.height +- rootRect.top + offsets.top
            }
        }
    }
};

export default class Placer extends React.Component {
    static __PLACER__ = true;

    static propTypes = {
        /**
         * Position available presets
         */
        presets: PropTypes.arrayOf(PropTypes.shape({
            xAxis: PropTypes.oneOf([
                'outside-left',
                'outside-right',
                'inside-left',
                'inside-right',
                'middle'
            ]),
            yAxis: PropTypes.oneOf([
                'outside-top',
                'outside-bottom',
                'inside-top',
                'inside-bottom',
                'middle'
            ]),
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
        })),
        targetRect: PropTypes.shape({
            left: PropTypes.number,
            top: PropTypes.number,
            width: PropTypes.number,
            height: PropTypes.number,
        }),
        /**
         * Z-index of root div
         */
        zIndex: PropTypes.number,
        targetDOMNode: PropTypes.object,
        viewportAccuracyFactor: PropTypes.number,
    };

    static defaultProps = {
        zIndex: 999,
        viewportAccuracyFactor: .9
    };

    static contextTypes = {
        teleport: PropTypes.shape({
            move: PropTypes.func,
            remove: PropTypes.func,
            update: PropTypes.func,
            isAdded: PropTypes.func,
            getRootDOMNode: PropTypes.func,
            getBoundingClientRect: PropTypes.func,
            getContextLevel: PropTypes.func
        })
    };
    
    constructor(props, ...args) {
        super(props, ...args);
        
        this._teleportComponent = null;
        this._parentDOMNodeWithScroll = null;
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

    componentDidUpdate() {
        this._setPositionStyles();
    }

    _onWrapperMountHandler(c) {
        this._wrapperComponent = c;

        this._setPositionStyles();
    }

    _onTeleportMountHandler(c) {
        this._teleportComponent = c;
    }

    _setPositionStyles() {
        this._wrapperComponent &&
            this._wrapperComponent.setStyles(this._generateStyles());
    }

    _getTargetRect() {
        if (this.props.targetDOMNode) {
            return this.props.targetDOMNode.getBoundingClientRect();
        }

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
        if (!this._wrapperComponent) {
            return null;
        }

        return this.context.teleport.getRootDOMNode().getBoundingClientRect();
    }

    _calculateBestPosition(targetRect: Object, placeableRect: Object, rootRect: Object) {
        const { presets, viewportAccuracyFactor } = this.props;

        var resultPreset = presets[0];
        var bestViewportAccuracyFactor = 0;

        if (typeof window !== undefined && presets.length > 1) {
            const windowWidth  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            presets.some(preset => {
                let position = calculatePreset(preset, targetRect, placeableRect, rootRect);
                let rect = Object.assign({ width: placeableRect.width, height: placeableRect.height }, position);

                let left = Math.max(rect.left, 0);
                let right =Math.min(rect.left + rect.width, windowWidth);

                let top = Math.max(rect.top, 0);
                let bottom = Math.min(rect.top + rect.height, windowHeight);

                let rectArea = rect.width * rect.height;
                let visibleRectArea = (right - left) * (bottom - top);
                let currentViewportAccuracyFactor = visibleRectArea / rectArea;

                if (currentViewportAccuracyFactor >= viewportAccuracyFactor) {
                    resultPreset = preset;

                    return true;
                }

                if (currentViewportAccuracyFactor >  bestViewportAccuracyFactor) {
                    bestViewportAccuracyFactor = currentViewportAccuracyFactor;
                    resultPreset = preset;
                }
            });
        }

        return calculatePreset(resultPreset, targetRect, placeableRect, rootRect);
    }


    _generateStyles(): Object {
        const targetRect = this.props.targetRect || this._getTargetRect();
        const placeableRect = this._getPlaceableRect();
        const rootRect = this._getRootRect();

        const position = this._calculateBestPosition(targetRect, placeableRect, rootRect);

        const xPosition =  position.left ? `${position.left}px` : 0;
        const yPosition = position.top ? `${position.top}px` : 0;

        return {
            transform: `translate3d(${xPosition}, ${yPosition}, 0)`,
            visibility: 'visible',
            zIndex: this._getZIndex()
        }
    }

    _getZIndex(): number {
        return this.context.teleport.getContextLevel() + this.props.zIndex;
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

const calculatePreset = (preset, targetRect: Object, placeableRect: Object, rootRect: Object) => {
    var resultOffset = { left: preset.offsetX || 0, top: preset.offsetY || 0 };

    return Object.assign({},
        PRESETS.x[preset.xAxis](
            targetRect,
            placeableRect,
            rootRect,
            resultOffset),
        PRESETS.y[preset.yAxis](
            targetRect,
            placeableRect,
            rootRect,
            resultOffset));
};