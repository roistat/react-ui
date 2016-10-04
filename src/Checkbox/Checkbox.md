### Usage

```js
import Checkbox from '@roistat/ui/lib/Checkbox';
```

const View = require('../View').default;
const StateProvider = require('../StateProvider').default;

*Checkbox*

    <View>
        <StateProvider>
            {(state, setState) => (
                <div>
                    <Checkbox isChecked={state.isChecked} onClick={() => setState({ isChecked: !state.isChecked })} />
                    <span> {state.isChecked ? 'Checked' : 'Unchecked'}</span>
                </div>
            )}
        </StateProvider>
    </View>

*Checkbox is disabled*

    <Checkbox isDisabled={true} />
