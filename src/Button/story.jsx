import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
    .addWithInfo('Button default view', 'Default button with click handler', () => (
        <Button onClick={action('button clicked')}>
            Hello!!!
        </Button>
    ))
    .addWithInfo('Button small size', 'Small button with click handler', () => (
        <Button size='s' onClick={action('button clicked')}>
            Hello!!!
        </Button>
    ));
