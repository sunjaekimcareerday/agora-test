const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["webpack-hot-middleware/client?reload=true", "./agoraLogic.js"],
    output: {
        filename: "bundledAgoraLogic.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, './'), 
        },
        compress: true,
        port: 9000,
        hot: true, // Enable Hot Module Replacement
        liveReload: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Add HMR plugin
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
