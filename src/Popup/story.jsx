import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Popup from './Popup.jsx';
import TextInput from '../TextInput';

storiesOf('Popup', module)
	.addWithInfo('Popup window', 'Popup window component', () => (
		<Popup autoCloseable = { true } hasTail = { true } tailSide = 'left' >
			<TextInput placeholder="Enter the text" />
		</Popup>
	))

