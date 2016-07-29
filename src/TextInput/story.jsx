import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInput from './TextInput.jsx';
storiesOf('TextInput', module)
	.addWithInfo('InputField', 'TextInput field', () => (
		<TextInput
			placeholder="Введите текст"
			width = '200px'
			autoFocus = { true }
		/>
	))
	.addWithInfo('TextArea', 'TextArea field', () => (
		<TextInput
			placeholder="Многострочный текст"
			isMultiLine = { true }
			rows = { 10 }
		/>
	))
