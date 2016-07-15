import { create } from 'jss';
import camelCase from 'jss-camel-case'
import vendorPrefixer from 'jss-vendor-prefixer'
import nested from 'jss-nested';

const jss = create();

jss.use(nested());
jss.use(camelCase());
jss.use(vendorPrefixer());

export const StyleSheet  = {
    create(styles) {
        const sheet = jss.createStyleSheet(styles).attach();
        return sheet.classes;
    }
};

export const css = (...args) => {
    return [...args].filter(i => i).join(' ');
};

export const getServerSheets = () => {
    return jss.sheets.toString();
};