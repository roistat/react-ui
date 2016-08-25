import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Transition from './Transition';
import Button from '../Button';
import StateProvider from '../StateProvider';

storiesOf('Transition', module)
	.add('Popup with transition', () => (
		<StateProvider>
			{(state, setState) => (
				<div style={{ height: 500 }}>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						{state.isShown ? 'Hide' : 'Show'} 
				   </Button>
				   <Transition>
						{state.isShown && (({ isAppear, isEnter, isLeave, isUpdate }) => (
							<div 
								style={{ 
									marginTop: 30,
									transition: 'all 0.8s ease-out', 
									opacity: isEnter ? 1 : 0,
									transform: `translateY(${ isEnter? 0 : '60%'})`
								}}>
								Some awesome content...
							</div>
						))}
				   </Transition>
				</div>
			)}
		</StateProvider>
	))
