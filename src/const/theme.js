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
    BASE_LINE_HEIGHT: '24px',
    BASE_FONT_SIZE: 15,
    FAMILY: 'PTSans, sans-serif',
    HEADING_FAMILY: 'PTSans, sans-serif',
    SIZE_HEADLINE: '18px',
    SIZE_SUBHEAD: '15px',
    SIZE_TEXT: '14px',
    SIZE_SUB_TEXT: '13px',
    SIZE_TITLE: '14px',
    SIZE_CAPTION: '13px',
    SIZE_BUTTON: '14px',
    SIZE_BUTTON_LARGE: '15px',
    SIZE_BUTTON_SMALL: '13px',
    SIZE_BUTTON_TINY: '12px',
    SIZE_TABLE_CELL: '12px',
    LINE_HEIGHT_HEADLINE: '30px',
    LINE_HEIGHT_SUBHEAD: '20px',
    LINE_HEIGHT_TITLE: '20px',
    LINE_HEIGHT_TEXT: '20px',
    LINE_HEIGHT_BUTTON: '40px',
    LINE_HEIGHT_BUTTON_LARGE: '48px',
    LINE_HEIGHT_BUTTON_SMALL: '24px',
    LINE_HEIGHT_BUTTON_TINY: '32px',
    LINE_HEIGHT_TABLE_CELL: '24px',
    LINE_HEIGHT_CAPTION: '16px',

    SIZE: {
        BUTTON_SMALL_TEXT: '13px',
        BUTTON_TEXT: '14px',
    },
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