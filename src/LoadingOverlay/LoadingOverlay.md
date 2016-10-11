### Usage

```js
import Overlay from '@roistat/ui/lib/LoadingOverlay';
```

const View = require('../View').default;

*LoadingOverlay*

    <View>
        <button onClick={() => setState({ isShown: true })}>Button</button>
        { state.isShown && <LoadingOverlay /> }
    </View>
