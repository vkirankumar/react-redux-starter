//Wriiten in common JS as node does not support modern JS yet.
const webpack = require("webpack");
const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; //Needed for babel plugin to know that we
                            //are running in development mode.

//Configure webpack
module.exports = {
    mode: "development", //Which mode the app is running in
    target: "web",//Target platform, browser in this case
    devtool: "cheap-module-source-map",//Source map for debugging in the browser
    entry: "./src/index", //Enrty point js file
    //Webpack does not output code in developemt mode,
    //It serves the app from memory
    output: {
        path: path.resolve(__dirname, "build"), //Wer should webpack mimic output from
        publicPath: "/", //Public path to be served on the browser
        filename: "bundle.js"//File name for the bundled/transpiled code
    },
    devServer: {
        stats: "minimal", //Minimal stats while compiling/running the application
        overlay: true,
        historyApiFallback: true, //All request will be sent to index.js and all links
        //inclusing deep links will be handled by react router.

        //The last three property is necessary to address the open issue when using webpack in chrome
        //Once resolved we should be removing these.
        disableHostCheck: true,
        headers: {"Access-Control-Allow-Origin": "*"},
        https: false
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico"
        })
    ],
    //Tell webpack what files to handle
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //Regular expression to look for .js and .jsx files
                exclude: /node_modules/, //exclude node_modules folder
                use: ["babel-loader", "eslint-loader"] //We should tell webpack to run babel on these files
                //This will tell babel to run on all .js and .jsx file and webpack will bundle them.
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"] //With these loaders we can import css just like
                //javascript files and webpack will bundle them and inject a reference to it in the 
                //index.html file
            }
        ]
    }
}