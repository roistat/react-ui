import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button.jsx';

storiesOf('Button', module)
    .addWithInfo('Button default view', 'Button default with click handler click action', () => (
        <Button onClick={ action('button clicked') }>
            Hello!!!
        </Button>
    ))
    .addWithInfo('Button small size', 'Button small size with click handler click action', () => (
        <Button size='s' onClick={ action('button clicked') }>
            Hello!!!
        </Button>
    ));
