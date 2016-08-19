const path = require('path');
const dir = path.join(__dirname, 'src');
var glob = require('glob');

var RE_EXCLUDE = new RegExp([
    'TeleportWrapper',
    'TextInputControl',
    'PlacerWrapper',
    'SVGIcons'
].join('|'));

module.exports = {
    title: 'Roistat react ui components',
    components: function() {
        return glob.sync(path.resolve(__dirname, './src/**/*.jsx')).filter(function(module) {
            if (RE_EXCLUDE.test(module)) {
                return false
            }

            return !/story.jsx$/.test(module);
        });
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