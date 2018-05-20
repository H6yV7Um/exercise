const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve('./test.js'),
    },
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        filename: 'output.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    }
};
