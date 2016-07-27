'use strict';

import React, { PropTypes } from 'react';

export default class FontIcon extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        styles: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    _definition: PropTypes.object,
                    _name: PropTypes.string
                }),
                PropTypes.bool
            ])),
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

    render() {
        const props = this.props;
        const styles  = props.styles || [];
        const classNameFromProps = (props.className ? ` ${props.className}` : '');
        const className = classNameFromProps;

        return (
            <i
                {...props}
                className={`fa fa-${props.name}${className}`}
            />
        )
    }
};


