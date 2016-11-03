### Usage

```js
import DialogPopup, { 
    DialogPopupHeader, 
    DialogPopupBody, 
    DialogPopupNote, 
    DialogPopupFooter
} from '@roistat/ui/lib';

```
const View = require('../View').default;

*DialogPopup Info*

    <View>
        <DialogPopup>
            <DialogPopupHeader>Info message</DialogPopupHeader>
            <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
            <DialogPopupNote>Dialog Popup Note</DialogPopupNote>
            <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
        </DialogPopup>
    </View>

*DialogPopup Warning*

    <View>
        <DialogPopup>
            <DialogPopupHeader>Info message</DialogPopupHeader>
            <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
            <DialogPopupNote type='warning'>Dialog Popup Note</DialogPopupNote>
            <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
        </DialogPopup>
    </View>

*DialogPopup Error*

    <View>
        <DialogPopup>
            <DialogPopupHeader>Info message</DialogPopupHeader>
            <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
            <DialogPopupNote type='error'>Dialog Popup Note</DialogPopupNote>
            <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
        </DialogPopup>
    </View>
