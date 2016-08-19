### Usage

```js
import Modal, { 
    Header, 
    HeaderTitle, 
    EditableTitle, 
    BackTitle, 
    HeaderSubtitle, 
    HeaderSearchInput,
    HeaderToolbar, 
    HeaderToolbarItem 
} from './ModalBody';

```
Example 

    <TeleportContext>
        <div>
            <Button onClick={() => setState({ isShown: !state.isShown })}>
                show modal
            </Button>
            <Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                <ModalHeader>
                    <ModalHeaderTitle onClick={() => setState({ isShown: false, content: null })}>
                        Modal title
                    </ModalHeaderTitle>
                    <ModalHeaderSubtitle>
                        Subtitle
                    </ModalHeaderSubtitle>
                    <ModalHeaderSearchInput placeholder='search' />
                    <ModalHeaderToolbar>
                        <ModalHeaderToolbarItem iconName='bars' />
                    </ModalHeaderToolbar>
                </ModalHeader>
                <ModalBody theme='gray'>
                    <View style={{ height: 300, width: 600 }}>
                        {state.content || 'some modal content'}
                    </View>
                </ModalBody>
            </Modal>
        </div>
    </TeleportContext>