import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Overlay from './Overlay';
import View from '../View';

storiesOf('Overlay', module)
    .add('Overlay', () => (
        <View>
            <Overlay color='red' opacity={0.2} >
                <div style={{textAlign:'center', marginTop:'30%', fontSize:'27px'}}>Some content</div>
            </Overlay>
        </View>
    ));
