const path = require('path')

Module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    output: {
        path: pach.resolve(__dirname, 'public'),
        filename: 'bundle.min.js'
    }
}