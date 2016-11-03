'use strict';

import React, { PropTypes } from 'react';

import View from '../View';

import { StyleSheet, css } from '../helpers/styles';

export default class DialogPopupFooter extends React.Component {
    render() {
        const props = this.props;

        return (
            <View styles={[styles.footer, ...(props.styles || [])]}>
                {
                    React.Children.map(props.children , (child, idx) => {
                        if (child === null || child === undefined) {
                            return null;
                        }

                        if (idx === 0) {
                            return (
                                <View>{child}</View>
                            );
                        }

                        return (
                            <View styles={[styles.margin]}>{child}</View>
                        );
                    })
                }
            </View>
        )
    }
};

const styles = StyleSheet.create({
    footer : {
        padding: '.8rem 1rem'
    },
    margin: {
        marginLeft: '.5rem'
    }
});
