import React, { PropTypes } from 'react';
import { FONT, COLOR } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

var Text = (props) => {
    const { styles, ...rest } = props;

    return (
        <span
            {...rest}
            className={css(STYLES.text, ...(styles || []))}
            style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }}
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
    sub: {
        fontSize: FONT.SIZE_SUB_TEXT,
        color: COLOR.SUB_TEXT
    }
});

export default Text;
