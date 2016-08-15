'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class PlacerWrapper extends React.Component {
    static propTypes = {
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

    setStyles(styles: Object) {
        Object.assign(this.getDOMNode().style, styles);
    }

    render() {
        const props = this.props;

        return (
            <div style={{ visibility: 'hidden' }}>
                {props.children}
            </div>
        )
    }
}