const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts'   
    },
    target: 'web',
    mode: 'development',
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    }
};
