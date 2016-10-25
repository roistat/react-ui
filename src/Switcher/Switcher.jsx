'use strict';

import React, { PropTypes } from 'react';

import { COLOR } from '../const/theme';

import { StyleSheet, css } from '../helpers/styles';

export default class Switcher extends React.Component {
    static propTypes = {
        /**
         * Is switcher in checked state
         */
        isChecked: PropTypes.bool,
        /**
         * Is switcher in disabled state
         */
        isDisabled: PropTypes.bool,
        /**
         * On click event handler
         */
        onClick: PropTypes.func,
        /**
         * On change event handler
         */
        onChange: PropTypes.func
    };

    static defaultProps = {
        isChecked: false,
        isDisabled: false
    };

    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.isChecked,
            isDisabled: props.isDisabled
        };

        this._onClickHandler = this._onClickHandler.bind(this);
        this._onChangeHandler = this._onChangeHandler.bind(this);
    }

    _onChangeHandler(event) {
        const props = this.props;

        if (!props.isDisabled) {
            props.onChange && props.onChange(event);
        }
    }

    _onClickHandler(event) {
        const props = this.props;

        if (!props.isDisabled) {
            this.setState({ isChecked: !this.state.isChecked });
            props.onClick && props.onClick(event);
        };
    }

    getDefaultRenderProps() {
        return {
            onChange: this._onChangeHandler,
            onClick: this._onClickHandler
        };
    }

    render() {
        const props = this.props;

        return (
            <div {...this.getDefaultRenderProps()}>
                <div className={css(STYLE.main, this.state.isChecked && STYLE.on, props.isDisabled && STYLE.isDisabled )}>
                    <div className={css(STYLE.toggle, this.state.isChecked && STYLE.toggleOn, props.isDisabled && STYLE.isDisabled )}>
                    </div>
                </div>
            </div>
            )
    }
}

const STYLE = StyleSheet.create({
    main: {
        width: '32px',
        height: '16px',
        borderRadius: '50px',
        cursor: 'pointer',
        display: 'inline-block',
        float: 'left',
        boxShadow: 'rgba(27, 42, 48, 0.329412) 0px 1px 2px inset',
        background: 'rgb(195, 200, 203)'
    },
    toggle: {
        boxShadow: 'rgba(27, 42, 48, 0.4) 0px 2px 3px',
        width: '12px',
        height: '12px',
        left: '2px',
        top: '2px',
        borderRadius: '100%',
        background: '#ffffff',
        position: 'relative',
        transition: 'left .1s ease-in-out'
    },
    on: {
        background: 'rgb(112, 195, 22)'
    },
    toggleOn: {
        left: '19px',
        color: '#70c316'
    },
    isDisabled: {
        opacity: 0.5
    }
});
