### Use cases
Typical use case of teleport is moving component from standart flow to children of context wrapper. 
For example see Placer component sources.

### Usage:
```js
import Teleport, { TeleportContext } from '@roistat/ui/lib/Teleport';
```
Example

    <TeleportContext>
        <div style={{ position: 'relative' }}>
            move to
            <div>
                some awesome block
            </div>
            <div>
                <Teleport>
                    <div style={{ marginLeft: 200, color: 'green' }}>
                        Target 1
                    </div>
                </Teleport>
                move from
            </div>
        </div>
    </TeleportContext>