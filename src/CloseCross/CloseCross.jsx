'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, css } from '../helpers/styles';

import { COLOR } from '../const/theme';
import Icon from '../SVGIcons/CloseCrossIcon';

const CloseCross = (props) => {
    const { size, styles, isHasHover, ...rest } = props;

    return (
        <div
            {...rest}
            className={css(
                STYLE.closeCross,
                STYLE.getPreset('size', size),
                isHasHover && STYLE.closeCrossHover,
                ...(styles || []))
            }>
            <Icon color={isHasHover ? COLOR.MUTED : COLOR.TEXT} />
        </div>
    )
};

CloseCross.propTypes = {
    /**
     * Size of CloseCross icon
     */
    size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
    /**
     * Is has hover animation
     */
    isHasHover: PropTypes.bool
};

CloseCross.defaultProps = {
    size: 'm',
    isHasHover: false
};

const STYLE = StyleSheet.create({
    closeCross: {
        cursor: 'pointer',
        verticalAlign: 'top',
        height: '16px',
        width: '16px',
        lineHeight: '16px',
        '& path': {
            transition: 'all 0.15s ease-in'
        }
    },
    closeCrossHover: {
        '&:hover path': {
            stroke: COLOR.TEXT
        }
    },
    sizeL: {
        fontSize: '1.4rem'
    },
    sizeM: {
        fontSize: '1.2rem'
    },
    sizeS: {
        fontSize: '1rem'
    },
    sizeXs: {
        fontSize: '.8rem'
    }
});

export default CloseCross;
