'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { StyleSheet, css } from '../helpers/styles';
import TeleportWrapper from './TeleportWrapper';

var idCount = 0;
const relationships = {};

/**
 * Context for Teleport component
 */
export default class TeleportContext extends React.Component {
    static propTypes = {};

    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            shownComponents: []
        };

        this._componentID = `${Math.random().toString(32).slice(2, 10)}:${++idCount}`;
        this._componentsBank = {};
        this._shownComponents = [];
        this._refs = {};
        this._parentDOMNode = null;
        this._isMount = false;
    }

    componentDidMount() {
        const selfDOMNode = ReactDOM.findDOMNode(this);
        this._parentDOMNode = selfDOMNode.parentNode;

        selfDOMNode.setAttribute('data-teleport', this._componentID);
        this._registerRelationship();
    }

    getChildContext() {
        return {
            teleport: {
                move: (id, component, callback: () => void) => {
                    this._componentsBank[id] = component;
                    this._shownComponents.push(id);

                    this.setState({
                        shownComponents: this._shownComponents
                    }, callback);
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
                    return this.refs.rootDOMNode || null;
                    //return this._parentDOMNode || null;
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
                },
                getContextLevel: (): number => {
                    const data = relationships[this._componentID];

                    if (!data) {
                        throw new Error(`TeleportContext: Context with id "${this._componentID}" is not mount`);
                    }

                    return data.level;
                }
            }
         };
    }

    isMount() {
        return this._isMount;
    }

    _registerRelationship() {
        const parentID = findParentContext(this._parentDOMNode);

        relationships[this._componentID] = (relationships[this._componentID] || {});

        relationships[this._componentID] = {
            level: parentID ? (relationships[parentID].level + 1) : 1,
            parentID: parentID
        };
    }

    render() {
        const props = this.props;

        return React.cloneElement(
            props.children,
            {
                children: [
                    <div ref='rootDOMNode' className={css(styles.teleportRoot)}>
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
            });

    }
}

TeleportContext.childContextTypes = {
    teleport: PropTypes.shape({
        move: PropTypes.func,
        remove: PropTypes.func,
        update: PropTypes.func,
        isAdded: PropTypes.func,
        getRootDOMNode: PropTypes.func,
        getBoundingClientRect: PropTypes.func,
        getContextLevel: PropTypes.func
    })
};

function findParentContext(parentDOMNode) {
    if (!parentDOMNode || typeof parentDOMNode.getAttribute !== 'function') {
        return null;
    }

    const componentID = parentDOMNode.getAttribute('data-teleport');

    if (componentID) {
        return componentID;
    }

    return findParentContext(parentDOMNode.parentNode);
}


const styles = StyleSheet.create({
    teleportRoot: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});