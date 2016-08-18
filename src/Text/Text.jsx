import React, { PropTypes } from 'react';
import { FONT, COLOR } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

var Text = (props) => {
    const { numberOfLines, styles, ...rest } = props;

    return (
        <span
            {...rest}
            className={css(STYLES.text, ...(styles || []))}
            style={
                Object.assign(
                    {},
                    numberOfLines && {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    },
                    numberOfLines === 1 && {
                        whiteSpace: 'nowrap'
                    }
                )
            }>
            {props.text || props.children}
        </span>
    )
};

Text.propTypes = {
    styles: PropTypes.arrayOf(PropTypes.string),
    numberOfLines: PropTypes.oneOf([1])
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