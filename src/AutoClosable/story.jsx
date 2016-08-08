import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AutoClosable from './AutoClosable.jsx';
import Popup from '../Popup';

storiesOf('AutoClosable', module)
	.addWithInfo('AutoClosable Popup window', 'AutoClosable Popup window', () => (
		<AutoClosable parentComponent={document.getElementById('root')} onClose={action(console.log('close'))}><Popup>Popup window</Popup></AutoClosable>
	))

