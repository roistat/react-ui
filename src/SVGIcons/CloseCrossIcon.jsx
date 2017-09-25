'use strict';

import React from 'react';

const CloseCross = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="0 0 16 16">
        <path fill='none' stroke={props.color} d="M3.5 3.5l8 8m0-8l-8 8"/>
    </svg>
);

export default CloseCross;