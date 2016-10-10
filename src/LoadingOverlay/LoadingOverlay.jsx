'use strict';

import React from 'react';
import Overlay from '../Overlay';
import Spinner from '../Spinner';
import View from '../View';

import { StyleSheet, css } from '../helpers/styles';

export default class LoadingOverlay extends React.Component {
    render() {
        return (
            <Overlay>
                <View
                    className={css(styles.root)}
                    style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner size='xs'/>
                </View>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
