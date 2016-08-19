'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import CloseCross from '../CloseCross';

import { StyleSheet, css } from '../helpers/styles';

import { COLOR, FONT } from '../const/theme';
import { buildShadowBorder } from '../helpers/styles';
import { filterChildrenByType } from '../helpers/reactElements';

export default class ModalHeader extends React.Component {
    static __MODAL_HEADER__ = true;

    static propTypes = {
        onClose: PropTypes.func
    };

    _renderLeftLayoutChildren() {
        return (
            <View styles={[styles.left]}>
                {filterChildrenByType(this.props.children, '__MODAL_HEADER_LEFT_LAYOUT__')}
            </View>
        );
    }

    _renderRightLayoutChildren() {
        const children = filterChildrenByType(this.props.children, '__MODAL_HEADER_RIGHT_LAYOUT__');

        if (!children.length) {
            return null;
        }

        return (
            <View styles={[styles.right]}>
                {children}
            </View>
        );
    }

    render() {
        const props = this.props;

        return (
            <View styles={[styles.header]}>
                {this._renderLeftLayoutChildren()}
                {this._renderRightLayoutChildren()}
                <View
                    onClick={props.onClose}
                    styles={[styles.icon]}>
                    <CloseCross />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: '2rem',
        background: '#fff',
        boxShadow: buildShadowBorder('0 0 1 0', COLOR.DIVIDER_GROUP)
    },
    left: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0 .5rem 0 1rem'
    },
    right: {
        boxShadow: buildShadowBorder('0 1 0 0', COLOR.DIVIDER)
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