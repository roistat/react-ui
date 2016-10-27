'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';
import { COLOR, FONT } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

const Hint = (props) => {
    const { tailPosition } = props;
    return (
        <View styles={[STYLE.hint, ...(props.styles || {})]} >
            <View 
                styles={[
                    STYLE.triangle, 
                    (['leftTop', 'rightTop', 'leftBottom', 'rightBottom'].indexOf(tailPosition) != -1) && STYLE.triangleHorizontal,
                    (['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].indexOf(tailPosition) != -1) && STYLE.triangleVertical,
                    STYLE.getPreset(tailPosition, '')
                ]}
            />
            <View className={css(STYLE.textBox)}>
                <Text className={css(STYLE.hintText)}>
                    {props.children}
                </Text>
            </View>
        </View>
    )
}

Hint.propTypes = {
    /**
     * Tail position
     */
    tailPosition: PropTypes.oneOf(
        [
            'leftTop', 
            'rightTop', 
            'topLeft', 
            'leftBottom', 
            'rightBottom', 
            'topRight', 
            'bottomLeft', 
            'bottomRight'
        ]
    ).isRequired
};

Hint.defaultProps = {
    tailPosition: 'leftTop'
};

const STYLE = StyleSheet.create({
    hint: {
        position: 'relative',
        border: '1px dashed #d7d8d9',
        background: COLOR.GRAY_HOVER,
        overflow: 'visible',
        borderRadius: '0.1rem',
        padding: '.4rem'
    },
    triangle: {
        position: 'absolute',
        width: '0.4rem',
        height: '0.4rem',
        background: COLOR.GRAY_HOVER
    },
    triangleHorizontal: {
        borderTop: 'none',
        borderBottom: '1px dashed #d7d8d9',
        borderLeft: '1px dashed #d7d8d9',
        borderRight: 'none'
    },
    triangleVertical: {
        borderTop: '1px dashed #d7d8d9',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: '1px dashed #d7d8d9'
    },
    leftTop: {
        transform: 'rotate(45deg)',
        left: '-4px',
        top: '6px'
    },
    rightTop: {
        transform: 'rotate(225deg)',
        right: '-4px',
        top: '6px'
    },
    topLeft: {
        transform: 'rotate(-45deg)',
        left: '6px',
        top: '-4px'
    },
    topRight: {
        transform: 'rotate(-45deg)',
        right: '6px',
        top: '-4px'
    },
    leftBottom: {
        transform: 'rotate(45deg)',
        left: '-4px',
        bottom: '6px'
    },
    rightBottom: {
        transform: 'rotate(225deg)',
        right: '-4px',
        bottom: '6px'
    },
    bottomLeft: {
        transform: 'rotate(135deg)',
        left: '6px',
        bottom: '-4px'
    },
    bottomRight: {
        transform: 'rotate(135deg)',
        right: '6px',
        bottom: '-4px'
    },
    textBox: {
        flex: 1,
        zIndex: 10,
        overflow: 'hidden'
    },
    hintText: {
        color:  COLOR.SUB_TEXT,
        overflow: 'hidden',
        fontSize: FONT.SIZE_SUB_TEXT,
        lineHeight: '.95rem'
    }
});

export default Hint;
