'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';

const viewClassName = css(StyleSheet.create({
    view: {
        display: 'flex',
        flexShrink: 0,
        boxSizing: 'border-box'
    }
}).view);

export default class View extends React.Component {
    static propTypes = {
        styles: PropTypes.array
    };

    static defaultProps = {
        styles: []
    };

    render() {
        const props = this.props;
        const extraClassName = props.styles &&  props.styles.length ? ` ${css(...props.styles)}` : '';
        const className = props.className ? ` ${props.className}` : '';

        return (
            <div
                {...props}
                className={viewClassName + extraClassName + className}>
                {props.children}
            </div>
        )
    }
}