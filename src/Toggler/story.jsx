import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Toggler from './Toggler';
import { TeleportContext } from '../Teleport';
import Placer, { TargetWrapper } from '../Placer';
import Button from '../Button';
import Popup from '../Popup';

storiesOf('Toggler', module)
    .add('Show popup', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <Toggler>
                    {(isShown) => (
                        <TargetWrapper>
                            <Button>
                                {isShown ? 'Hide' : 'Show'}
                            </Button>
                            { isShown &&
                                <Placer presets={[{ xAxis: 'inside-left', yAxis: 'outside-bottom' }]}>
                                    <Popup>
                                        Popup content
                                    </Popup>
                                </Placer>
                            }
                        </TargetWrapper>
                    )}
                </Toggler>
            </div>
        </TeleportContext>
    ));