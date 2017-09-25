'use strict';

import React from 'react';
import Overlay from '../Overlay';
import Spinner from '../Spinner';
import View from '../View';

import { StyleSheet, css } from '../helpers/styles';

const LoadingOverlay = () => {
    return (
        <Overlay>
            <View className={css(STYLE.root)} >
                <Spinner size='xs'/>
            </View>
        </Overlay>
    )
}

const STYLE = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LoadingOverlay;
