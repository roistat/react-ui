const path = require('path');
const dir = path.join(__dirname, 'src');
var glob = require('glob');


const RE_TYPO = new RegExp([
    'Text.jsx'
].join('|'));

const RE_HELPERS = new RegExp([
    'Teleport.jsx',
    'TeleportContext.jsx',
    'Placer.jsx',
    'TargetWrapper'
].join('|'));


const createMatcher = (re) => () => {
    return glob.sync(path.resolve(__dirname, './src/**/*.jsx')).filter((module) => re.test(module));
};

module.exports = {
    title: 'Roistat react ui components',
    sections: [
        {
            name: 'Typography',
            //content: '',
            components: createMatcher(RE_TYPO)
        },
        {
            name: 'Helper components',
            //content: '',
            components: createMatcher(RE_HELPERS)
        }
    ],
    // components: function() {
    //     return glob.sync(path.resolve(__dirname, './src/**/*.jsx')).filter(function(module) {
    //         if (RE_EXCLUDE.test(module)) {
    //             return false
    //         }
    //
    //         return !/story.jsx$/.test(module);
    //     });
    // },
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