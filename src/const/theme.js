'use strict';

export const COLOR = {
    PRIMARY: '#038cd5',
    PRIMARY_DARK: '#003e61',
    PRIMARY_MEDIUM: '#0878b4', // text link && navbar active
    PRIMARY_LIGHT: '#50c3fe', // highlight && focus

    FOCUS_STROKE: '#77bfe6',

    ACCENT: '#00b494',
    ACCENT_TEXT: '#00997e',
    ACCENT_ACTION: '#01ab6d',

    ACTIVE: '#b0daf1',
    ACTIVE_LIGHT: '#e5f3fb',

    ALERT: '#e0571a',
    ALERT_TEXT: '#a43403',

    SUCCESS: '#70c316',
    SUCCESS_TEXT: '#55a201',

    TEXT: '#1b2a30',
    SUB_TEXT: '#727d81',
    MUTED: '#8f989c',

    DISABLED: '#e8e9ea',
    BORDER: '#b0b9bd',

    DIVIDER: '#e8e9ea',
    DIVIDER_GROUP: '#d7d8d9',
    TABLE_DIVIDER: '#1b2a30',

    BACKGROUND: '#f1f2f3',
    FOOTER_BACKGROUND: '#e8e9ea',

    PANEL_INFO: '#f5f2e3',
    PANEL_SUCCESS: '#d3eddf',
    PANEL_HELP: '#f7f4e9',

    HOVERED_ROW: '#f6f7f8',
    SHADOW: 'rgba(27, 42, 48, .2)',

    LINK_BUTTON: '#007ebf',

    GRAY_HOVER: '#f7f8f9',
    GRAY_ACTIVE: '#f1f2f3',

    HOVER: 'rgba(27, 42, 48, .03)'
};

export const FONT = {
    BASE_LINE_HEIGHT: '1.2rem',
    BASE_FONT_SIZE: 15,
    FAMILY: 'PTSans, sans-serif',
    HEADING_FAMILY: 'PTSans, sans-serif',
    SIZE_HEADLINE: '.9rem',
    SIZE_SUBHEAD: '.75rem',
    SIZE_TEXT: '.7rem',
    SIZE_SUB_TEXT: '.65rem',
    SIZE_TITLE: '.7rem',
    SIZE_CAPTION: '.65rem',
    SIZE_BUTTON: '.7rem',
    SIZE_BUTTON_LARGE: '.75rem',
    SIZE_BUTTON_SMALL: '.65rem',
    SIZE_BUTTON_TINY: '.6rem',
    SIZE_TABLE_CELL: '.6rem',
    LINE_HEIGHT_HEADLINE: '1.5rem',
    LINE_HEIGHT_SUBHEAD: '1rem',
    LINE_HEIGHT_TITLE: '1rem',
    LINE_HEIGHT_TEXT: '1rem',
    LINE_HEIGHT_BUTTON: '2rem',
    LINE_HEIGHT_BUTTON_LARGE: '2.4rem',
    LINE_HEIGHT_BUTTON_SMALL: '1.2rem',
    LINE_HEIGHT_BUTTON_TINY: '1.6rem',
    LINE_HEIGHT_TABLE_CELL: '1.2rem',
    LINE_HEIGHT_CAPTION: '.8rem',

    SIZE: {
        BUTTON_SMALL_TEXT: '.65rem',
        BUTTON_TEXT: '.7rem'
    }
};

export const SHADOW = {
    SELECTED_ROW: '0px 2px 2px 0px rgba(41, 36, 24, .15)',
    POPUP: '0 6px 24px rgba(114, 125, 129, .75)',
    FOCUS: `0 0 2px 0px ${COLOR.PRIMARY_LIGHT}, inset 0 0 0 1px ${COLOR.FOCUS_STROKE}`,
    INPUT: `inset 0px 2px 2px 0px ${COLOR.SHADOW}`
};

export const MEDIA_QUERY = {
    TABLET: '@media (max-width: 768px)',
    MOBILE: '@media (max-width: 480px)'
};