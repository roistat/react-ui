### Use cases

You should use this component for show popup by click event

### Usage

```js
import PopupShowner from '@roistat/ui/lib/PopupShowner';
```

First child must be a control component and second child must be a popup component.
PopupShowner provide onClick props for control component and onClose props for popup component

*Example*

    const TeleportContext = require('../Teleport').TeleportContext;
    const Popup = require('../Popup').default;
    const Button = require('../Button').default;
    
    <TeleportContext>
         <div style={{ margin: '40px' }}>
             <PopupShowner
                 isAutoClosable
                 presets={[
                     { xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
                 ]}>
                 <Button>
                     Click me
                 </Button>
                 <Popup>
                     Popup content
                 </Popup>
             </PopupShowner>
         </div>
    </TeleportContext>