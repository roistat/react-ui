'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';
import { COLOR, FONT } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

export default class Hint extends React.Component {
    static propTypes = {
        /**
         * Tail position
         */
        tailPosition: PropTypes.oneOf(['leftTop', 'rightTop', 'topLeft'])
    };

    static defaultProps = {
        tailPosition: 'leftTop'
    };

    render() {
        const props = this.props;

        return (
                <View styles={[STYLE.hint, ...props.styles || []]}>
                    <View
                        styles={[
                        STYLE.triangle,
                        (props.tailPosition === 'leftTop' ||  props.tailPosition === 'rightTop') && STYLE.triangleHorizontal ,
                        (props.tailPosition === 'topLeft' ) && STYLE.triangleVertical ,
                        props.tailPosition === 'leftTop' && STYLE.leftTop,
                        props.tailPosition === 'rightTop' && STYLE.rightTop,
                        props.tailPosition === 'topLeft'&& STYLE.topLeft
                    ]}
                    >
                    </View>
                    <View styles={[STYLE.textBox]}>
                        <Text styles={[STYLE.hintText]}>
                            {props.children}
                        </Text>
                    </View>
                </View>
        )
    }
}

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
        transform: 'rotate(45deg) translateX(-6px) translateY(9px)'
    },
    rightTop: {
        transform: 'rotate(225deg)',
        right: '-4px',
        top: '6px'
    },
    topLeft: {
        transform: 'rotate(-45deg) translateX(9px) translateY(-6px)'
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
