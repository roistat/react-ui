### Usage

```js
import Checkbox from '@roistat/ui/lib/Checkbox';
```

const View = require('../View').default;

*Checkbox*

    <View>
        <Checkbox isChecked={state.isChecked} onClick={() => setState({ isChecked: !state.isChecked })} />
        <span> {state.isChecked ? 'Checked' : 'Unchecked'}</span>
    </View>

*Checkbox is disabled*

    <Checkbox isDisabled={true} />
