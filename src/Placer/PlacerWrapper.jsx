'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';

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

    componentWillMount() {
        const teleportRootDOMNode = this.context.teleport.getRootDOMNode();

        this._placeableRectOnMount = this._getPlaceableRect();
        this._rootRectOnMount = teleportRootDOMNode ? teleportRootDOMNode.getBoundingClientRect() : null;
    }

    componentDidMount() {
        const props = this.props;

        this._selfDOMNode = ReactDOM.findDOMNode(this);
        props.onDidMount && props.onDidMount(this)

        this._isMount = true;

        if (typeof window !== 'undefined') {
            this._resizeEventListener = addEventListener(window, 'resize', () => {
                if (!this._isMount) {
                    return;
                }

            });

            this._scrollEventListener = addEventListener(window, 'scroll', () => {
                if (!this._isMount) {
                    return;
                }

            });
        }
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

    /** ------------------------------------------------------------------------- **/

    _calculateBestPosition(targetRect: Object, placeableRect: Object, rootRect: Object) {
        return calculatePreset(
            this._getBestPreset(targetRect, placeableRect, rootRect),
            targetRect,
            placeableRect,
            rootRect);
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


    _generateStyles(): Object {
        const position = this._calculateBestPosition(...this._getArgumentsForPositionCalculation());

        const xPosition =  position.left ? `${position.left}px` : 0;
        const yPosition = position.top ? `${position.top}px` : 0;

        return {
            transform: `translate3d(${xPosition}, ${yPosition}, 0)`,
            visibility: 'visible',
            zIndex: this._getZIndex()
        }
    }

    _getArgumentsForPositionCalculation() {
        const placeableRect = this._getPlaceableRect();
        const rootRect = this.context.teleport.getRootDOMNode().getBoundingClientRect();

        return [this.props.targetRect, placeableRect, rootRect];
    }

    _getZIndex(): number {
        return this.context.teleport.getContextLevel() + this.props.zIndex;
    }

    _getPlaceableRect() {
        const hiddenDOMNode = getHiddenDOMNode();

        try { ReactDOM.render(this.props.children, hiddenDOMNode) } catch(err) {}

        const rect = hiddenDOMNode.childNodes[0].getBoundingClientRect();

        ReactDOM.unmountComponentAtNode(hiddenDOMNode);

        return rect;
    }

    render() {
        const props = this.props;

        console.log('### ->>> props', this.props.targetRect, this._placeableRectOnMount, this._rootRectOnMount);
        return (
            <div
                style={{
                    zIndex: this._getZIndex(),
                    visibility: 'hidden',
                    position: 'absolute',
                    transform: 'translate3d(0, 0, 0)',
                    top: 0,
                    left: 0
                }}>
                {props.children}
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


var _hiddenDOMNode = null;
var _isHiddenDOMNodeAppended = false;

function getHiddenDOMNode() {
    if (!_hiddenDOMNode) {
        _hiddenDOMNode = document.createElement('div');

        _hiddenDOMNode.style.visibility = 'hidden';
        _hiddenDOMNode.style.position = 'absolute';
    }

    if (!_isHiddenDOMNodeAppended && typeof document !== 'undefined') {
        document.body.appendChild(_hiddenDOMNode);
    }

    return _hiddenDOMNode;
}