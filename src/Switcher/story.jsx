import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Switcher from './Switcher';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('Switcher', module)
    .add('Switcher', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <Switcher onClick={() => setState({ isChecked: !state.isChecked })} isChecked={state.isChecked} />
                    </div>
                )}
            </StateProvider>
        </View>
    ));
