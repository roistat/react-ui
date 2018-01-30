import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hint from './Hint';
import View from '../View';
import StateProvider from '../StateProvider';

storiesOf('Hint', module)

    .add('Hint', () => (
        <View>
            <StateProvider>
                {(state, setState) => (
                    <div>
                        <div>tailPosition:</div>
                        <select id='tailPosition'  style={{marginBottom:15+'px'}} onChange={() => setState({ tailPosition: document.getElementById("tailPosition").options[document.getElementById("tailPosition").selectedIndex].value })}>
                            <option value="leftTop">leftTop</option>
                            <option value="rightTop">rightTop</option>
                            <option value="topLeft">topLeft</option>
                            <option value="topRight">topRight</option>
                            <option value="leftBottom">leftBottom</option>
                            <option value="rightBottom">rightBottom</option>
                            <option value="bottomLeft">bottomLeft</option>
                            <option value="bottomRight">bottomRight</option>
                        </select>
                        <Hint tailPosition={state.tailPosition}>Hint</Hint>
                    </div>
                    )}
            </StateProvider>
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
