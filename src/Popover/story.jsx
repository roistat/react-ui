import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Popover from './Popover';
import { TeleportContext } from '../Teleport';
import StateProvider from '../StateProvider';
import Button from '../Button';
import Popup from '../Popup';

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
                            <select onChange={(e) => setState({ currentPreset: JSON.parse(e.target.value) })}>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'inside-left',
                                        yAxis: 'outside-bottom',
                                        offsetY: 5
                                    })}
                                >
                                    inside-left outside-bottom
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'inside-left',
                                        yAxis: 'outside-top',
                                        offsetY: -5
                                    })}
                                >
                                    inside-left outside-top
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-left',
                                        yAxis: 'middle',
                                        offsetX: -5
                                    })}
                                >
                                    outside-left middle
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-left',
                                        yAxis: 'inside-top',
                                        offsetX: -5
                                    })}
                                >
                                    outside-left inside-top
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-left',
                                        yAxis: 'inside-bottom',
                                        offsetX: -5
                                    })}
                                >
                                    outside-left inside-bottom
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-right',
                                        yAxis: 'middle',
                                        offsetX: 5
                                    })}
                                >
                                    outside-right middle
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-right',
                                        yAxis: 'inside-bottom',
                                        offsetX: 5
                                    })}
                                >
                                    outside-right inside-bottom
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-right',
                                        yAxis: 'inside-top',
                                        offsetX: 5
                                    })}
                                >
                                    outside-right inside-top
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'outside-right',
                                        yAxis: 'outside-top',
                                        offsetX: 5
                                    })}
                                >
                                    outside-right outside-top
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'inside-right',
                                        yAxis: 'middle',
                                    })}
                                >
                                    inside-right middle
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'inside-right',
                                        yAxis: 'inside-top',
                                    })}
                                >
                                    inside-right inside-top
                                </option>
                                <option
                                    value={JSON.stringify({
                                        xAxis: 'inside-left',
                                        yAxis: 'inside-bottom',
                                    })}
                                >
                                    inside-left inside-bottom
                                </option>
                            </select>
                        </div>
                        <Popover
                            isAutoClosable
                            isAnimated
                            presets={state.currentPreset ?
                                [state.currentPreset] :
                                [{ xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }]
                            }>
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