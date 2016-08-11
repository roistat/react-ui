const path = require('path');
const dir = path.join(__dirname, 'src');
var glob = require('glob');

module.exports = {
    title: 'Roistat react ui components',
    components: function() {
        return glob.sync(path.resolve(__dirname, './src/**/*.jsx')).filter(function(module) {
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