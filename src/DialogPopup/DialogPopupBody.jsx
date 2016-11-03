'use strict';

import React, { PropTypes } from 'react';

import View from '../View';

import { StyleSheet, css } from '../helpers/styles';

export default class DialogPopupBody extends React.Component {
    static PropTypes = {
        /**
         * Is body has padding
         */
        isHasPadding: PropTypes.bool
    };

    static defaultProps = {
        isHasPadding: true
    };

    render() {
        const props = this.props;

        return (
            <View styles={[styles.body, props.isHasPadding && styles.bodyPadding]}>
                {props.children}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    body : {
        lineHeight: '1rem',
    },
    bodyPadding: {
        padding: '.5rem 1rem'
    }
});
