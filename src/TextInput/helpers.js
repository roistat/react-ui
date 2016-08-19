import { FONT } from '../const/theme.js';

export const generateTextStyles = (prefix = 'size') => {
    return {
        [`${prefix}L`]: {
            height: '1.8rem',
            lineHeight: '1.8rem',
            padding: '0 .3rem',
            fontSize: FONT.SIZE_BUTTON
        },
        [`${prefix}M`]: {
            height: '1.6rem',
            lineHeight: '1.6rem',
            fontSize: FONT.SIZE_BUTTON_SMALL,
            padding: '0 .2rem',
        },
        [`${prefix}S`]: {
            height: '1.4rem',
            lineHeight: '1.4rem',
            fontSize: FONT.SIZE_BUTTON_TINY,
            padding: '0 .2rem',
        },
        [`${prefix}Xs`]: {
            height: '1.2rem',
            lineHeight: '1.2rem',
            fontSize: FONT.SIZE_BUTTON_TINY,
            padding: '0 .2rem'
        },
        [`${prefix}Title`]: {
            height: '1.6rem',
            lineHeight: '1.6rem',
            fontSize: FONT.SIZE_TITLE,
            padding: '0 .2rem',
            fontWeight: 700
        }
    }
};