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
        const { styles, children, className, ...rest } = this.props;
        const extraClassName = styles &&  styles.length ? ` ${css(...styles)}` : '';

        return (
            <div
                {...rest}
                className={viewClassName + extraClassName + (className ? ` ${className}` : '')}>
                {children}
            </div>
        )
    }
}