### Use cases

You should use this component for show popup by click event

### Usage

```js
import Popover from '@roistat/ui/lib/Popover';
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
              <div style={{ marginBottom: 20 }}>
                   <div style={{ marginBottom: 10 }}>
                       <h3>xAxis</h3>
                       <label>
                            <input type='radio' name='xAxis' onClick={() => setState({ xAxis: 'outside-left' })} />
                            outside-left
                        </label><br/>
                       <label>
                            <input type='radio' name='xAxis' onClick={() => setState({ xAxis: 'inside-left' })} />
                            inside-left
                        </label><br/>
                       <label>
                            <input type='radio' name='xAxis' onClick={() => setState({ xAxis: 'middle' })} />
                            middle
                        </label><br/>
                       <label>
                            <input type='radio' name='xAxis' onClick={() => setState({ xAxis: 'inside-right' })} />
                            inside-right
                        </label><br/>
                       <label>
                            <input type='radio' name='xAxis' onClick={() => setState({ xAxis: 'outside-right' })} />
                            outside-right
                        </label><br/>
                   </div>
                   <div style={{ marginBottom: 10 }}>
                       <h3>yAxis</h3>
                       <label>
                            <input type='radio' name='yAxis' onClick={() => setState({ yAxis: 'outside-top' })} />
                            outside-top
                        </label><br/>
                       <label>
                            <input type='radio' name='yAxis' onClick={() => setState({ yAxis: 'inside-top' })} />
                            inside-top
                        </label><br/>
                       <label>
                            <input type='radio' name='yAxis' onClick={() => setState({ yAxis: 'middle' })} />
                            middle
                        </label><br/>
                       <label>
                            <input type='radio' name='yAxis' onClick={() => setState({ yAxis: 'inside-bottom' })} />
                            inside-bottom
                        </label><br/>
                       <label>
                            <input type='radio' name='yAxis' onClick={() => setState({ yAxis: 'outside-bottom' })} />
                            outside-bottom
                        </label><br/>
                   </div>
              </div>
             <Popover
                 isAutoClosable
                 isAnimated
                 presets={[
                     { xAxis: state.xAxis || 'inside-left', yAxis: state.yAxis || 'outside-bottom' }
                 ]}>
                 <PrimaryButton>
                     Click me
                 </PrimaryButton>
                 <Popup>
                     Popup content
                 </Popup>
             </Popover>
         </div>
    </TeleportContext>