### Use cases:
Typical use case for placer is showing tooltip, popover, dropdown popup

### NOTE:

For usage you must wrap ypu app component with TeleportContext component, and render Placer in children of target component.
Target component is point for position of Placer.


### Placer usage

```js
import { TeleportContext } from '@roistat/ui/lib/Teleport';
import Placer, { TargetWrapper } from '@roistat/ui/lib/Placer';
```

Position X: inside-left, Y: outside-top
       
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'inside-left', yAxis: 'outside-top' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>
    
    
Position X: inside-left, Y: outside-bottom
    
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'inside-left', yAxis: 'outside-bottom' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>    
    
Position X: outside-right, Y: inside-top
    
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'outside-right', yAxis: 'inside-top' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>
        
Position X: outside-right, Y: middle
    
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'outside-right', yAxis: 'middle' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>
            
Position X: middle, Y: outside-top
    
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'middle', yAxis: 'outside-top' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>    
            
Position X: inside-left, Y: inside-bottom
    
    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <div style={{ padding: '40px', background: '#eee', width: '200px' }}>
                Target
                <Placer presets={[{ xAxis: 'inside-left', yAxis: 'inside-bottom' }]}>
                    <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                        Placeable
                    </div>
                </Placer>
            </div>
        </div>
    </TeleportContext>
    
Auto position, use first best position with space for both side
    
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer 
                        presets={[
                            { xAxis: 'inside-left', yAxis: 'outside-bottom' }, 
                            { xAxis: 'inside-right', yAxis: 'outside-bottom' }
                        ]}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
        
Offset 

        <TeleportContext>
            <div style={{ margin: 40 }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer 
                        presets={[
                            { xAxis: 'inside-right', yAxis: 'inside-top', offsetX: 10, offsetY: -15 }
                        ]}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff', opacity: .2 }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
        
Custom target

        const PrimaryButton = require('../PrimaryButton').default;
        
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <PrimaryButton
                    size='l'
                    onClick={() => {
                        function handler(e) { 
                            window.removeEventListener('click', handler);
                            setState({ 
                                demoText: 'Click for demo again',
                                rect: {
                                    left: e.clientX - 10,
                                    top: e.clientY - 10,
                                    height: 20,
                                    width: 20
                                }
                            });
                        }
                        
                        setState(
                            { demoText: 'click somewhere', rect: null }, 
                            () => setTimeout(() => window.addEventListener('click', handler), 100));
                    }}>
                    {state.demoText || 'Click for demo'}
                </PrimaryButton>
                {
                    state.rect &&
                    <Placer
                        presets={[{ xAxis: 'middle', yAxis: 'middle' }]} 
                        targetRect={state.rect}>
                        <div 
                            onClick={() => setState({ rect: null })} 
                            style={{ padding: '8px', background: 'red', color: '#fff', cursor: 'pointer' }}>
                            Click me for destroy
                        </div>
                    </Placer>
                }
            </div>
        </TeleportContext>
    
    