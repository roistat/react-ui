'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class TeleportWrapper extends React.Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);

        this.state = { children: props.children };
    }

    componentDidMount() {
        this._isMount = true;
        this._selfDOMNode = ReactDOM.findDOMNode(this);
    }

    componentWillUnmount() {
        this._isMount = false;
        this._selfDOMNode = null;
    }

    getDOMNode() {
        return this._selfDOMNode;
    }

    update(newChildren: Object, callback: () => void) {
        this.setState({ children: newChildren ? React.Children.only(newChildren) : null }, callback);
    }

    isMount(): boolean {
        return !!this._isMount;
    }

    render() {
        return (
            <div>
                {this.state.children}
            </div>
        )
    }
}