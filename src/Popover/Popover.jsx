'use strict';

import React, { PropTypes } from 'react';
import Toggler from '../Toggler';
import Placer, { TargetWrapper }  from '../Placer';
import PopupShownerContent from './PopoverContent';

export default class Popover extends React.Component {
    static propTypes = {
        /**
         * Is Popover close by outside click
         */
        isAutoClosable: PropTypes.bool,
        /**
         * is has transition animation
         */
        isAnimated: PropTypes.bool,
        /**
         * Position presets
         */
        presets: PropTypes.arrayOf(PropTypes.shape({
            xAxis: PropTypes.string,
            yAxis: PropTypes.string,
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
        })).isRequired
    };

    constructor(props, ...args) {
        super(props, ...args);

        if (React.Children.count(props.children) !== 2) {
            throw new Error('Popover component: Children count must be equal 2');
        }
    }

    toggle() {
        this._toggler && this._toggler.toggle();
    }

    render() {
        const props = this.props;

        return (
            <Toggler ref={(c) => this._toggler = c}>
                {(isShown, node, toggle) => (
                    <TargetWrapper>
                        {props.children[0]}
                        { isShown &&
                            <Placer
                                presets={props.presets}>
                                <PopupShownerContent
                                    parentDOMNode={node}
                                    isAnimated={props.isAnimated}
                                    isAutoClosable={props.isAutoClosable}
                                    toggle={toggle}>
                                    {props.children[1]}
                                </PopupShownerContent>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        )
    }
}