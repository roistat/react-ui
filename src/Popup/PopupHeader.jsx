import React, { PropTypes } from 'react';

import View from '../View';
import Text from '../Text';
import CloseCross from '../CloseCross';
import { StyleSheet, css } from '../helpers/styles';
import { FONT } from '../const/theme';

const PopupHeader = ({ isHasClose, onClose, children }) => (
    <View styles={[styles.popupHeader]}>
        <View styles={[styles.popupTitle]}>
            <Text styles={[styles.text]}>
                {children}
            </Text>
        </View>
        { isHasClose &&
            <View>
                <CloseCross onClick={onClose} size='s' isHasHover />
            </View>
        }
    </View>
);

const styles = StyleSheet.create({
    popupHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    popupTitle: {
        flex: 1
    },
    text: {
        fontSize: FONT.SIZE_TITLE,
        fontWeight: 700
    }
});

PopupHeader.propTypes = {
    isHasClose: PropTypes.bool,
    onClose: PropTypes.func
};

PopupHeader.defaultProps = {
    isHasClose: true
};


export default PopupHeader;

