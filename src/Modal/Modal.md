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
} from '@roistat/ui/lib';

```
Example 
    
    const Button = require('../Button').default;
    const View = require('../View').default;
    const { TeleportContext } = require('../Teleport');
    const { Header, HeaderTitle, HeaderSubtitle, HeaderSearchInput, HeaderToolbar, HeaderToolbarItem, Body } = require('./index');
    
    <TeleportContext>
        <div>
            <Button onClick={() => setState({ isShown: !state.isShown })}>
                show modal
            </Button>
            <Modal isAutoClosable isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
                <Header>
                    <HeaderTitle onClick={() => setState({ isShown: false, content: null })}>
                        Modal title
                    </HeaderTitle>
                    <HeaderSubtitle>
                        Subtitle
                    </HeaderSubtitle>
                    <HeaderSearchInput placeholder='search' />
                    <HeaderToolbar>
                        <HeaderToolbarItem iconName='bars' />
                    </HeaderToolbar>
                </Header>
                <Body theme='gray'>
                    <View style={{ height: 300, width: 600 }}>
                        {state.content || 'some modal content'}
                    </View>
                </Body>
            </Modal>
        </div>
    </TeleportContext>