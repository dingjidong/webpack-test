const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//生成到build css文件中
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    devServer: {
        host: process.env.HOST,
        port: process.env.PORT,
        overlay: {
            errors: true,
            warnings: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",//规则检测
                //enforce:"pre",加载器顺序执行
                options: {
                    // eslint options (if necessary)
                }
            },
           /* {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',//style class等样式
                    {
                        loader:'css-loader',//import use功能
                        options: {
                            modules:true,//因为默认情况下css是全局的，这个功能使不同的css文件里的内容作用于不同的作用域
                        }
                    }
                ],//注册这两个loader顺序不要写错
            },*/
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader:"css-loader",
                        options: {
                            modules:true,//因为默认情况下css是全局的，这个功能使不同的css文件里的内容作用于不同的作用域
                        }
                    }
                })
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
        }),
        new ExtractTextPlugin("styles.css"),
    ]

};
