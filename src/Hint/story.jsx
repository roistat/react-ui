import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hint from './Hint';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('Hint', module)
    .add('Hint leftTop', () => (
        <View>
            <Hint tailPosition={'leftTop'}>Hint</Hint>
        </View>
    ))
    .add('Hint rightTop', () => (
        <View>
            <Hint tailPosition={'rightTop'}>Hint</Hint>
        </View>
    ))
    .add('Hint topLeft', () => (
        <View>
            <Hint tailPosition={'topLeft'}>Hint</Hint>
        </View>
    ))
    .add('Hint, showed on hover', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <button onMouseEnter={() => setState({ isHovered: true })} onMouseLeave={() => setState({ isHovered: false })}>
                            Button
                        </button>    
                        { state.isHovered && <Hint tailPosition={'topLeft'} style={{marginTop:5+'px'}}>Hint</Hint> }
                    </div>
                    )}
            </StateProvider>
        </View>
    ));
