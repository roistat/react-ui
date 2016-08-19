'use strict';

import React from 'react';

export const cloneElement = (element, props) => {
    return typeof element === 'function' ?
        element(props) :
        React.cloneElement(element, props);
};

export const filterChildrenByType = (children, type) => {
    if (!children) {
         return [];
    }

    return React.Children.toArray(children).filter(i => i && i.type && i.type[type]) || [];
};

export const filterChildrenByNotType = (children, type) => {
    if (!children) {
         return [];
    }

    return React.Children.toArray(children).filter(i => !i || !i.type || !i.type[type]) || [];
};

export const getChildByType = (children, type) => {
     return filterChildrenByType(children, type)[0] || null;
};