### Usage

```js
import Hint from '@roistat/ui/lib/Hint';
```

const View = require('../View').default;
const StateProvider = require('../StateProvider').default;

*Hint*

    <View>
        <Hint tailPosition={'leftTop'}>Hint</Hint>
    </View>

*Hint, showed on hover*

    <View>
        <button onMouseEnter={() => setState({ isHovered: true })} onMouseLeave={() => setState({ isHovered: false })}>
            Button
        </button>    
        { state.isHovered && <Hint tailPosition={'topLeft'} style={{marginTop:5+'px'}}>Hint</Hint> }
    </View>