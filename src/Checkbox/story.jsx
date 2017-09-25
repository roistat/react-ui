import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from './Checkbox';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('Checkbox', module)
    .add('Checkbox', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <Checkbox isChecked={state.isChecked} onClick={() => setState({ isChecked: !state.isChecked })} />
                        <span> {state.isChecked ? 'Checked' : 'Unchecked'}</span>
                    </div>
                )}
            </StateProvider>
        </View>
    ))
    .add('Checkbox is disabled', () => (
        <Checkbox isDisabled={true} />
    ))
	.add('Checkbox is disabled by click', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <Checkbox isDisabled={state.isDisabled} isChecked={state.isChecked} onClick={() => setState({ isChecked: !state.isChecked, isDisabled: !state.isDisabled })} />
                        <span> {state.isChecked ? 'Checked' : 'Unchecked'}</span>
                    </div>
                )}
            </StateProvider>
        </View>
    ));

