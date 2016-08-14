'use strict';

import React, { PropTypes } from 'react';

export default class Placeable extends React.Component {
    static propTypes = {};

    render() {
        return this.props.children
    }
}