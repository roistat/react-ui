'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';

export default class PlacerWrapper extends React.Component {
    static propTypes = {
        /**
         * On component mount function
         */
        onDidMount: PropTypes.func
    };

    componentDidMount() {
        const props = this.props;

        this._selfDOMNode = ReactDOM.findDOMNode(this);
        props.onDidMount && props.onDidMount(this)
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

    render() {
        const props = this.props;

        return (
            <div
                style={{
                    zIndex: props.zIndex,
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
