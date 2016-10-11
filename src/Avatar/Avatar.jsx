'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const DEFAULT_AVATAR_URL = '/files/penguinAvatar.jpg';

class Avatar extends React.Component {
    static propTypes = {
        /**
         * Avatar image url
         */
        url: PropTypes.string,
        /**
         * Avatar size
         */
        size: PropTypes.oneOf(['s', 'm'])
    };

    render() {
        let style = Object.assign(
            {},
            STYLE.base,
            STYLE.size[this.props.size]
        );

        return (
            <div
                style={style}>
                <img style={STYLE.img} src={this.props.url || DEFAULT_AVATAR_URL}/>
            </div>
        )
    }
}

export default Avatar;

const STYLE = {
    base: {
        display: 'inline-block',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    size: {
        s: {
            width: '40px',
            height: '40px'
        },
        m: {
            width: '70px',
            height: '70px'
        }
    },
    img: {
        width: '100%'
    }
};
