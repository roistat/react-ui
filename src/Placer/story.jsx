import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StateProvider from '../StateProvider';
import Placer from './Placer';
import { TeleportContext } from '../Teleport';

storiesOf('Placer', module)
    .add('Y axis outside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-top']}>
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
                    <Placer yAxisPresets={['outside-bottom']}>
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
                    <Placer yAxisPresets={['middle']}>
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
                    <Placer yAxisPresets={['inside-top']}>
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
                    <Placer yAxisPresets={['inside-bottom']}>
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
                    <Placer xAxisPresets={['outside-left']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    // .add('X axis outside bottom', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('X axis middle', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('X axis inside top', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('X axis inside bottom', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ));