const path = require('path');
const dir = path.join(__dirname, 'src');

module.exports = {
    title: 'Roistat react ui components',
    components: './src/**/*.jsx',
    highlightTheme: 'material',
    assetsDir: './assets',
    template: './template.html',
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