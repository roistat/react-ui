import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LoadingOverlay from './LoadingOverlay';
import View from '../View';

storiesOf('LoadingOverlay', module)
    .add('LoadingOverlay', () => (
        <View>
            <LoadingOverlay />
            <button style={{width:'100px', margin:'30% auto'}}>Button</button>
        </View>
    ));
