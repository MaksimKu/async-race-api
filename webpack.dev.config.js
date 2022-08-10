const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
    },
};
