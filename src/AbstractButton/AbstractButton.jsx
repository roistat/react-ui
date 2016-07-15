'use strict';

import React, { PropTypes } from 'react';
import addEventListener from '../helpers/addEventListener';

/**
 * The abstract button class. Use for construct button like ui element.
 */
export default class AbstractButton extends React.Component {
    static propTypes = {
        /**
         * Is button disabled.
         */
        isDisabled: PropTypes.bool,
        /**
         * Is button in toggle mod, on click button change checked state.
         */
        isToggleMod: PropTypes.bool,
        /**
         * Is button in checked state, use only for isToggleMod=true
         */
        isChecked: PropTypes.bool,
        /**
         * On focus event handler
         */
        onFocus: PropTypes.func,
        /**
         * On blur event handler
         */
        onBlur: PropTypes.func,
        /**
         * On mouse enter event handler
         */
        onMouseEnter: PropTypes.func,
        /**
         * On focus leave evnet handler
         */
        onMouseLeave: PropTypes.func,
        /**
         * On click event handler
         */
        onClick: PropTypes.func,
        /**
         * On mouse down event handler
         */
        onMouseDown: PropTypes.func,
        /**
         * On mouse up event handler
         */
        onMouseUp: PropTypes.func
    };

    static defaultProps = {
        isDisabled: false,
        isToggleMod: false,
        isChecked: false
    };

    static BASE_ROOT_STYLE = {
        display: 'inline-block',
        verticalAlign: 'top',
        padding: 0,
        margin: 0,
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        background: 'transparent'
    };

    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            isHovered: false
        };

        if (props.isToggleMod) {
            this.state.isChecked = props.isChecked;
        }

        this._onFocusHandler = this._onFocusHandler.bind(this);
        this._onBlurHandler = this._onBlurHandler.bind(this);
        this._onMouseEnterHandler = this._onMouseEnterHandler.bind(this);
        this._onMouseLeaveHandler = this._onMouseLeaveHandler.bind(this);
        this._onClickHandler = this._onClickHandler.bind(this);
        this._onMouseDownHandler = this._onMouseDownHandler.bind(this);
        this._onKeyDownHandler = this._onKeyDownHandler.bind(this);
        this._onKeyUpHandler = this._onKeyUpHandler.bind(this);
        this._onMouseUpHandler = this._onMouseUpHandler.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.isToggleMod &&
            typeof newProps.isChecked === 'boolean' &&
            this.state.isChecked !== newProps.isChecked) {

            this.setState({ isChecked: newProps.isChecked });
        }
    }

    componentWillUnmount() {
        this._mouseupListener && this._mouseupListener.remove();
    }

    _onClickHandler(event) {
        const props = this.props;

        if (!props.isDisabled) {
            props.isToggleMod && this.setState({ isChecked: !this.state.isChecked });
            props.onClick && props.onClick(event);
        }
    }

    _onFocusHandler(event) {
        const props = this.props;

        this.setState({ isFocused: true });
        props.onFocus && props.onFocus(event);
    }

    _onBlurHandler(event) {
        const props = this.props;

        this.setState({ isFocused: false });
        props.onBlur && props.onBlur(event);
    }

    _onMouseEnterHandler(event) {
        const props = this.props;

        props.isDisabled || this.setState({ isHovered: true });
        props.onMouseEnter && props.onMouseEnter(event);
    }

    _onMouseLeaveHandler(event) {
        const props = this.props;

        props.isDisabled || this.setState({ isHovered: false });
        props.onMouseLeave && props.onMouseLeave(event);
    }

    _onMouseDownHandler() {
        if (this.props.isDisabled) {
            return;
        }

        this._mouseupListener = addEventListener(document, 'mouseup', () => {
            this.setState({ isActive: false });
            this._mouseupListener && this._mouseupListener.remove();
        });

        this.setState({ isActive: true });
    }

    _onMouseUpHandler() {
        if (this.props.isDisabled) {
            return;
        }

        this.props.onMouseUp && this.props.onMouseUp();
    }

    _onKeyDownHandler(event) {
        const keyCode = event.keyCode;

        if (keyCode === 32 || keyCode === 13 && !this.props.isDisabled) {
            this.setState({ isActive: true });
        }
    }

    _onKeyUpHandler(event) {
        const keyCode = event.keyCode;

        if (keyCode === 32 || keyCode === 13 && !this.props.isDisabled) {
            this.setState({ isActive: false });
        }
    }

    getDefaultRenderProps() {
        return {
            onFocus: this._onFocusHandler,
            onBlur: this._onBlurHandler,
            onMouseEnter: this._onMouseEnterHandler,
            onMouseLeave: this._onMouseLeaveHandler,
            onClick: this._onClickHandler,
            onMouseDown: this._onMouseDownHandler,
            onMouseUp: this._onMouseUpHandler,
            onKeyDown: this._onKeyDownHandler,
            onKeyUp: this._onKeyUpHandler,
            disabled: this.props.isDisabled
        };
    }


    /**
     * Build style list with strong ordering
     */
    buildStyleList(styles, prefix) {
        const prefixAsString = Array.isArray(prefix) ?
            prefix.map((item, idx) => {
                if (!idx) {
                    return item;
                }

                return item.replace(/^\w/, (c) => c.toUpperCase());
            }).join('') :
            prefix;

        return [
            styles[prefixAsString],
            this.state.isHovered && styles[`${prefixAsString}IsHovered`],
            this.state.isFocused && styles[`${prefixAsString}IsFocused`],
            this.state.isActive && styles[`${prefixAsString}IsActive`],
            this.state.isChecked && styles[`${prefixAsString}IsChecked`],
            this.props.isDisabled && styles[`${prefixAsString}IsDisabled`]
        ].filter(i => i);
    }

    render() {
        return (
            <button {...this.getDefaultRenderProps()}>
                {this.props.children}
            </button>
        )
    }
}