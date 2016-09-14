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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'outside-top' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'outside-bottom' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'middle' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'inside-top' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'inside-bottom' }]}>
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
                    <Placer presets={[{ xAxis: 'outside-left', yAxis: 'middle' }]}>
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
                    <Placer presets={[{ xAxis: 'outside-right', yAxis: 'middle' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'middle' }]}>
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
                    <Placer presets={[{ xAxis: 'inside-left', yAxis: 'middle' }]}>
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
                    <Placer presets={[{ xAxis: 'inside-right', yAxis: 'middle' }]}>
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
                    <Placer
                        presets={[
                            { xAxis: 'inside-right', yAxis: 'outside-top' },
                            { xAxis: 'inside-left', yAxis: 'outside-bottom' },
                            { xAxis: 'outside-left', yAxis: 'outside-top' },
                        ]}>
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
                    <Placer
                        presets={[
                            { xAxis: 'inside-left', yAxis: 'outside-top' },
                            { xAxis: 'outside-left', yAxis: 'middle' },
                            { xAxis: 'inside-left', yAxis: 'outside-bottom' },
                        ]}>
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
                    <Placer
                        presets={[
                            { xAxis: 'inside-right', yAxis: 'outside-bottom' },
                            { xAxis: 'inside-left', yAxis: 'outside-top' }
                        ]}>
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
                    <Placer
                        presets={[
                            { xAxis: 'inside-left', yAxis: 'outside-bottom' },
                            { xAxis: 'inside-right', yAxis: 'outside-top' }
                        ]}>
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
                    <Placer
                        presets={[
                            { xAxis: 'inside-left', yAxis: 'outside-bottom' },
                            { xAxis: 'inside-right', yAxis: 'outside-top' }
                        ]}>
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
                        <Placer
                            presets={[
                                { xAxis: 'inside-left', yAxis: 'outside-bottom' },
                                { xAxis: 'inside-right', yAxis: 'outside-top' }
                            ]}>
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
                    <Placer
                        presets={[{ xAxis: 'inside-right', yAxis: 'inside-top' , offsetX: 10, offsetY: -15 }]}>
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
                    presets={[{ xAxis: 'middle', yAxis: 'outside-bottom' }]}>
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
                    <Placer presets={[{ xAxis: 'middle', yAxis: 'outside-bottom' }]}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </TargetWrapper>
            </div>
        </TeleportContext>
    ));
