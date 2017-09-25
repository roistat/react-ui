import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Dropdown from './Dropdown';
import Popup, { Header } from '../Popup';
import Button from '../Button';
import Text from '../Text';
import View from '../View';
import { TeleportContext } from '../Teleport';

storiesOf('Dropdown', module)
    .add('Dropdown with button', () => (
        <TeleportContext>
            <View>
                <Dropdown>
                    <Button>
                        Click me
                    </Button>
                    <Popup>
                        Dropdown content
                    </Popup>
                </Dropdown>
            </View>
        </TeleportContext>
    ))
    .add('Dropdown with text control', () => (
        <TeleportContext>
            <View>
                <Dropdown>
                    <Text style={{ cursor: 'pointer', color: 'blue' }}>
                        Click me
                    </Text>
                    <Popup>
                        Dropdown content
                    </Popup>
                </Dropdown>
            </View>
        </TeleportContext>
    ))
    .add('Dropdown in bottom', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, width: '200px' }}>
                    <Dropdown>
                        <Button>
                            Click me
                        </Button>
                        <Popup>
                            Dropdown content
                        </Popup>
                    </Dropdown>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Not auto closable Dropdown', () => (
        <TeleportContext>
            <View>
                <Dropdown isAutoClosable={false}>
                    <Button>
                        Click me
                    </Button>
                    <Popup>
                        <Header>Title</Header>
                        <View style={{ paddingTop: '2rem' }}>
                            popup content
                        </View>
                    </Popup>
                </Dropdown>
            </View>
        </TeleportContext>
    ));