import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CloseCross from './CloseCross';
import View from '../View';
import Popup from '../Popup';

storiesOf('CloseCross', module)
    .add('CloseCross without hover effect', () => (
        <View>
            <Popup>
                <CloseCross size="xs" style={{ position:'relative', left: 85+'%' }} />
                Popup text
            </Popup>
        </View>
    ))
    .add('CloseCross with hover effect', () => (
        <View>
            <Popup>
                <CloseCross size="xs" isHasHover={true} style={{ position:'relative', left: 85+'%' }} />
                Popup text
            </Popup>
        </View>
    ))
