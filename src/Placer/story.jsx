import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Placer from './Placer';
import { TeleportContext } from '../Teleport';
import TargetWrapper from './TargetWrapper';

storiesOf('Placer', module)
    .add('Y axis outside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-top']} xAxisPresets={['middle']} >
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis outside bottom', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-bottom']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis middle', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['middle']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis inside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['inside-top']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis inside bottom', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['inside-bottom']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis outside left', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['outside-left']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis outside right', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['outside-right']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis middle', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['middle']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis inside left', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis inside right', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-right']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position left top corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', top: 20, left: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-right', 'inside-left', 'outside-left']} yAxisPresets={['outside-top', 'outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position right top corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', top: 20, right: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left', 'outside-left']} yAxisPresets={['outside-top', 'middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position left bottom corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-right', 'inside-left', ]} yAxisPresets={['outside-bottom', 'outside-top']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position right bottom corner', () => (
        <TeleportContext>
            <div style={{ margin: 0 }}>
                <div style={{ position: 'absolute', bottom: 20, right: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left', 'inside-right']} yAxisPresets={['outside-bottom', 'outside-top']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Position with scroll', () => (
        <TeleportContext>
            <div style={{ margin: '900px 0' }}>
                <div style={{ position: 'absolute', bottom: 20, right: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left', 'inside-right']} yAxisPresets={['outside-bottom', 'outside-top']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Position with inner scroll', () => (
        <TeleportContext>
            <div style={{ margin: 0, width: 300, height: 300, overflow: 'scroll' }}>
                <div style={{ margin: '300px 100px' }}>
                    <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                        Target
                        <Placer xAxisPresets={['inside-left', 'inside-right']} yAxisPresets={['outside-bottom', 'outside-top']}>
                            <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                                Placeable
                            </div>
                        </Placer>
                    </div>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Custom offsets', () => (
        <TeleportContext>
            <div style={{ margin: 40 }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer offsetX={10} offsetY={-15} xAxisPresets={['inside-right']} yAxisPresets={['inside-top']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff', opacity: .2 }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Custom position', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', left: 200, top: 100, width: 100, height: 40, background: '#eee' }}>
                    Target
                </div>
                <Placer
                    targetRect={{ left: 200, top: 100, width: 100, height: 40 }}
                    xAxisPresets={['middle']}
                    yAxisPresets={['outside-bottom']}>
                    <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </TeleportContext>
    ))
    .add('TargetWrapper', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <TargetWrapper>
                    <div style={{ position: 'absolute', left: 200, top: 100, width: 100, height: 40, background: '#eee' }}>
                        Target
                    </div>
                    <Placer
                        xAxisPresets={['middle']}
                        yAxisPresets={['outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </TargetWrapper>
            </div>
        </TeleportContext>
    ));
