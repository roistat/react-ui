### Use cases

Use for auto close element by outside click

### Usage

```js
import AutoClosable from '@roistat/ui/lib/AutoClosable';
```

Example:

    const Button = require('../Button').default;
    const Popup = require('../Popup').default;
    
    <View style={{ flexDirection: 'column' }}>
        <View>
            <Button onClick={() => setState({ isOpen: true })}>
                Show popup
            </Button>
        </View>
        { state.isOpen &&
            <AutoClosable onClose={() => setState({ isOpen: false })}>
                <Popup>
                    Click outeside of popup
                </Popup>
            </AutoClosable>
        }
    </View>