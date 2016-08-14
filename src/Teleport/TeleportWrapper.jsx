'use strict';

import React, { PropTypes } from 'react';

export default class TeleportWrapper extends React.Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);

        this.state = { children: props.children };
    }

    componentDidMount() {
        this._isMount = true;
    }

    componentWillUnmount() {
        this._isMount = false;
    }

    componentWillReceiveProps(newProps) {
        if (newProps.children !== this.state.children) {
            this.setState({ children: newProps.children });
        }
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