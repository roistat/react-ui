import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Popover from './Popover';

storiesOf('Popover', module)
	.addWithInfo('Popover window', 'Popover window component', () => (
		<Popover tailDirection = 'left' tailColor='#ff3f3f' delay={300}>Popover message</Popover>
	))

