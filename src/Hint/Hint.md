### Usage

```js
import Hint from '@roistat/ui/lib/Hint';
```

const View = require('../View').default;
const StateProvider = require('../StateProvider').default;

*Hint*

    <View>
        <div>tailPosition:</div>
        <select id='tailPosition'  style={{marginBottom:15+'px'}} onChange={() => setState({ tailPosition: document.getElementById("tailPosition").options[document.getElementById("tailPosition").selectedIndex].value })}>
            <option value="leftTop">leftTop</option>
            <option value="rightTop">rightTop</option>
            <option value="topLeft">topLeft</option>
            <option value="topRight">topRight</option>
            <option value="leftBottom">leftBottom</option>
            <option value="rightBottom">rightBottom</option>
            <option value="bottomLeft">bottomLeft</option>
            <option value="bottomRight">bottomRight</option>
        </select>
        <Hint tailPosition={state.tailPosition}>Hint</Hint>
    </View>

*Hint, showed on hover*

    <View>
        <button onMouseEnter={() => setState({ isHovered: true })} onMouseLeave={() => setState({ isHovered: false })}>
            Button
        </button>    
        { state.isHovered && <Hint tailPosition={'topLeft'} style={{marginTop:5+'px'}}>Hint</Hint> }
    </View>
