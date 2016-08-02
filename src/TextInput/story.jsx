import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInput from './TextInput.jsx';
storiesOf('TextInput', module)
	.addWithInfo('InputField', 'TextInput field', () => (
		<TextInput
			placeholder="enter the text"
			width = '200px'
			autoFocus = { true }
			size = 'l'
		/>
	))
	.addWithInfo('TextArea', 'TextArea field', () => (
		<TextInput
			placeholder="multiline text"
			isMultiLine = { true }
			rows = { 10 }
		/>
	))

