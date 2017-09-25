'use strict';

import React, { PropTypes } from 'react';
import Teleport from '../Teleport';
import PlacerWrapper from './PlacerWrapper';

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
        /**
         * Custom target element params
         */
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
        /**
         * Custom target element DOM node
         */
        targetDOMNode: PropTypes.object,
        /**
         * Factor for detect best position preset
         */
        viewportAccuracyFactor: PropTypes.number
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
        this._getTargetRect = this._getTargetRect.bind(this);
    }

    _onWrapperMountHandler(c) {
        this._wrapperComponent = c;
    }

    _onTeleportMountHandler(c) {
        this._teleportComponent = c;
    }

    _getTargetRect() {
        const props = this.props;

        if (props.targetRect) {
            return props.targetRect
        }

        if (props.targetDOMNode) {
            return this.props.targetDOMNode.getBoundingClientRect();
        }

        if (!this._teleportComponent) {
            return null;
        }

        return this._teleportComponent.getParentBoundingClientRect();
    }

    render() {
        const props = this.props;

        return (
            <Teleport ref={this._onTeleportMountHandler}>
                <PlacerWrapper
                    zIndex={props.zIndex}
                    getTargetRect={this._getTargetRect}
                    presets={props.presets}
                    viewportAccuracyFactor={props.viewportAccuracyFactor}
                    onDidMount={this._onWrapperMountHandler}>
                    {props.children}
                </PlacerWrapper>
            </Teleport>
        );
    }
}