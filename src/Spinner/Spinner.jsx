'use strict';

import React, { PropTypes } from 'react';
import style from './Spinner.css';

style.use();

const STYLE = {
    root: {
        size: {
            l: {
                width: 64,
                height: 64,
                borderWidth: 6,
                borderRadius: '50%'
            },
            m: {
                width: 32,
                height: 32
            },
            s: {
                width: 24,
                height: 24,
                borderWidth: 3
            },
            xs: {
                width: 16,
                height: 16,
                borderWidth: 2
            }
        }
    }
};

const Spinner = (props) => {
    return (
        <div style={{ ...STYLE.root.size[props.size], borderColor: props.color }} className='Spinner'/>
    )
};

Spinner.propTypes = {
    size: PropTypes.oneOf(['l', 'm', 's', 'xs'])
};

Spinner.defaultProps = {
    size: 'xs'
};


export default Spinner;