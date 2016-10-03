import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from './Checkbox';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('Checkbox', module)
    .add('Checkbox', () => (
        <View>
			<StateProvider state={{ isChecked: false }}>
				{(state, setState) => (
					<div>
						<Checkbox onClick={() => setState({ isChecked: !state.isChecked })} />
						<span> {state.isChecked ? 'Вкл' : 'Выкл'}</span>
					</div>
					)}
			</StateProvider>	
		</View>
    ))
    .add('Checkbox not toggle mode', () => (
        <Checkbox isToggleMod={false} />
    ));

