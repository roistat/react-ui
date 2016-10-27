'use strict';

import React, { PropTypes } from 'react';

import { StyleSheet, css } from '../helpers/styles';

const Overlay = (props) => {

    const { color, opacity, styles, ...rest } = props;

    return (
        <div
            className={css(STYLE.overlay, props.isFixed && STYLE.rootIsFixed)}
            style={{ background: props.color, opacity: props.opacity, ...(props.style || {}) }}>
            {props.children}
        </div>
    );
};

Overlay.propTypes = {
    /**
     * Overlay background color
     */
    color: PropTypes.string,
    /**
     * Overlay opacity
     */
    opacity: PropTypes.number,
    /**
     * is Overlay has fixed position
     */
    isFixed: PropTypes.bool
};

Overlay.defaultProps = {
    color: '#fff',
    opacity: .45,
    styles: []
};

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

export default Overlay;
