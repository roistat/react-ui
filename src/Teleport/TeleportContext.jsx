'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { StyleSheet, css } from '../helpers/styles';
import TeleportWrapper from './TeleportWrapper';

export default class TeleportContext extends React.Component {
    static propTypes = {};

    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            shownComponents: []
        };

        this._componentsBank = {};
        this._shownComponents = [];
        this._refs = {};
        this._parentDOMNode = null;
        this._isMount = false;
    }

    componentDidMount() {
        this._parentDOMNode = ReactDOM.findDOMNode(this).parentNode;
    }

    getChildContext() {
        return {
            teleport: {
                move: (id, component) => {
                    this._componentsBank[id] = component;
                    this._shownComponents.push(id);

                    this.setState({
                        shownComponents: this._shownComponents
                    });
                },
                remove: (componentID: string, callback: () => void) => {
                    this._shownComponents = this._shownComponents.filter(id => id !== componentID);
                    this._componentsBank[componentID] = null;
                    this._refs[componentID] = null;

                    this.setState({ shownComponents: this._shownComponents }, callback);
                },
                update: (id: string, newChildren: Object, callback: () => void) => {
                    const component = this._refs[id];

                    component && component.isMount() && component.update(newChildren, callback);
                },
                isAdded: (componentID): boolean => {
                    return this._shownComponents.some(id => id === componentID);
                },
                getRootDOMNode: (): Object => {
                    return this._parentDOMNode || null;
                },
                getBoundingClientRect: (): Object => {
                    const node = this._parentDOMNode;

                    if (!node) {
                        return null;
                    }

                    if (!this._boundingClientRect) {
                        this._boundingClientRect = node.getBoundingClientRect();
                    }

                    return this._boundingClientRect;
                }
            }
         };
    }

    isMount() {
        return this._isMount;
    }

    render() {
        const props = this.props;

        return (
            <div>
                {React.cloneElement(
                    props.children,
                    {
                        children: [
                            <div className={css(styles.teleportRoot)}>
                                {
                                    this.state.shownComponents.map((id) => (
                                        <TeleportWrapper key={id} ref={(c) => c && (this._refs[id] = c)}>
                                            {this._componentsBank[id]}
                                        </TeleportWrapper>
                                    ))
                                }
                            </div>,
                            ...React.Children.toArray(props.children.props.children)
                        ]
                    })
                }
            </div>
        )
    }
}

TeleportContext.childContextTypes = {
    teleport: PropTypes.shape({
        move: PropTypes.func,
        remove: PropTypes.func,
        update: PropTypes.func,
        isAdded: PropTypes.func,
        getRootDOMNode: PropTypes.func,
        getBoundingClientRect: PropTypes.func
    })
};


const styles = StyleSheet.create({
    teleportRoot: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});