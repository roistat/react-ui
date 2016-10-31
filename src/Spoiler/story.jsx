import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Spoiler from './Spoiler';
import View from '../View';

storiesOf('Spoiler', module)
    .addWithInfo('Spoiler', 'Spoiler example', () => (
        <Spoiler
            title='"А вы смогли бы?" В.Маяковский'
            text={
                <View>
                    Я сразу смазал карту будня,<br />
                    плеснувши краску из стакана;<br />
                    я показал на блюде студня<br />
                    косые скулы океана.<br />
                    На чешуе жестяной рыбы<br />
                    прочел я зовы новых губ.<br />
                    А вы<br />
                    ноктюрн сыграть<br />
                    могли бы<br />
                    на флейте водосточных труб?
                </View>
            }
        />
    ));
