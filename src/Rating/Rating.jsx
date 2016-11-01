'use strict';

import React, {PropTypes} from 'react';

import Icon from '../FontIcon';

import { StyleSheet, css } from '../helpers/styles';

class Rating extends React.Component {
    static propTypes = {
        /**
         * Current Rate
         */
        currentRate: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
        /**
         * Rating stars size
         */
        size: PropTypes.oneOf([
            's',
            'l'
        ]),
        /**
         * On change event handler
         */
        onChange: PropTypes.func,
        /**
         * is rating choice active
         */
        active: PropTypes.bool
    };

    static defaultProps = {
        rate: 0,
        size: 's',
        active: true
    };

    constructor(props) {
        super(props);
        this.state = {
            hoveredRate: null
        };
    };

    onStarMouseEnter(rate) {
        this.props.active && this.setState({ hoveredRate: rate });
    };

    onStarMouseLeave() {
        this.props.active && this.setState({ hoveredRate: null });
    };

    onStarClick(rate) {
        this.props.active &&  rate !== this.props.currentRate && this.props.onChange && this.props.onChange(rate);
    };

    renderStars() {

        return [1, 2, 3, 4, 5].map((rate, idx) => {
            const shownRate = this.state.hoveredRate ? this.state.hoveredRate : this.props.currentRate;
            return (
                <Icon
                    key={idx}
                    name={rate < shownRate + 1 ? 'star' : 'star-o'}
                    className={css(
                        STYLE.iconBase,
                        this.props.active && STYLE.iconActive,
                        (rate < shownRate + 1) && STYLE.iconChecked
                    )}
                    onMouseEnter={this.onStarMouseEnter.bind(this, rate)}
                    onMouseLeave={this.onStarMouseLeave.bind(this)}
                    onClick={this.onStarClick.bind(this, rate)}
                />
            );
        });
    };

    render() {
        return (
            <div className={css(
                STYLE.base,
                STYLE.getPreset('size', this.props.size),
                STYLE.iconNotChecked
            )}
            >{this.renderStars()}</div>
        );
    }
}

const STYLE = StyleSheet.create({
    base: {
        display: 'inline-block'
    },
    sizeS: {
        fontSize: '.55rem',
        lineHeight: '.6rem'
    },
    sizeL: {
        fontSize: '1.1rem',
        lineHeight: '1rem'
    },
    iconBase: {
        verticalAlign: 'middle',
        paddingRight: '2px'
    },
    iconNotChecked: {
        color: '#8f989c'
    },
    iconChecked: {
        color: '#8cc451'
    },
    iconActive: {
        cursor: 'pointer'
    }
});

export default Rating;
