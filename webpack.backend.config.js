const path = require('path');
const fs = require('fs');

const BUILD_PATH = './.build';


let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = {
    entry: ['./server/index.js'],
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, BUILD_PATH),
        publicPath: '/',
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    externals: nodeModules,
}