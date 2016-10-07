type Rect = {
    top: number,
    left: number,
    height: number,
    width: number
};

type PopoverPreset = {
    xAxis: string,
    yAxis: string,
    tail: {
        xOffset: number,
        yOffset: number,
        toMiddle: boolean
    }
};

type GetTailParamsPayload = {
    selfRect: Rect,
    targetRect: Rect,
    currentPreset: PopoverPreset,
    tailSize: number
};

export const getTailParams = ({ selfRect = {}, targetRect = {}, currentPreset, tailSize }: GetTailParamsPayload) => {
    const { xAxis, yAxis, tail = {} } = currentPreset;
    const defaultOffset = tailSize / 2;
    const defaultMiddleYOffset = selfRect.height / 2 - tailSize / 2;
    const defaultMiddleXOffset = selfRect.width / 2 - tailSize / 2;
    const maxYOffset = selfRect.height - tailSize;
    const maxXOffset = selfRect.width - tailSize;

    const toMiddleYOffset = targetRect.height / 2 - tailSize/ 2;
    const toMiddleXOffset = targetRect.width / 2 - tailSize/ 2;

    if (xAxis === 'outside-left' && yAxis === 'inside-top') {
        let offset = defaultOffset;

        if (tail.toMiddle) {
            offset = toMiddleYOffset;
        } else if (tail.yOffset || tail.yOffset === 0) {
            offset = Math.max(tail.yOffset, 0);
        }

        return {
            direction: 'right',
            style: {
                top: Math.min(offset, selfRect.height - tailSize) || 0,
                right: 0,
                transform: 'translate3d(100%, 0, 0)'
            }
        }
    }

    if (xAxis === 'outside-left' && yAxis === 'inside-bottom') {
        let offset = -defaultOffset;

        if (tail.toMiddle) {
            offset = -toMiddleYOffset;

        } else if (tail.yOffset || tail.yOffset === 0) {
            offset = Math.max(tail.yOffset, -maxYOffset);
        }

        return {
            direction: 'right',
            style: {
                bottom:  Math.max(-offset, 0) || 0,
                right: 0,
                transform: 'translate3d(100%, 0, 0)'
            }
        }
    }

    if (xAxis === 'outside-left' && yAxis === 'middle') {
        let offset = defaultMiddleYOffset;

        if (!tail.toMiddle && (tail.yOffset || tail.yOffset === 0)) {
            offset = Math.min(defaultMiddleYOffset + tail.yOffset, maxYOffset);
        }

        return {
            direction: 'right',
            style: {
                top: Math.max(offset, 0) || 0,
                right: 0,
                transform: 'translate3d(100%, 0, 0)'
            }
        };
    }

    if (xAxis === 'outside-right' && yAxis === 'inside-top') {
        let offset = defaultOffset;

        if (tail.toMiddle) {
            offset = toMiddleYOffset;
        } else if (tail.yOffset || tail.yOffset === 0) {
            offset = Math.max(tail.yOffset, 0);
        }

        return {
            direction: 'left',
            style: {
                top: Math.min(offset, selfRect.height - tailSize) || 0,
                left: 0,
                transform: 'translate3d(-100%, 0, 0)'
            }
        }
    }

    if (xAxis === 'outside-right' && yAxis === 'inside-bottom') {
        let offset = -defaultOffset;

        if (tail.toMiddle) {
            offset = -toMiddleYOffset;
        } else if (tail.yOffset || tail.yOffset === 0) {
            offset = Math.max(tail.yOffset, -maxYOffset);
        }

        return {
            direction: 'left',
            style: {
                bottom:  Math.max(-offset, 0) || 0,
                left: 0,
                transform: 'translate3d(-100%, 0, 0)'
            }
        }
    }

    if (xAxis === 'outside-right' && yAxis === 'middle') {
        let offset = defaultMiddleYOffset;

        if (!tail.toMiddle && tail.yOffset) {
            offset = Math.min(defaultMiddleYOffset + tail.yOffset, maxYOffset);
        }

        return {
            direction: 'left',
            style: {
                top: Math.max(offset, 0) || 0,
                left: 0,
                transform: 'translate3d(-100%, 0, 0)'
            }
        }
    }

    if (xAxis === 'inside-left' && yAxis === 'outside-top') {
        let offset = defaultOffset;

        if (tail.toMiddle) {
            offset = toMiddleXOffset;
        } else if (tail.xOffset || tail.xOffset === 0) {
            offset = Math.max(tail.xOffset, 0);
        }

        return {
            direction: 'bottom',
            style: {
                bottom: 0,
                left: Math.min(offset, maxXOffset) || 0,
                transform: 'translate3d(0, 100%, 0)'
            }
        }
    }

    if (xAxis === 'inside-right' && yAxis === 'outside-top') {
        let offset = -defaultOffset;

        if (tail.toMiddle) {
            offset = -toMiddleXOffset;

        } else if (tail.xOffset || tail.xOffset === 0) {
            offset = Math.min(tail.xOffset, 0);
        }

        return {
            direction: 'bottom',
            style: {
                bottom: 0,
                right:  Math.min(-offset, maxXOffset) || 0,
                transform: 'translate3d(0, 100%, 0)'
            }
        }
    }

    if (xAxis === 'middle' && yAxis === 'outside-top') {
        let offset = defaultMiddleXOffset;

        if (!tail.toMiddle && tail.xOffset) {
            offset = Math.min(defaultMiddleXOffset + tail.xOffset, maxXOffset);
        }

        return {
            direction: 'bottom',
            style: {
                bottom: 0,
                left: Math.max(offset, 0) || 0,
                transform: 'translate3d(0, 100%, 0)'
            }
        }
    }

    if (xAxis === 'inside-left' && yAxis === 'outside-bottom') {
        let offset = defaultOffset;

        if (tail.toMiddle) {
            offset = toMiddleXOffset;

        } else if (tail.xOffset || tail.xOffset === 0) {
            offset = Math.max(tail.xOffset, 0);
        }

        return {
            direction: 'top',
            style: {
                top: 0,
                left: Math.min(offset, maxXOffset) || 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }
    }

    if (xAxis === 'inside-right' && yAxis === 'outside-bottom') {
        let offset = -defaultOffset;

        if (tail.toMiddle) {
            offset = -toMiddleXOffset;

        } else if (tail.xOffset || tail.xOffset === 0) {
            offset = Math.min(tail.xOffset, 0);
        }

        return {
            direction: 'top',
            style: {
                top: 0,
                right:  Math.min(-offset, maxXOffset) || 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }
    }

    if (xAxis === 'middle' && yAxis === 'outside-bottom') {
        let offset = defaultMiddleXOffset;

        if (!tail.toMiddle && tail.xOffset) {
            offset = Math.min(defaultMiddleXOffset + tail.xOffset, maxXOffset);
        }

        return {
            direction: 'top',
            style: {
                top: 0,
                left: Math.max(offset, 0) || 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }
    }

    return { direction: null, style: null };
};