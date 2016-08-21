import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AutoClosable from './AutoClosable';
import Popup from '../Popup';

storiesOf('AutoClosable', module)
	.add('AutoClosable Popup window', () => (
		<AutoClosable onClose={action('close')}>
			<Popup>Popup window</Popup>
		</AutoClosable>
	));

