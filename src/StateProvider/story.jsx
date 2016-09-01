import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import StateProvider from './StateProvider';

    storiesOf('StateProvider', module)
    .add('change content on button click', () => (
        <StateProvider state={{ content: 'awesome content' }}>
            {(state, setState) => (
                <div>
                    <button onClick={() => setState({ content: 'new content' })}>
                        update
                    </button>
                    {"\u00a0"}
                    <span>
                        {state.content}
                    </span>
                </div>
            )}
        </StateProvider>
    ));
