'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';
import CloseCross from '../CloseCross';

import { FONT, COLOR } from '../const/theme';
import { StyleSheet, css } from '../helpers/styles';

export default class DialogPopupHeader extends React.Component {
    static __DIALOG_POPUP_HEADER__ = true;

    render() {
        const props = this.props;

        return (
            <View styles={[styles.header]}>
                <View styles={[styles.headerView]}>
                    <Text styles={[styles.headerText]}>
                        {props.children}
                    </Text>
                </View>
                <View
                    onClick={props.onClose}
                    styles={[styles.icon]}>
                    <CloseCross />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        alignItems: 'center',
        padding: '.4rem 0 .4rem 1rem',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d7d8d9'
    },
    headerView: {
        flex: 1
    },
    headerText: {
        fontSize: FONT.SIZE_TEXT,
        color: COLOR.TEXT,
        fontWeight: 700
    },
    icon: {
        fontSize: '.8rem',
        lineHeight: FONT.LINE_HEIGHT_BUTTON,
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem'
    }
});
