import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInput from './TextInput';

storiesOf('TextInput', module)
	.add('Size l', () => (
		<TextInput
			placeholder="enter the text"
			width='200px'
			autoFocus
			size='l'
		/>
	))
	.add('Size m', () => (
		<TextInput
			placeholder="enter the text"
			width='200px'
			autoFocus
			size='m'
		/>
	))
	.add('Size s', () => (
		<TextInput
			placeholder="enter the text"
			size='s'
		/>
	))
	.add('Size xs', () => (
		<TextInput
			placeholder="enter the text"
			size='xs'
		/>
	))
	.add('TextArea', () => (
		<TextInput
			placeholder="multiline text"
			isMultiLine
			rows={10}
		/>
	));

