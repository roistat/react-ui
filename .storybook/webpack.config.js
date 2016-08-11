const path = require('path');
const dir = path.join(__dirname, '..', 'src');

const config = {
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