### Usage

```js
import Dropdown from '@roistat/ui/lib/Dropdown';
```

First child must be a control component and second child must be a popup component.
Dropdown provide onClick props for control component and onClose props for popup component

*Autoclosable dropdown*

    const TeleportContext = require('../Teleport').TeleportContext;
    const Popup = require('../Popup').default;
    const PrimaryButton = require('../PrimaryButton').default;
    
    <TeleportContext>
        <View>
            <Dropdown>
                <PrimaryButton>
                    Click me
                </PrimaryButton>
                <Popup>
                    Dropdown content
                </Popup>
            </Dropdown>
        </View>
    </TeleportContext>
    
*Not autoclosable dropdown*

    const TeleportContext = require('../Teleport').TeleportContext;
    const Popup = require('../Popup').default;
    const Header = require('../Popup').Header;
    const PrimaryButton = require('../PrimaryButton').default;
    
    <TeleportContext>
        <View>
            <Dropdown isAutoClosable={false}>
                <PrimaryButton>
                    Click me
                </PrimaryButton>
                <Popup>
                    <Header>
                        Title
                    </Header>
                    Dropdown content
                </Popup>
            </Dropdown>
        </View>
    </TeleportContext>
