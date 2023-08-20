const path = require("path");

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "login.js",
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@atoms": path.resolve(__dirname, "src/components/atoms/"),
            "@molecules": path.resolve(__dirname, "src/components/molecules/"),
            "@organisms": path.resolve(__dirname, "src/components/organisms/"),
            "@templates": path.resolve(__dirname, "src/components/templates/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@types": path.resolve(__dirname, "src/types/"),
            "@api": path.resolve(__dirname, "src/api/"),
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        host: "0.0.0.0",
        port: 80,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:9000',
        },
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};
