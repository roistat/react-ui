import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
    .add('Checkbox', () => (
        <View>
            <Checkbox />
        </View>
    ))
    .add('Checkbox not toggle mode', () => (
        <View>
            <Checkbox isToggleMod={false} />
        </View>
    ));

