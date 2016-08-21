import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import View from '../View';
import Button from '../Button';

import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalHeaderBackTitle from './ModalHeaderBackTitle';
import ModalHeaderEditableTitle from './ModalHeaderEditableTitle';
import ModalHeaderTitle from './ModalHeaderTitle';
import ModalBody from './ModalBody';
import { TeleportContext } from '../Teleport';
import StateProvider from '../StateProvider';
import Placer from '../Placer';

storiesOf('Modal', module)
    .add('Update', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div>
                        <Button onClick={() => setState({ isShown: !state.isShown })}>
                            show modal
                        </Button>
                        <Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                            <div style={{ padding: 20 }}>
                                Modal
                                <View style={{ height: 100, width: 200 }}>
                                    {state.content || 'some modal content'}
                                </View>
                                <View>
                                    <Button size='xs' onClick={() => setState({ content: 'update text' })}>
                                        Update
                                    </Button>
                                    {"\u00a0"}
                                    <Button size='xs' onClick={() => setState({ isShown: false, content: '' })}>
                                        Close
                                    </Button>
                                </View>
                            </div>
                        </Modal>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>
    ))
    .add('Body and HeaderTitle', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div>
                        <Button onClick={() => setState({ isShown: !state.isShown })}>
                            show modal
                        </Button>
                        <Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                            <ModalHeader>
                                <ModalHeaderTitle onClick={() => setState({ isShown: false, content: null })}>
                                    Back
                                </ModalHeaderTitle>
                            </ModalHeader>
                            <ModalBody>
                                <View style={{ height: 100, width: 200 }}>
                                    {state.content || 'some modal content'}
                                </View>
                                <View>
                                    <Button size='xs' onClick={() => setState({ content: 'update text' })}>
                                        Update
                                    </Button>
                                </View>
                            </ModalBody>
                        </Modal>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>
    ))
    .add('BackTitle amd Gray body', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div>
                        <Button onClick={() => setState({ isShown: !state.isShown })}>
                            show modal
                        </Button>
                        <Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                            <ModalHeader>
                                <ModalHeaderBackTitle onClick={() => setState({ isShown: false, content: null })}>
                                    Back
                                </ModalHeaderBackTitle>
                            </ModalHeader>
                            <ModalBody theme='gray'>
                                <View style={{ height: 100, width: 200 }}>
                                    {state.content || 'some modal content'}
                                </View>
                                <View>
                                    <Button size='xs' onClick={() => setState({ content: 'update text' })}>
                                        Update
                                    </Button>
                                </View>
                            </ModalBody>
                        </Modal>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>
    ))
    .add('Gray body and Editable Title', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div>
                        <Button onClick={() => setState({ isShown: !state.isShown })}>
                            show modal
                        </Button>
                        <Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                            <ModalHeader>
                                <ModalHeaderEditableTitle onClick={() => setState({ isShown: false, content: null })}>
                                    New Title ...
                                </ModalHeaderEditableTitle>
                            </ModalHeader>
                            <ModalBody theme='gray'>
                                <View style={{ height: 100, width: 200 }}>
                                    {state.content || 'some modal content'}
                                </View>
                            </ModalBody>
                        </Modal>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>
    ))
    .add('AutoClosable and Placer', () => (
        <StateProvider>
            {(state, setState) => (
                <TeleportContext>
                    <div>
                        <Button onClick={() => setState({ isShown: !state.isShown })}>
                            show modal
                        </Button>
                        <Modal isAutoClosable isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                            <ModalHeader>
                                <ModalHeaderEditableTitle onClick={() => setState({ isShown: false, content: null })}>
                                    New Title ...
                                </ModalHeaderEditableTitle>
                            </ModalHeader>
                            <ModalBody theme='gray'>
                                <View style={{ height: 100, width: 200 }}>
                                    {state.content || 'some modal content'}
                                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['inside-top']}>
                                        <div style={{ padding: 40, height: 400,width: 100, background: '#333', color: '#fff' }}>
                                            Click me
                                        </div>
                                    </Placer>
                                </View>
                            </ModalBody>
                        </Modal>
                    </div>
                </TeleportContext>
            )}
        </StateProvider>
    ))
