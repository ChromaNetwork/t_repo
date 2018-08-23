/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const paths = {
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    assets: path.resolve(__dirname, "src/assets"),
    components: path.resolve(__dirname, "src/components")
};

const webpackConfig = {
    mode: "development",
    entry: ["babel-polyfill", path.resolve(paths.src, "App.jsx")],
    output: {
        path: paths.build,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            // https://github.com/webpack-contrib/file-loader --See for config
            { test: /\.(png|jpg|jpeg|gif|ttf|otf|svg|pdf)$/, loader: "file-loader" },
            // https://www.npmjs.com/package/eslint-loader --See "Usage"
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" },
            { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] }
        ]
    },
    plugins: [
        // https://github.com/jantimon/favicons-webpack-plugin -- see for cofig
        new FaviconsWebpackPlugin(path.join(paths.assets, "logo_75x75.png")),
        // https://github.com/jantimon/html-webpack-plugin#options -- See for config.
        new HtmlWebpackPlugin({
            template: path.join(paths.src, "index.html")
        })
    ],
    devServer: {
        contentBase: paths.build,
        publicPath: "/",
        historyApiFallback: true
    },
    resolve: {
        alias: {
            Base: paths.src,
            Atoms: path.resolve(paths.components, "atoms/"),
            Molecules: path.resolve(paths.components, "molecules/"),
            Organisms: path.resolve(paths.components, "organisms/"),
            Templates: path.resolve(paths.components, "templates/"),
            Dev: path.resolve(paths.components, "dev/"),
            Assets: path.resolve(paths.src, "assets/")
        },
        extensions: [".js", ".jsx"]
    }
};

module.exports = webpackConfig;
