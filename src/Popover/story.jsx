import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Popover from './Popover';
import { TeleportContext } from '../Teleport';
import StateProvider from '../StateProvider';
import Button from '../Button';
import Popup from '../Popup';
import View from '../View';

const xAxis = [
    { xAxis: 'outside-left' },
    { xAxis: 'inside-left' },
    { xAxis: 'middle' },
    { xAxis: 'inside-right' },
    { xAxis: 'outside-right' }
];

const yAxis = [
    { yAxis: 'outside-top' },
    { yAxis: 'inside-top' },
    { yAxis: 'middle' },
    { yAxis: 'inside-bottom' },
    { yAxis: 'outside-bottom' }
];

const xAxisWithTail = [
    { xAxis: 'outside-left', xTail: 'right' },
    { xAxis: 'outside-right', xTail: 'left' },
    { xAxis: 'inside-left', xTail: '' },
    { xAxis: 'inside-right', xTail: '' },
    { xAxis: 'middle', xTail: '' }
];

const yAxisWithTail = [
    { yAxis: 'inside-top' },
    { yAxis: 'inside-bottom' },
    { yAxis: 'middle' },
    { yAxis: 'outside-top', direction: 'bottom' },
    { yAxis: 'outside-bottom', direction: 'top' }
];

const offsetForTail = [0, 14, -14, 100, -100, null];

storiesOf('Popover', module)
    .add('Show popup', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <Popover
                    isAutoClosable
                    presets={[
                        { xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
                    ]}>
                    <Button>
                        Click me
                    </Button>
                    <Popup>
                        Popup content
                    </Popup>
                </Popover>
            </div>
        </TeleportContext>
    ))
    .add('Show popup with animation', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div style={{ margin: '40px' }}>
                        <div style={{ marginBottom: '40px' }}>
                            <h4>xAxis</h4>
                            {xAxis.map((preset) => (
                                <div>
                                    <label>
                                        <input type='radio' name='xAxis' onClick={() => setState({ xAxis: preset.xAxis })} />
                                        {preset.xAxis}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginBottom: '40px' }}>
                            <h4>yAxis</h4>
                            {yAxis.map((preset) => (
                                <div>
                                    <label>
                                        <input type='radio' name='yAxis' onClick={() => setState({ yAxis: preset.yAxis })} />
                                        {preset.yAxis}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <Popover
                            isAutoClosable
                            isAnimated
                            presets={[
                                { xAxis: state.xAxis || 'inside-left', yAxis: state.yAxis || 'outside-bottom' }
                            ]}>
                            <Button>
                                Click me
                            </Button>
                            <Popup>
                                Popup content
                            </Popup>
                        </Popover>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>

    ))
    .add('Show popup with tail', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div style={{ margin: '40px' }}>
                        <View>
                            <div style={{ margin: '0 40px 40px 0' }}>
                                <h4>xAxis</h4>
                                {xAxisWithTail.map((preset) => (
                                    <div>
                                        <label>
                                            <input
                                                type='radio'
                                                name='xAxis'
                                                onClick={() => setState(Object.assign(
                                                { xAxis: preset.xAxis },
                                                preset.direction && { tail: { direction: preset.direction  } }))
                                            }
                                            />
                                            {preset.xAxis}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div style={{ margin: '0 40px 40px 0' }}>
                                <h4>yAxis</h4>
                                {yAxisWithTail.map((preset) => (
                                    <div>
                                        <label>
                                            <input
                                                type='radio'
                                                name='yAxis'
                                                onClick={() => setState(Object.assign(
                                                    { yAxis: preset.yAxis },
                                                    preset.direction && { tail: { direction: preset.direction  } }))
                                                }
                                            />
                                            {preset.yAxis}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div style={{ margin: '0 40px 40px 0' }}>
                                <h4>X Tail offset</h4>
                                {offsetForTail.map((value) => (
                                    <div>
                                        <label>
                                            <input
                                                type='radio'
                                                name='xTailOffset'
                                                onClick={() => setState(Object.assign(
                                                { xTailOffset: value }))
                                            }
                                            />
                                            {value === null ? 'null' : value}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div style={{ margin: '0 40px 40px 0' }}>
                                <h4>Y Tail offset</h4>
                                {offsetForTail.map((value) => (
                                    <div>
                                        <label>
                                            <input
                                                type='radio'
                                                name='yTailOffset'
                                                onClick={() => setState(Object.assign(
                                                { yTailOffset: value }))
                                            }
                                            />
                                            {value === null ? 'null' : value}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div style={{ margin: '0 40px 40px 0' }}>
                                <h4>Tail to middle</h4>
                                <label>
                                    <input
                                        type='checkbox'
                                        isChecked={state.isToMiddle}
                                        onClick={() => setState({ isToMiddle: !state.isToMiddle } )}
                                    />
                                </label>
                            </div>
                        </View>
                        <Popover
                            isAutoClosable
                            isAnimated
                            isHasTail
                            presets={[
                                {
                                    xAxis: state.xAxis || 'inside-left',
                                    yAxis: state.yAxis || 'outside-bottom',
                                    tail: {
                                        xOffset: state.xTailOffset,
                                        yOffset: state.yTailOffset,
                                        toMiddle: !!state.isToMiddle
                                    },
                                }
                            ]}>
                            <Button>
                                Click me
                            </Button>
                            <Popup>
                                Popup content
                            </Popup>
                        </Popover>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>

    ));
