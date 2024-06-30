const path = require('path');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const environment = process.env.NODE_ENV == 'develop' ? 'development' : 'production';
const outPut = process.env.NODE_ENV == 'develop' ? './dist' : './build';

module.exports = {
    mode: environment,
    entry: './src/js/main.ts',
    output: {
        path: path.resolve(__dirname, outPut),
        filename: 'assets/js/[name].js',
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
    ],
    watchOptions: {
        ignored: /node_modules/
    },
}
