'use strict';

import React, { PropTypes } from 'react';
import Teleport from '../Teleport';
import PlacerWrapper from './PlacerWrapper';

const Y_AXIS_PRESET_CALCULATORS = {
    'outside-top': (targetRect: Object, placeableRect: Object, rootRect: Object) => {
        console.log('### =>',  targetRect.top, placeableRect.height, rootRect.top);

        return {
            top: targetRect.top - placeableRect.height
        }
    }
};
export default class Placer extends React.Component {
    static propTypes = {
        xAxisPresets: PropTypes.arrayOf(PropTypes.oneOf([
            'outside-top',
            'outside-bottom',
            'inside-top',
            'inside-bottom',
            'middle'
        ])),
        yAxisPresets: PropTypes.arrayOf(PropTypes.oneOf([
            'outside-top',
            'outside-bottom',
            'inside-top',
            'inside-bottom',
            'middle'
        ]))
    };

    static defaultProps = {
        xAxisPresets: ['middle'],
        yAxisPresets: ['outside-top']
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
        console.log('X:', props.xAxisPresets);
        console.log('Y:', props.yAxisPresets);
    }
    
    componentDidMount() {
        console.log('#### mount');
    }

    _onWrapperMountHandler(c) {
        this._wrapperComponent = c;

        this._wrapperComponent.setStyles(this._generateStyles());
        // console.log('parent:', this._getTargetRect());
        // console.log('root:', this._getRootRect());
    }

    _onTeleportMountHandler(c) {
        this._teleportComponent = c;
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

    _calculatePosition(): Object {
        const targetRect = this._getTargetRect();
        const placeableRect = this._getPlaceableRect();
        const rootRect = this._getRootRect();

        const yAxis = Y_AXIS_PRESET_CALCULATORS[this.props.yAxisPresets[0]](targetRect, placeableRect, rootRect);
        console.log('## yAxis', yAxis);

        return Object.assign({}, yAxis);
    }

    _generateStyles(): Object {
        const position = this._calculatePosition();

        return {
            top: position.top ? `${position.top}px` : 0,
            visibility: 'visible'
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