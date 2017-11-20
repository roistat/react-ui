import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Rating from './Rating';

storiesOf('Rating', module)
    .addWithInfo('Rating', 'Rating', () => (
        <Rating size='l' currentRate={2} />
    ));
