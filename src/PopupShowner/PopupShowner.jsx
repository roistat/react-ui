'use strict';

import React, { PropTypes } from 'react';
import Toggler from '../Toggler';
import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';
import Placer, { TargetWrapper }  from '../Placer';

//TODO: add transition animation

export default class PopupShowner extends React.Component {
    static propTypes = {
        isAutoClosable: PropTypes.bool,
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
                                <AutoClosable
                                    onClose={() => props.isAutoClosable && toggle()}
                                    parentDOMNode={node}>
                                    <TeleportContext>
                                        {React.cloneElement(props.children[1], { onClose: () => toggle() })}
                                    </TeleportContext>
                                </AutoClosable>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        )
    }
}