import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DialogPopup from './DialogPopup';
import DialogPopupHeader from './DialogPopupHeader';
import DialogPopupBody from './DialogPopupBody';
import DialogPopupNote from './DialogPopupNote';
import DialogPopupFooter from './DialogPopupFooter';
import View from '../View';

storiesOf('DialogPopup', module)
    .add('DialogPopup Info', () => (
        <View>
            <DialogPopup>
                <DialogPopupHeader>Info message</DialogPopupHeader>
                <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
                <DialogPopupNote>Dialog Popup Note</DialogPopupNote>
                <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
            </DialogPopup>
        </View>
    ))

    .add('DialogPopup Warning', () => (
        <View>
            <DialogPopup>
                <DialogPopupHeader>Warning message</DialogPopupHeader>
                <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
                <DialogPopupNote type='warning'>Dialog Popup Note</DialogPopupNote>
                <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
            </DialogPopup>
        </View>
    ))

    .add('DialogPopup Error', () => (
        <View>
            <DialogPopup>
                <DialogPopupHeader>Error message</DialogPopupHeader>
                <DialogPopupBody>Dialog Popup Content</DialogPopupBody>
                <DialogPopupNote type='error'>Dialog Popup Note</DialogPopupNote>
                <DialogPopupFooter>Dialog Popup Footer</DialogPopupFooter>
            </DialogPopup>
        </View>
    ));
