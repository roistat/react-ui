import React from 'react';
import { getTailParams } from '../helpers';

const selfRect = {
    bottom: 363.1875,
    height: 66,
    left: 47.953125,
    right: 126.828125,
    top: 297.1875,
    width: 80
};

const targetRect = {
    bottom: 395.1875,
    height: 32,
    left: 48,
    right: 126.828125,
    top: 363.1875,
    width: 78
};

const tailSize = 14;

const cases = [
    { xAxis: 'outside-left', yAxis: 'inside-top', result: { direction: 'right', style: { right: 0, top: 7, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', result: { direction: 'right', style: { right: 0, bottom: 7, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', result: { direction: 'right', style: { right: 0, top: 26, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', result: { direction: 'left', style: { left: 0, top: 7, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', result: { direction: 'left', style: { left: 0, bottom: 7, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', result: { direction: 'left', style: { left: 0, top: 26, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', result: { direction: 'bottom', style: { left: 7, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },
    { xAxis: 'inside-right', yAxis: 'outside-top', result: { direction: 'bottom', style: { right: 7, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },
    { xAxis: 'middle', yAxis: 'outside-top', result: { direction: 'bottom', style: { left: 33, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', result: { direction: 'top', style: { left: 7, top: 0, transform: 'translate3d(0, -100%, 0)'} } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', result: { direction: 'top', style: { right: 7, top: 0, transform: 'translate3d(0, -100%, 0)'} } },
    { xAxis: 'middle', yAxis: 'outside-bottom', result: { direction: 'top', style: { left: 33, top: 0, transform: 'translate3d(0, -100%, 0)'} } }
];

const casesWithZeroTailOffset = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 0, yOffset: 0, result: { direction: 'right', style: { right: 0, top: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 0, yOffset: 0,  result: { direction: 'right', style: { right: 0, bottom: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 0, yOffset: 0, result: { direction: 'right', style: { right: 0, top: 26, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 0, yOffset: 0, result: { direction: 'left', style: { left: 0, top: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 0, yOffset: 0, result: { direction: 'left', style: { left: 0, bottom: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 0, yOffset: 0, result: { direction: 'left', style: { left: 0, top: 26, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: 0, yOffset: 0, result: { direction: 'bottom', style: { left: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: 0, yOffset: 0, result: { direction: 'bottom', style: { right: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: 0, yOffset: 0, result: { direction: 'bottom', style: { left: 33, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: 0, yOffset: 0, result: { direction: 'top', style: { left: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: 0, yOffset: 0, result: { direction: 'top', style: { right: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: 0, yOffset: 0, result: { direction: 'top', style: { left: 33, top: 0, transform: 'translate3d(0, -100%, 0)' } } }
];

const casesWithSmallPositiveTailOffset = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 0, yOffset: 14, result: { direction: 'right', style: { right: 0, top: 14, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 0, yOffset: 14, result: { direction: 'right', style: { right: 0, bottom: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 0, yOffset: 14, result: { direction: 'right', style: { right: 0, top: 40, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 0, yOffset: 14, result: { direction: 'left', style: { left: 0, top: 14, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 0, yOffset: 14, result: { direction: 'left', style: { left: 0, bottom: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 0, yOffset: 14, result: { direction: 'left', style: { left: 0, top: 40, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: 14, yOffset: 0, result: { direction: 'bottom', style: { left: 14, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: 14, yOffset: 0, result: { direction: 'bottom', style: { right: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: 14, yOffset: 0, result: { direction: 'bottom', style: { left: 47, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: 14, yOffset: 0, result: { direction: 'top', style: { left: 14, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: 14, yOffset: 0, result: { direction: 'top', style: { right: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: 14, yOffset: 0, result: { direction: 'top', style: { left: 47, top: 0, transform: 'translate3d(0, -100%, 0)' } } }
];

const casesWithSmallNegativeTailOffset = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 0, yOffset: -14, result: { direction: 'right', style: { right: 0, top: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 0, yOffset: -14, result: { direction: 'right', style: { right: 0, bottom: 14, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 0, yOffset: -14, result: { direction: 'right', style: { right: 0, top: 12, transform: 'translate3d(100%, 0, 0)'}  } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 0, yOffset: -14, result: { direction: 'left', style: { left: 0, top: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 0, yOffset: -14, result: { direction: 'left', style: { left: 0, bottom: 14, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 0, yOffset: -14, result: { direction: 'left', style: { left: 0, top: 12, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: -14, yOffset: 0, result: { direction: 'bottom', style: { left: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: -14, yOffset: 0, result: { direction: 'bottom', style: { right: 14, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: -14, yOffset: 0, result: { direction: 'bottom', style: { left: 19, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: -14, yOffset: 0, result: { direction: 'top', style: { left: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: -14, yOffset: 0, result: { direction: 'top', style: { right: 14, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: -14, yOffset: 0, result: { direction: 'top', style: { left: 19, top: 0, transform: 'translate3d(0, -100%, 0)' } } }
];

const casesWithVeryBigPositiveTailOffset = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 0, yOffset: 200, result: { direction: 'right', style: { right: 0, top: 52, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 0, yOffset: 200, result: { direction: 'right', style: { right: 0, bottom: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 0, yOffset: 200, result: { direction: 'right', style: { right: 0, top: 52, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 0, yOffset: 200, result: { direction: 'left', style: { left: 0, top: 52, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 0, yOffset: 200, result: { direction: 'left', style: { left: 0, bottom: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 0, yOffset: 200, result: { direction: 'left', style: { left: 0, top: 52, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: 200, yOffset: 0, result: { direction: 'bottom', style: { left: 66, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: 200, yOffset: 0, result: { direction: 'bottom', style: { right: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: 200, yOffset: 0, result: { direction: 'bottom', style: { left: 66, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: 200, yOffset: 0, result: { direction: 'top', style: { left: 66, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: 200, yOffset: 0, result: { direction: 'top', style: { right: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: 200, yOffset: 0, result: { direction: 'top', style: { left: 66, top: 0, transform: 'translate3d(0, -100%, 0)' } } }
];

const casesWithVeryBigNegativeTailOffset = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 0, yOffset: -200, result: { direction: 'right', style: { right: 0, top: 0, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 0, yOffset: -200, result: { direction: 'right', style: { right: 0, bottom: 52, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 0, yOffset: -200, result: { direction: 'right', style: { right: 0, top: 0, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 0, yOffset: -200, result: { direction: 'left', style: { left: 0, top: 0, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 0, yOffset: -200, result: { direction: 'left', style: { left: 0, bottom: 52, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 0, yOffset: -200, result: { direction: 'left', style: { left: 0, top: 0, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: -200, yOffset: 0, result: { direction: 'bottom', style: { left: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: -200, yOffset: 0, result: { direction: 'bottom', style: { right: 66, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: -200, yOffset: 0, result: { direction: 'bottom', style: { left: 0, bottom: 0, transform: 'translate3d(0, 100%, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: -200, yOffset: 0, result: { direction: 'top', style: { left: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: -200, yOffset: 0, result: { direction: 'top', style: { right: 66, top: 0, transform: 'translate3d(0, -100%, 0)' } } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: -200, yOffset: 0, result: { direction: 'top', style: { left: 0, top: 0, transform: 'translate3d(0, -100%, 0)' } } }
];

const casesWithoutTail = [
    { xAxis: 'outside-left', yAxis: 'outside-top' },
    { xAxis: 'outside-left', yAxis: 'outside-bottom' },
    { xAxis: 'outside-right', yAxis: 'outside-top' },
    { xAxis: 'outside-right', yAxis: 'outside-bottom' },
    { xAxis: 'inside-left', yAxis: 'inside-top' },
    { xAxis: 'inside-left', yAxis: 'inside-bottom' },
    { xAxis: 'inside-left', yAxis: 'middle' },
    { xAxis: 'inside-right', yAxis: 'inside-top' },
    { xAxis: 'inside-right', yAxis: 'inside-bottom' },
    { xAxis: 'inside-right', yAxis: 'middle' },
    { xAxis: 'middle', yAxis: 'inside-top' },
    { xAxis: 'middle', yAxis: 'middle' },
];

const casesWithTailToMiddle = [
    { xAxis: 'outside-left', yAxis: 'inside-top', xOffset: 200, yOffset: 200, result: { direction: 'right', style: { right: 0, top: 9, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'inside-bottom', xOffset: 200, yOffset: 200, result: { direction: 'right', style: { right: 0, bottom: 9, transform: 'translate3d(100%, 0, 0)' } } },
    { xAxis: 'outside-left', yAxis: 'middle', xOffset: 200, yOffset: 200, result: { direction: 'right', style: { right: 0, top: 26, transform: 'translate3d(100%, 0, 0)' } } },

    { xAxis: 'outside-right', yAxis: 'inside-top', xOffset: 200, yOffset: 200, result: { direction: 'left', style: { left: 0, top: 9, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'inside-bottom', xOffset: 200, yOffset: 200, result: { direction: 'left', style: { left: 0, bottom: 9, transform: 'translate3d(-100%, 0, 0)' } } },
    { xAxis: 'outside-right', yAxis: 'middle', xOffset: 200, yOffset: 200, result: { direction: 'left', style: { left: 0, top: 26, transform: 'translate3d(-100%, 0, 0)' } } },

    { xAxis: 'inside-left', yAxis: 'outside-top', xOffset: 200, yOffset: 200, result: { direction: 'bottom', style: { left: 32, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },
    { xAxis: 'inside-right', yAxis: 'outside-top', xOffset: 200, yOffset: 200, result: { direction: 'bottom', style: { right: 32, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },
    { xAxis: 'middle', yAxis: 'outside-top', xOffset: 200, yOffset: 200, result: { direction: 'bottom', style: { left: 33, bottom: 0, transform: 'translate3d(0, 100%, 0)'} } },

    { xAxis: 'inside-left', yAxis: 'outside-bottom', xOffset: 200, yOffset: 200, result: { direction: 'top', style: { left: 32, top: 0, transform: 'translate3d(0, -100%, 0)'} } },
    { xAxis: 'inside-right', yAxis: 'outside-bottom', xOffset: 200, yOffset: 200, result: { direction: 'top', style: { right: 32, top: 0, transform: 'translate3d(0, -100%, 0)'} } },
    { xAxis: 'middle', yAxis: 'outside-bottom', xOffset: 200, yOffset: 200, result: { direction: 'top', style: { left: 33, top: 0, transform: 'translate3d(0, -100%, 0)'} } }
];

describe('getTailParams sepc', () => {
    cases.forEach(({ xAxis, yAxis, result }) => {
        describe(`Preset - ${xAxis}:${yAxis} with default offset`, () => {
            it('should return result with default offset', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithZeroTailOffset.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with tail offset 0`, () => {
            it('should return result with offset 0', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithSmallPositiveTailOffset.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with offset 14`, () => {
            it('should return result with offset 14', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithSmallNegativeTailOffset.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with offset -14`, () => {
            it('should return result with offset -14', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithVeryBigPositiveTailOffset.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with offset 200`, () => {
            it('should return result with offset 200', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithVeryBigNegativeTailOffset.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with offset 200`, () => {
            it('should return result with offset 200', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual(result);
            });
        });
    });

    casesWithoutTail.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with preset witch not support tail`, () => {
            it('should return result with null', () => {
                expect(getTailParams({
                    selfRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset} },
                    tailSize
                })).toEqual({ direction: null, style: null });
            });
        });
    });

    casesWithTailToMiddle.forEach(({ xAxis, yAxis, result, xOffset, yOffset }) => {
        describe(`Preset - ${xAxis}:${yAxis} with tail to middle`, () => {
            it('should return result style to target middle', () => {
                expect(getTailParams({
                    selfRect,
                    targetRect,
                    currentPreset: { xAxis, yAxis, tail: { xOffset, yOffset, toMiddle: true } },
                    tailSize
                })).toEqual(result);
            });
        });
    });
});