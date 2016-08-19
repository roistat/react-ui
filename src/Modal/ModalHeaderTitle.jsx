'use strict';

import React, { PropTypes } from 'react';
import Text from '../Text';

import { StyleSheet, css } from '../helpers/styles';
import { COLOR, FONT } from '../const/theme';

const ModalHeaderTitle = (props) => (
    <Text styles={[styles.root]}>
        {props.children}
    </Text>
);

ModalHeaderTitle.__MODAL_HEADER_LEFT_LAYOUT__ = true;

const styles = StyleSheet.create({
    root: {
        fontSize: FONT.SIZE_TITLE,
        lineHeight: FONT.LINE_HEIGHT_TITLE,
        fontWeight: 600,
        marginRight: '.5rem'
    }
});

export default ModalHeaderTitle;