'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';
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

export default class PlacerWrapper extends React.Component {
    static propTypes = {
        onDidMount: PropTypes.func
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

        this.state = { currentPreset: null, placeableRect: null, targetRect: null };
        this._onChildrenMount = this._onChildrenMount.bind(this);

        if (!props.presets) {
            throw new Error('Placer component: presets property is required');
        }
    }

    componentDidMount() {
        const props = this.props;

        this._selfDOMNode = ReactDOM.findDOMNode(this);
        props.onDidMount && props.onDidMount(this);

        this._isMount = true;

        if (typeof window !== 'undefined') {
            this._resizeEventListener = addEventListener(window, 'resize', () => {
                if (this._isMount) {
                    this.updatePosition();
                }

            });

            this._scrollEventListener = addEventListener(window, 'scroll', () => {
                if (this._isMount) {
                    this.updatePosition();
                }

            });
        }
    }

    componentWillUnmount() {
        this._isMount = false;
        this._resizeEventListener && this._resizeEventListener.remove();
        this._scrollEventListener && this._scrollEventListener.remove();
    }

    getDOMNode(): Object {
        return this._selfDOMNode || null;
    }

    getBoundingClientRect(): Object {
        return this._selfDOMNode ? this._selfDOMNode.getBoundingClientRect() : null
    }

    setStyles(styles: Object) {
        raf(() => Object.assign(this.getDOMNode().style, styles));
    }

    updatePosition() {
        const args = this._getArgumentsForPositionCalculation();
        const bestPreset = this._getBestPreset(...args);
        const position = calculatePreset(bestPreset, ...args);

        const xPosition =  position.left ? `${position.left}px` : 0;
        const yPosition = position.top ? `${position.top}px` : 0;
        const newStyles = {
            transform: `translate3d(${xPosition}, ${yPosition}, 0)`,
            visibility: 'visible'
        };

        if (!this._isNewPreseEqualEqula(bestPreset)) {
            this.setState({
                currentPreset: bestPreset,
                targetRect: args[0],
                placeableRect: args[1],

            }, () => this.setStyles(newStyles));
        } else {
            this.setStyles(newStyles)
        }
    }

    _isNewPreseEqualEqula(nextPreset) {
        const preset = this.state.currentPreset || {};

        return preset.xAxis === nextPreset.xAxis &&
            preset.yAxis === nextPreset.yAxis &&
                preset.offsetX === nextPreset.offsetX &&
                    preset.offsetY === nextPreset.offsetY;
    }

    _getBestPreset(targetRect: Object, placeableRect: Object, rootRect: Object) {
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

        return resultPreset;
    }


    _getArgumentsForPositionCalculation() {
        const placeableRect = this._getPlaceableRect();
        const rootRect = this.context.teleport.getRootDOMNode().getBoundingClientRect();

        return [this.props.getTargetRect(), placeableRect, rootRect];
    }


    _getPlaceableRect() {
        return this._placeableDOMNode ? this._placeableDOMNode.getBoundingClientRect() : null;
    }

    _onChildrenMount(component) {
        this._placeableDOMNode = ReactDOM.findDOMNode(component);
        component && this.updatePosition();
    }

    render() {
        const props = this.props;
        const childrenProps = { ref: this._onChildrenMount };

        if (typeof props.children.type === 'function') {
            childrenProps.currentPreset = this.state.currentPreset;
            childrenProps.selfRect = this.state.placeableRect;
            childrenProps.targetRect = this.state.targetRect;
        }

        return (
            <div
                style={{
                    zIndex: this.context.teleport.getContextLevel() + props.zIndex,
                    visibility: 'hidden',
                    position: 'absolute',
                    transform: 'translate3d(0, 0, 0)',
                    top: 0,
                    left: 0
                }}>
                {React.cloneElement(React.Children.only(props.children), childrenProps)}
            </div>
        )
    }
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