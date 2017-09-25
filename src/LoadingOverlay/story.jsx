import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LoadingOverlay from './LoadingOverlay';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('LoadingOverlay', module)
    .add('LoadingOverlay', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <button onClick={() => setState({ isShown: true })}>Button</button>
                        { state.isShown && <LoadingOverlay /> }
                    </div>
                    )}
            </StateProvider>
        </View>
    ));
