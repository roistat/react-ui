'use strict';

import React, { PropTypes } from 'react';
import Popover from '../Popover';

export default class Dropdown extends React.Component {
    static propTypes = {
        /**
         * Is Dropdown close by outside click
         */
        isAutoClosable: PropTypes.bool
    };

    static defaultProps = {
        isAutoClosable: true
    };

    render() {
        const { isAutoClosable, children } = this.props;

        return (
            <Popover
                isAutoClosable={isAutoClosable}
                isAnimated
                presets={[
                    { xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 },
                    { xAxis: 'inside-left', yAxis: 'outside-top', offsetY: -5 }
                ]}
                >
                {children}
            </Popover>
        )
    }
}