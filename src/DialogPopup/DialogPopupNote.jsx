'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';

import { FONT } from '../const/theme';
import { StyleSheet, css } from '../helpers/styles';

export default class DialogPopupNote extends React.Component {
    static PropTypes = {
        /**
         * Dialog popup message type
         */
        type: PropTypes.oneOf(['error', 'info', 'warning'])
    };

    static defaultProps = {
        type: 'info'
    };
    
    render() {
        const props = this.props;
        const type = props.type;

        return (
            <View styles={[styles[type], ...(props.styles || [])]}>
                <Text styles={[styles.noteText]}>
                    {props.children}
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    error: {
        backgroundColor: '#fff4ed',
        borderLeft: ' 4px #ff6000 solid'
    },
    info: {
        backgroundColor: '#eff6f9',
        borderLeft: ' 4px #038cd5 solid'
    },
    warning: {
        backgroundColor: '#f9f8e9',
        borderLeft: ' 4px #e1d400 solid'
    },
    noteText: {
        padding: '.8rem 1rem .8rem .8rem',
        fontSize: FONT.SIZE_TEXT,
        lineHeight: '1rem'
    }
});
