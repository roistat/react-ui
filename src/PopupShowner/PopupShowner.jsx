'use strict';

import React, { PropTypes } from 'react';
import Toggler from '../Toggler';
import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';
import Transition from '../Transition';
import Placer, { TargetWrapper }  from '../Placer';
import { StyleSheet, css } from '../helpers/styles';

//TODO: add transition animation

export default class PopupShowner extends React.Component {
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

    _renderPopup() {
        const { children, isAnimated } = this.props;
        const popup = React.cloneElement(children[1], { onClose: () => toggle() });

        if (!isAnimated) {
            return popup;
        }

        return (
            <div>
                <Transition>
                    {({ isAppear, isEnter, isLeave, isUpdate }) => (
                        <div className={css(styles.popupContainer, isAppear && styles.formBottomAppear)}>
                            {popup}
                        </div>
                    )}
                </Transition>
            </div>
        );
    }

    _getAppearStyle() {

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
                                        {this._renderPopup()}
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

const styles = StyleSheet.create({
    popupContainer: {
        transition: 'all .15s ease-in',
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    formBottomAppear: {
        opacity: 0,
        transform: 'translate3d(0, 10%, 0)'
    },
    formTopAppear: {
        opacity: 0,
        transform: 'translate3d(0, -10%, 0)'
    }
});