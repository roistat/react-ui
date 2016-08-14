const path = require('path');
const dir = path.join(__dirname, '..', 'src');

const config = {
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            }
        ],
    },
};

module.exports = config;