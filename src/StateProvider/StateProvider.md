### Use cases

Use for provide simple state without HOC

### Usage

```js
import StateProvider from '@roistat/ui/lib/StateProvider';
```
    
    <StateProvider state={{ content: 'awesome content' }}>
        {(state, setState) => (
            <div>
                <button onClick={() => setState({ content: 'new content' })}>
                    update
                </button> 
                {"\u00a0"}
                <span>
                    {state.content}
                </span>
            </div>
        )}
    </StateProvider>