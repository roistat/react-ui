'use strict';

import React, { PropTypes } from 'react';
import Toggler from '../Toggler';
import Placer, { TargetWrapper }  from '../Placer';
import PopupShownerContent from './PopoverContent';

export default class Popover extends React.Component {
    static propTypes = {
        isAutoClosable: PropTypes.bool,
        isAnimated: PropTypes.bool,
        presets: PropTypes.arrayOf(PropTypes.shape({
            xAxis: PropTypes.string,
            yAxis: PropTypes.string,
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
        }))
    };

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
                                    {this.props.children}
                                </PopupShownerContent>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        )
    }
}