'use strict';

import React, { PropTypes } from 'react';
import AbstractButton from '../AbstractButton';

import { FONT, COLOR, SHADOW } from '../const/theme';

import Color from 'color';
import { StyleSheet, css } from '../helpers/styles';

export default class Button extends AbstractButton {
    static propTypes = {
        /**
         * Is button disabled.
         */
        isDisabled: PropTypes.bool,
        /**
         * Is button in toggle mod, on click button change checked state.
         */
        isToggleMod: PropTypes.bool,
        /**
         * Is button in checked state, use only for isToggleMod=true
         */
        isChecked: PropTypes.bool,
        /**
         * On focus event handler
         */
        onFocus: PropTypes.func,
        /**
         * On blur event handler
         */
        onBlur: PropTypes.func,
        /**
         * On mouse enter event handler
         */
        onMouseEnter: PropTypes.func,
        /**
         * On focus leave evnet handler
         */
        onMouseLeave: PropTypes.func,
        /**
         * On click event handler
         */
        onClick: PropTypes.func,
        /**
         * On mouse down event handler
         */
        onMouseDown: PropTypes.func,
        /**
         * On mouse up event handler
         */
        onMouseUp: PropTypes.func,
        /**
         * Button size
         */
        size: PropTypes.oneOf(['l', 'm', 's', 'xs'])
    };

    static defaultProps = {
        size: 'm'
    };

    render() {
        const props = this.props;

        return (
            <button
                {...this.getDefaultRenderProps()}
                className={
                    css(
                        ...this.buildStyleList(styles, 'button'),
                        styles[`buttonSize${props.size.toUpperCase()}`],
                        ...(props.styles || [])
                        )}>
                {props.children}
            </button>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        ...AbstractButton.BASE_ROOT_STYLE,
        position: 'relative',
        borderRadius: '4px',

        maxWidth: '100%',
        padding: '6px 12px',

        fontFamily: FONT.FAMILY,
        fontSize: FONT.SIZE.BUTTON_TEXT,
        color: COLOR.TEXT,
        lineHeight: '1.2rem',

        background: 'linear-gradient(to top, rgb(241,242,243) 0%, rgb(255,255,255) 100%)',
        boxShadow: 'inset 0px -2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce;',
        '&:hover': {
            background: 'linear-gradient(to top, rgb(237,238,239) 0%, rgb(247,248,249) 100%)'
        },
        '&:active': {
            background: 'linear-gradient(to top, rgb(237,238,239) 0%, rgb(247,248,249) 100%)',
            boxShadow: 'inset 0px 2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce'
        }
    },
    buttonIsFocused: {
        boxShadow: `${SHADOW.FOCUS}, inset 0px -2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce;`
    },
    buttonSizeL: {
        padding: '.3rem .6rem',
        minWidth: '1.8rem',
        height: '1.8rem'
    },
    buttonSizeM: {
        padding: '.2rem .6rem',
        minWidth: '1.6rem',
        height: '1.6rem'
    },
    buttonSizeS: {
        padding: '.1rem .4rem',
        minWidth: '1.4rem',
        height: '1.4rem'
    },
    buttonSizeXS: {
        fontSize: FONT.SIZE.BUTTON_SMALL_TEXT,
        padding: '0 .4rem',
        minWidth: '1.2rem',
        height: '1.2rem'
    },
    buttonIsDisabled: {
        transition: 'none',
        color: COLOR.MUTED,
        background: 'linear-gradient(to top, rgb(0,159,101) 0%, rgb(1,171,109) 100%)',
        boxShadow: 'inset 0px -2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce;',
    }
});