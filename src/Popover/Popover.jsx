'use strict';

import React, { PropTypes } from 'react';
import Toggler from '../Toggler';
import Placer, { TargetWrapper }  from '../Placer';
import PopoverContent from './PopoverContent';

import { StyleSheet, css } from '../helpers/styles';

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
         * Is popover has tail
         */
        isHasTail: PropTypes.bool,
        /**
         * Tail size in px
         */
        tailSize: PropTypes.number,
        /**
         * Tail background color
         */
        tailColor: PropTypes.string,
        /**
         * Is tail has shadow
         */
        isTailHasShadow: PropTypes.bool,
        /**
         * Position presets
         */
        presets: PropTypes.arrayOf(PropTypes.shape({
            xAxis: PropTypes.string,
            yAxis: PropTypes.string,
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
            tail: PropTypes.shape({
                direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
                toMiddle: PropTypes.bool,
                xOffset: PropTypes.number,
                yOffset: PropTypes.number,
            })
        })).isRequired
    };

    static defaultProps = {
        tailOffsetSize: 14,
        tailSize: 14
    };

    constructor(props, ...args) {
        super(props, ...args);

        if (React.Children.count(props.children) !== 2) {
            throw new Error('Popover component: Children count must be equal 2');
        }
        //TODO: invariant for context
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
                                <PopoverContent
                                    parentDOMNode={node}
                                    isHasTail={props.isHasTail}
                                    isTailHasShadow={props.isTailHasShadow}
                                    tailSize={props.tailSize}
                                    tailColor={props.tailColor}
                                    isAnimated={props.isAnimated}
                                    isAutoClosable={props.isAutoClosable}
                                    toggle={toggle}>
                                    {props.children[1]}
                                </PopoverContent>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        )
    }
}