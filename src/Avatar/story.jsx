import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Avatar from './Avatar';
import View from '../View';

storiesOf('Avatar', module)
    .add('Avatar medium size', () => (
        <View>
            <Avatar size='m' />
        </View>
    ))

    .add('Avatar small size', () => (
        <View>
            <Avatar size='s' />
        </View>
    ))

    .add('Set Avatar using custom url', () => (
        <View>
            <Avatar url='/avatar/penguinAvatar.jpg' size='m' />
        </View>
    ));
