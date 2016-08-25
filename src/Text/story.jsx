import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Text from './Text';
import View from '../View';
import Button from '../Button';

storiesOf('Text', module)
	.add('ButtonText', () => (
		<View>
			<Button>
				<Text>Some awesome text</Text> 
			</Button>
		</View>
	))

