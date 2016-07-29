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
    template: './template.html',
    styleguideDir: 'assets',
    updateWebpackConfig: function(webpackConfig, env) {
        // Your source files folder or array of folders, should not include node_modules
        webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
            // Babel loader will use your project’s .babelrc
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            },
            {
                test: /\.css?$/,
                include: dir,
                loader: 'style/useable!css'
            }

        ]);

        return webpackConfig;
    }
    // Put other configuration options here...
};