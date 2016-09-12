'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import TextInput from '../TextInput';

import { StyleSheet, css } from '../helpers/styles';

const ModalHeaderSearchInput = (props) => (
    <View styles={[styles.search]}>
        <TextInput
            size='xs'
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </View>
);

ModalHeaderSearchInput.propTypes = {
    /**
     * On change SearchInput handler
     */
    onChange: PropTypes.func,
    /**
     * SearchInput placeholde
     */
    placeholder: PropTypes.placeholder,
    /**
     * SearchInput default value
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ModalHeaderSearchInput.__MODAL_HEADER_RIGHT_LAYOUT__ = true;

const styles = StyleSheet.create({
    search: {
        padding: '.4rem .5rem'
    }
});

export default ModalHeaderSearchInput;
