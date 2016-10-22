'use strict';

import React, { PropTypes } from 'react';

import { StyleSheet, css } from '../helpers/styles';

const Avatar = (props) => {
    const { size, url } = props;

    return (  
        <div className={css(STYLE.base, STYLE.getPreset('size', size))}>
            <img className={css(STYLE.img)} src={url}/>
        </div>
    )
}

Avatar.propTypes = {
    /**
     * Avatar image url
     */
    url: PropTypes.string.isRequired,
    /**
     * Avatar size
     */
    size: PropTypes.oneOf(['s', 'm'])
};

const STYLE = StyleSheet.create({
    base: {
        display: 'inline-block',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    sizeS: {
        width: '40px',
        height: '40px'
    },
    sizeM: {
        width: '70px',
        height: '70px'
    },
    img: {
        width: '100%'
    }
});

export default Avatar;
