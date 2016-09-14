const path = require('path');
const dir = path.join(__dirname, 'src');
var glob = require('glob');

const createRe = (components) => {
    return new RegExp(
        components.map(name => `/${name}`).join('|'));
};

const RE_TYPO = new RegExp([
    'Text.jsx'
].join('|'));

const RE_HELPERS = createRe([
    'Teleport.jsx',
    'TeleportContext.jsx',
    'Placer.jsx',
    'TargetWrapper.jsx',
    'AutoClosable.jsx',
    'StateProvider.jsx',
    'Transition.jsx',
    'Toggler.jsx',
    'Popover.jsx',
]);

const RE_CONTROLS = createRe([
    'Button.jsx',
    'PrimaryButton.jsx',
    'TextInput.jsx'
]);

const RE_ELEMENTS = createRe([
    'View.jsx',
    'Tail.jsx',
    'Spinner.jsx',
    'FontIcon.jsx',
    'CloseCross.jsx',
    'Popup.jsx',
]);

const RE_VIEWS = createRe([
    'Modal.jsx'
]);


const createMatcher = (re) => () => {
    return glob.sync(path.resolve(__dirname, './src/**/*.jsx')).filter((module) => re.test(module));
};

module.exports = {
    title: 'Roistat react ui components',
    sections: [
        {
            name: 'Typography',
            components: createMatcher(RE_TYPO)
        },
        {
            name: 'Controls',
            components: createMatcher(RE_CONTROLS)
        },
        {
            name: 'Views',
            components: createMatcher(RE_VIEWS)
        },
        {
            name: 'Helpers',
            components: createMatcher(RE_HELPERS)
        },
        {
            name: 'Elements',
            components: createMatcher(RE_ELEMENTS)
        }
        // {
        //     name: 'Behavers',
        //     components: createMatcher(RE_ELEMENTS)
        // }
    ],
    getExampleFilename: function(componentPath) {
        return componentPath.replace(/\.jsx?$/,   '.md');
    },
    highlightTheme: 'material',
    assetsDir: './assets',
    template: './assets/template.html',
    styleguideDir: 'styleguide',
    updateWebpackConfig: function(webpackConfig, env) {
        webpackConfig.module.resolve = {
            extensions: [
                '',
                '.js',
                '.jsx'
            ]
        };
        webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
            // Babel loader will use your project’s .babelrc
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            }
        ]);

        return webpackConfig;
    }
    // Put other configuration options here...
};