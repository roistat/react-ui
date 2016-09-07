### Use cases

This component you should use for transition animation

### Transition states:

- isAppear: stage for set start enter transition styles  
- isEnter: stage for set end enter transition styles  
- isLeave: stage for set end leave transition styles  
- isUpdate: is component update stage

### Usage

```js
import Transition from '@roistat/ui/lib/Transition';
```

Example 

    const Button = require('../Button').default;
    
    <div style={{ height: 100 }}>
        <Button onClick={() => setState({ isShown: !state.isShown })}>
            {state.isShown ? 'Hide' : 'Show'} 
       </Button>
       <Transition>
            {state.isShown && (({ isAppear, isEnter, isLeave, isUpdate }) => (
                <div 
                    style={{ 
                        margintTop: 20,
                        transition: 'all .2s ease-out', 
                        opacity: isEnter ? 1 : 0,
                        transform: `translateY(${ isEnter? 0 : '30%'})`
                    }}>
                    Some awesome content...
                </div>
            ))}
       </Transition>
    </div>