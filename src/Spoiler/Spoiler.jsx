'use strict';

import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';
import FontIcon from '../FontIcon';

import { FONT, COLOR } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

export default class Spoiler extends React.Component {
    static propTypes = {
        /**
         * Spoiler title
         */
        title: PropTypes.string,
        /**
         * Spoiler text
         */
        text: PropTypes.string
    };

    static defaultProps = {
        title: 'Спойлер'
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const props = this.props;
        const state = this.state;

        return (
            <View styles={[STYLE.root]}>
                <View
                    styles={[STYLE.titleContainer]}
                    onClick={() => this.setState({ isOpen: !state.isOpen })}
                >
                    <View styles={[STYLE.iconContainer]}>
                        <View styles={[state.isOpen ? STYLE.iconRight : STYLE.iconDown]} />
                    </View>
                    <Text styles={[STYLE.title]}>
                        {props.title}
                    </Text>
                </View>
                {
                    state.isOpen &&
                        <View styles={[STYLE.textContainer]}>
                            <Text styles={[STYLE.text]}>
                                {props.text}
                            </Text>
                        </View>
                }
            </View>
        )
    }
}

const STYLE = StyleSheet.create({
    root: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    titleContainer: {
        alignItems: 'center',
        cursor: 'pointer'
    },
    iconContainer: {
        width: '.75rem',
        height: '1.25rem',
        alignItems: 'center'
    },
    iconDown: {
        width: '10px',
        height: '10px',
        border: '5px solid transparent',
        borderTop: `5px solid ${COLOR.PRIMARY_MEDIUM}`,
        marginTop: 5
    },
    iconRight: {
        width: '10px',
        height: '10px',
        border: '5px solid transparent',
        borderLeft: `5px solid ${COLOR.PRIMARY_MEDIUM}`,
        marginLeft: 5
    },
    title: {
        flex: 1,
        fontSize: FONT.SIZE_TEXT,
        lineHeight: '1.25rem',
        color: COLOR.PRIMARY_MEDIUM
    },
    textContainer: {
        paddingLeft: '.75rem',
        marginBottom: '.5rem'
    },
    text: {
        fontSize: FONT.SIZE_TEXT,
        lineHeight: FONT.LINE_HEIGHT_TEXT
    }
});
