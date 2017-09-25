### Usage

```js
import FontIcon from '@roistat/ui/lib/Button';
````

Large button:

    <Button size='l'>
        Click me
    </Button>

Medium button (default):

    <Button>
        Click me
    </Button>

Small button:

    <Button size='s'>
        Click me
    </Button>

Extra small button:

    <Button size='xs'>
        Click me
    </Button>
    
Disabled button:

    <Button isDisabled>
        Click me
    </Button>    
       
Button with icon:

    const FontIcon = require('../FontIcon').default;
   
    <Button>
        <FontIcon style={{ fontSize: '16px' }} name='money' />
        Get one dollar
    </Button>    
    
Button isWaiting:

    <Button isWaiting>
        Click me
    </Button>    
    
Button isWaiting l:

    <Button size='l' isWaiting>
        Click me
    </Button>    
    
Button isWaiting xs:

    <Button size='xs' isWaiting>
        Click me
    </Button>    
    
Button Disabled and isWaiting:

    <Button isDisabled isWaiting>
        Click me
    </Button>