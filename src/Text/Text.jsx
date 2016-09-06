import React, { PropTypes } from 'react';
import { FONT, COLOR } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

var Text = (props) => {
    const { numberOfLines, styles, ...rest } = props;

    return (
        <span
            {...rest}
            className={css(STYLES.text,numberOfLines == 1 && STYLES.singleLine, ...(styles || []))}
            >
            {props.text || props.children}
        </span>
    )
};

Text.propTypes = {
    /**
     * Css styles, applied to text
     */
    styles: PropTypes.arrayOf(PropTypes.string)
};

const STYLES = StyleSheet.create({
    text: {
        display: 'inline-block',
        fontFamily: FONT.FAMILY,
        fontSize: FONT.SIZE_TEXT,
        fontWeight: 400,
        lineHeight: FONT.BASE_LINE_HEIGHT,
        color: COLOR.TEXT
    },
    singleLine: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    sub: {
        fontSize: FONT.SIZE_SUB_TEXT,
        color: COLOR.SUB_TEXT
    }
});

export default Text;
