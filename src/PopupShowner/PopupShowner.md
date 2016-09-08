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
    const PrimaryButton = require('../PrimaryButton').default;
    
    <TeleportContext>
         <div style={{ margin: '40px' }}>
              <div>
                   <div style={{ marginBottom: 10 }}>
                       <Button 
                            size='xs' 
                            onClick={() => setState({ 
                                preset: { xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
                            })}>
                          xAxis: 'inside-left', yAxis: 'outside-bottom'
                       </Button>
                   </div>
                   <div style={{ marginBottom: 10 }}>
                       <Button 
                            size='xs' 
                            onClick={() => setState({ 
                                preset: { xAxis: 'inside-left', yAxis: 'outside-top', offsetY: -5 }
                            })}>
                          xAxis: 'inside-left', yAxis: 'outside-top'
                       </Button>
                   </div>
              </div>
             <PopupShowner
                 isAutoClosable
                 isAnimated
                 presets={[
                     state.preset || { xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
                 ]}>
                 <PrimaryButton>
                     Click me
                 </PrimaryButton>
                 <Popup>
                     Popup content
                 </Popup>
             </PopupShowner>
         </div>
    </TeleportContext>