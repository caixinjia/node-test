const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: __dirname + "/app/main.js", //唯一入口文件
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.[hash].js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        port: "8080",
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index-temp.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new CleanWebpackPlugin(
            ['build/*.js', 'build/*.js.map'], 　 //匹配删除的文件
            {
                root: __dirname, //根目录
                verbose: true, //开启在控制台输出信息
                dry: false //启用删除文件
            }
        )
    ],

}