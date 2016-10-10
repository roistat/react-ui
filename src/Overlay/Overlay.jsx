'use strict';

import React, { PropTypes } from 'react';

import { StyleSheet, css } from '../helpers/styles';

export default class Overlay extends React.Component {
    static propTypes = {
        color: PropTypes.string,
        opacity: PropTypes.number,
        isFixed: PropTypes.bool
    };

    static defaultProps = {
        color: '#fff',
        opacity: .45,
        styles: []
    };

    render() {
        const props = this.props;
        return (
            <div
                className={css(STYLE.overlay, props.isFixed && STYLE.rootIsFixed)}
                style={{ background: props.color, opacity: props.opacity, ...props.style }}>
                {props.children}
            </div>
        )
    }
}

const STYLE = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: '999'
    },
    rootIsFixed: {
        position: 'fixed'
    }
});
