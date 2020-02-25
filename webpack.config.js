module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader','css-loader']
        }]
    }
}