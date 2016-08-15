import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StateProvider from '../StateProvider';
import Placer from './Placer';
import { TeleportContext } from '../Teleport';
import Placeable from './Placeable';

storiesOf('Placer', module)
    .add('Y axis outside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '10px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-top']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ));
    // .add('Y axis outside bottom', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('Y axis middle', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('Y axis inside top', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('Y axis inside bottom', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
    // .add('X axis outside top', () => (
    //     <Placer>
    //         <div style={{ margin: '40px', padding: '10px', background: '#eee', width: '200px' }}>
    //             Target
    //         </div>
    //     </Placer>
    // ))
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