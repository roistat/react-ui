'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';
import { COLOR} from '../const/theme';

const Spinner = (props) => {
    return (
        <div
            className={css(styles.spinner, styles.getPreset('size', props.size))}
            style={{ borderColor: props.color || COLOR.PRIMARY }}
        />
    )
};

Spinner.propTypes = {
    /**
     * Spinner size
     */
    size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'tiny']),
    /**
     * Spinner color
     */
    color: PropTypes.string
};

Spinner.defaultProps = {
    size: 'xs',
    color: COLOR.PRIMARY
};

const styles = StyleSheet.create({
    spinner: {
        animation: 'SpinnerAnimation 1250ms infinite linear',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderRightColor: 'transparent !important',
        borderRadius: '50%',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        overflow: 'hidden',
        textIndent: '-9999px',
    },
    sizeXs: {
        width: '16px',
        height: '16px',
        borderWidth: '2px'
    },
    sizeS: {
        width: '24px',
        height: '24px',
        borderWidth: '3px'
    },
    sizeM: {
        width: '32px',
        height: '32px'
    },
    sizeL: {
        width: '64px',
        height: '64px',
        borderWidth: '6px',
    },
    sizeTiny: {
        width: '12px',
        height: '12px',
        borderWidth: '1px',
    },
    '@keyframes SpinnerAnimation': {
        '0%':  {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    }
});


export default Spinner;