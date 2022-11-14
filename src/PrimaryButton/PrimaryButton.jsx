'use strict';

import React, { PropTypes } from 'react';
import AbstractButton from '../AbstractButton';
import Spinner from '../Spinner';
import View from '../View';

import { FONT, COLOR, SHADOW } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

export default class PrimaryButton extends AbstractButton {
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
        size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
        /**
         * Is button has preloader
         */
        isWaiting: PropTypes.bool
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
                        styles.getPreset('size', props.size))
                }>
                {
                    !props.isWaiting ?
                        props.children:
                        (
                            <View styles={[styles.content]}>
                                <View styles={[styles.isFetchingText]}>
                                    {props.children}
                                </View>
                                <View styles={[styles.spinner]}>
                                    <Spinner size='xs' color='#fff' />
                                </View>
                            </View>
                        )
                }
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

        fontSize: FONT.SIZE.BUTTON_TEXT,
        color: '#fff',
        lineHeight: '1.2rem',


        background: 'linear-gradient(to top, rgb(0,159,101) 0%, rgb(1,171,109) 100%)',
        boxShadow: 'inset 0px -1px 0px 0px rgba(27, 42, 48, 0.35)',
        '&:hover': {
            background: 'linear-gradient(to top, rgb(0,151,96) 0%, rgb(1,162,103) 100%)'
        },
        '&:active': {
            background: 'linear-gradient(to top, rgb(0,151,96) 0%, rgb(1,162,103) 100%)',
            boxShadow: 'inset 0px 2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce'
        }
    },
    buttonIsFocused: {
        boxShadow: `${SHADOW.FOCUS}, inset 0px -2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce;`
    },
    sizeL: {
        padding: '6px 12px',
        minWidth: '36px',
        height: '36px',
    },
    sizeM: {
        padding: '4px 12px',
        minWidth: '32px',
        height: '32px',
    },
    sizeS: {
        padding: '2px 8px',
        minWidth: '28px',
        height: '28px',
    },
    sizeXs: {
        fontSize: FONT.SIZE.BUTTON_SMALL_TEXT,
        padding: '0 8px',
        minWidth: '24px',
        height: '24px',
    },
    buttonIsDisabled: {
        cursor: 'default',
        transition: 'none',
        color: COLOR.MUTED,
        border: '1px solid #c3cacd',
        boxShadow: 'none',
        background:  COLOR.DISABLED,
        '&:hover': {
            cursor: 'default',
            border: '1px solid #c3cacd',
            boxShadow: 'none',
            background:  COLOR.DISABLED,
        },
        '&:active': {
            cursor: 'default',
            border: '1px solid #c3cacd',
            boxShadow: 'none',
            background:  COLOR.DISABLED,
        }
    },
    content: {
        position: 'relative'
    },
    spinner: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-8px',
        marginTop: '-8px'
    },
    isFetchingText: {
        visibility: 'hidden'
    }
});