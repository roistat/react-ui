import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

const req = require.context('../src', true, /story\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);