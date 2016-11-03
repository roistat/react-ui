'use strict';

import React, { PropTypes } from 'react';

import View from '../View';

import { StyleSheet, css } from '../helpers/styles';

export default class DialogPopup extends React.Component {
    static PropTypes = {
        /**
         * Dialog popup size
         */
        size: PropTypes.oneOf(['xs', 'm', 'l', 'xl', 'xxl']),
        /**
         * On close handler
         */
        onClose: PropTypes.func
    };

    static defaultProps = {
        size: 'm'
    };

    _renderChildren() {
        const props = this.props;

        return React.Children.map(props.children, (child) => {
            if (child && child.type && child.type.__DIALOG_POPUP_HEADER__) {
                return React.cloneElement(child, {
                    onClose: props.onClose
                });
            }

            return child;
        });
    }

    render() {
        const props = this.props;
        const size = props.size;
        
        return (
            <View styles={[styles.popup , styles[size]]}>
                {this._renderChildren()}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    popup: {
        boxShadow: '0 10px 20px rgba(27, 42, 48, 0.25)',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    xs: {
      width: '12rem'
    },
    m: {
        width: '16rem'
    },
    l: {
        width: '24rem'
    },
    xl: {
        width: '32rem'
    },
    xxl: {
        width: '40rem'
    }
});
