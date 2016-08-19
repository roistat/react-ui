'use strict';

function addPXSuffix(value, isNegative) {
    return +value ? `${isNegative ? '-' : ''}${value}px` : 0;
}

export const buildShadowBorder = (borderWidth, borderColor, out) => {
    var inset = out ? '' : 'inset ';
    var split = String(borderWidth).replace(/px/g, '').split(' ').map(item => +item);
    var length = split.length;
    var [topWidth, rightWidth, bottomWidth, leftWidth] = split;

    if (length === 1) {
        rightWidth = topWidth;
        bottomWidth = topWidth;
        leftWidth = topWidth;

    } else if (length === 2) {
        bottomWidth = topWidth;
        leftWidth = rightWidth;

    } else if (length === 3 ) {
        leftWidth = rightWidth;
    }

    if (topWidth === rightWidth && topWidth === bottomWidth && topWidth === leftWidth) {
        return topWidth ? `${inset}0 0 0 ${addPXSuffix(topWidth)} ${borderColor}` : 'none';
    }

    var topAndLeft = '';
    var bottomAndRight = '';

    if (topWidth && leftWidth) {
        topAndLeft = `${inset}${addPXSuffix(leftWidth)} ${addPXSuffix(topWidth)} 0 0 ${borderColor}`;
    } else if (topWidth) {
        topAndLeft = `${inset}0 ${addPXSuffix(topWidth)} 0 0 ${borderColor}`;
    } else if (leftWidth) {
        topAndLeft = `${inset}${addPXSuffix(leftWidth)} 0 0 0 ${borderColor}`;
    }

    if (bottomWidth && rightWidth) {
        bottomAndRight = `${inset}${addPXSuffix(rightWidth, true)} ${addPXSuffix(bottomWidth, true)} 0 0 ${borderColor}`;
    } else if (bottomWidth) {
        bottomAndRight = `${inset}0 ${addPXSuffix(bottomWidth, true)} 0 0 ${borderColor}`;
    } else if (rightWidth) {
        bottomAndRight = `${inset}${addPXSuffix(rightWidth, true)} 0 0 0 ${borderColor}`;
    }

    let result = [];

    topAndLeft && result.push(topAndLeft);
    bottomAndRight && result.push(bottomAndRight);

    return result.join(',');
};