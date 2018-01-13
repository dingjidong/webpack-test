const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
}

module.exports = {
    entry:{
        app:PATHS.app,
    },
    output: {
        path:PATHS.build,
        filename: "[name].js"
    },
    devServer: {
        host:process.env.HOST,
        port:process.env.PORT,
        overlay:{
            errors:true,
            warnings:true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                //enforce:"pre",加载器顺序执行
                options: {
                    // eslint options (if necessary)

                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'webpack demo',
        }),
    ]

};
