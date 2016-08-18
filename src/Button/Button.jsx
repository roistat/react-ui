'use strict';

import React, { PropTypes } from 'react';
import AbstractButton from '../AbstractButton';
import View from '../View';

import { FONT, COLOR, SHADOW } from '../const/theme';

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
        size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
        /**
         * Show waiting status
         */
        isWaiting: PropTypes.bool
    };

    static defaultProps = {
        size: 'm'
    };

    _getChildren() {
        const { children } = this.props;
        const result = [];
        const count = React.Children.count(children);

        if (count === 1) {
            return children;
        }

        React.Children.forEach(this.props.children, (item, idx) => {
            result.push(item);

            if (idx !== (count - 1)) {
                result.push('\u00a0');
            }
        });

        return result;
    }

    render() {
        const props = this.props;
        
        return (
            <button
                {...this.getDefaultRenderProps()}
                className={css(...this.buildStyleList(styles, 'button'), styles.getPreset('size', props.size))}>
                <View styles={[styles.content, props.isWaiting && styles.hiddenContent]}>
                    {this._getChildren()}
                    {props.isWaiting &&
                        <View className={css(styles.spinner)}>
                            <Spinner
                                size={props.size === 'xs' ? 'tiny' : 'xs'}
                                color={props.isDisabled ? COLOR.MUTED : COLOR.PRIMARY}
                            />
                        </View>
                    }
                </View>
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
    content: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    buttonIsFocused: {
        boxShadow: `${SHADOW.FOCUS}, inset 0px -2px 0px 0px rgba(27, 42, 48, 0.1), inset 0px -1px 0px 0px #b4bdc0, inset 1px 1px 0px 0px #c6cbce, inset -1px 0px 0px 0px #c6cbce;`
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
    sizeL: {
        padding: '.3rem .6rem',
        minWidth: '1.8rem',
        height: '1.8rem'
    },
    sizeM: {
        padding: '.2rem .6rem',
        minWidth: '1.6rem',
        height: '1.6rem'
    },
    sizeS: {
        padding: '.1rem .4rem',
        minWidth: '1.4rem',
        height: '1.4rem'
    },
    sizeXs: {
        fontSize: FONT.SIZE.BUTTON_SMALL_TEXT,
        padding: '0 .4rem',
        minWidth: '1.2rem',
        height: '1.2rem'
    },
    hiddenContent: {
        visibility: 'hidden'
    },
    spinner: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        visibility: 'visible'
    }
});