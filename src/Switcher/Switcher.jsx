'use strict';

import React, { PropTypes } from 'react';

export default class Switcher extends React.Component {
    static propTypes = {
        /**
         * Is switcher in checked state
         */
        isChecked: PropTypes.bool,
        /**
         * On click event handler
         */
        onClick: PropTypes.func
    };

    static defaultProps = {
        isChecked: false
    };

    render() {
        const props = this.props;

        return (
            <div onClick={props.onClick}>
                <div style={props.isChecked ? { ...styles.main, ...styles.on } : styles.main}>
                    <div style={props.isChecked ? { ...styles.toggle, ...styles.toggleOn } : styles.toggle }>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
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
    }
};
