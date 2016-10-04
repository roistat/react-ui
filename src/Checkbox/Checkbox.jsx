'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import AbstractButton from '../AbstractButton';

import { COLOR, SHADOW } from '../const/theme';
import { StyleSheet, css } from '../helpers/styles';

export default class Checkbox extends AbstractButton {
    static propTypes = {
        /**
         * Is checkbox disabled.
         */
        isDisabled: PropTypes.bool,
        /**
         * Is checkbox in checked state, use only for isToggleMod=true
         */
        isChecked: PropTypes.bool,
        /**
         * On click event handler
         */
        onClick: PropTypes.func
    };

    static defaultProps = {
        ...AbstractButton.defaultProps,
        isToggleMod: true
    };

    render() {
        return (
            <button
                {...this.getDefaultRenderProps()}
                className={css(...this.buildStyleList(STYLE, 'root'))}
            >
                {
                    this.state.isChecked && !this.state.isDisabled &&
                    <View className={css(STYLE.viewRoot)}>
                        <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 7">
                            <path d="M0.844,2.844 L4.844,6.844 L10.844,0.844 "className={css(STYLE.icon)}/>
                        </svg>
                    </View>
                }
            </button>
        )
    }
}

const STYLE = StyleSheet.create({
    root: {
        ...AbstractButton.BASE_ROOT_STYLE,
        width: '.8rem',
        height: '.8rem',
        border: `1px solid ${COLOR.BORDER}`,
        borderRadius: '2px',
        boxShadow: SHADOW.INPUT,
        transition: 'all .05s ease-in'
    },
    rootIsChecked: {
        background: COLOR.ACTIVE,
        boxShadow: 'none'
    },
    rootIsDisabled: {
        cursor: 'default',
        transition: 'none',
        border: '1px solid #c3cacd',
        boxShadow: 'none',
        background:  COLOR.DISABLED
    },
    rootIsFocused: {
        boxShadow: `${SHADOW.FOCUS}, ${SHADOW.INPUT}`
    },
    viewRoot: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconRoot: {
        width: '100%',
        height: '100%'
    },
    icon: {
        stroke: COLOR.TEXT,
        strokeWidth: '1px',
        fill: 'none',
        fillRule: 'evenodd'
    }
});
