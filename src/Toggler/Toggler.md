### Use cases

You should use this component for provide simple toggle state for children component by click event

### Usage

```js
import Toggle from '@roistat/ui/lib/Toggle';
```

Example 

    const Button = require('../Button').default;
    const PrimaryButton = require('../PrimaryButton').default;
    
    <Toggler>
        {(isOn) => isOn ? 
            (
                <PrimaryButton>
                    Feature is on
                </PrimaryButton>
            ) :
            (
                <Button>
                    Feature is off
                </Button>
            )                
        }
    </Toggler>