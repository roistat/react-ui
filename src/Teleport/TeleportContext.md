### Use cases
Context provider for Teleport component. 
It's component is required for Select, Dropdown, Modal, Tooltip and another components.

### Usage:
```js
import Teleport, { TeleportContext } from '@roistat/ui/lib/Teleport';
```

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
    
You can use nested context. Teleport will use first found context up the tree

    <TeleportContext>
        <div style={{ position: 'relative' }}>
            move to
            <div>
                some awesome block
            </div>
            <TeleportContext>
                <div style={{ position: 'relative' }}>
                    some awsesome another block
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
        </div>
    </TeleportContext>