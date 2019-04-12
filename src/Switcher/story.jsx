import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Switcher from './Switcher';
import View from '../View';

storiesOf('Switcher', module)
    .add('Switcher', () => (
        <View>
            <Switcher />
        </View>
    ))

    .add('Switcher is disabled', () => (
        <View>
            <Switcher isDisabled={true} />
        </View>
    ))

    .add('Switcher is checked', () => (
        <View>
            <Switcher isChecked={true} />
        </View>
    ));
