import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import PopupShowner from './PopupShowner';
import { TeleportContext } from '../Teleport';
import Button from '../Button';
import Popup from '../Popup';
import Transition from '../Transition';
import StateProvider from '../StateProvider';

storiesOf('PopupShowner', module)
	.add('Show popup', () => (
		<TeleportContext>
			<div style={{ margin: '40px' }}>
				<PopupShowner
					isAutoClosable
					presets={[
						{ xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
					]}>
					<Button>
						Click me
					</Button>
					<Popup>
						Popup content
					</Popup>
				</PopupShowner>
			</div>
		</TeleportContext>
	));
