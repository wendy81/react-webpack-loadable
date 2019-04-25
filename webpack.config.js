const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //index template

/**
 * dotenv-webpack wraps dotenv and Webpack.DefinePlugin. 
 * As such, it does a text replace in the resulting bundle for any instances of process.env.
 */
const Dotenv = require('dotenv-webpack');

const ManifestPlugin = require('webpack-manifest-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin'); // build,first clear up 'dist' folder

const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

var autoprefixer = require('autoprefixer'); //NEW

/**
 * Use the css-loader or the raw-loader to turn it into a JS module 
 * and the mini-css-extract-plugin to extract it into a separate file. 
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin"); //min.js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //min.css

const Visualizer = require('webpack-visualizer-plugin');

const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './src');
// const configDirs = {
//     BUILD_DIR: BUILD_DIR,
//     APP_DIR: APP_DIR
// }

let devBuild = (process.env.NODE_ENV !== 'production');


const plugins = [
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
        favicon: __dirname + '/public/favicon.ico', // works production mode, not work development work
        template: __dirname + "/public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    // use below plugin, will show "DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead"
    // new UnusedFilesWebpackPlugin({
    //     failOnUnused: true
    // }),

    // new ManifestPlugin()  no use now 

    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devBuild ? '[name].css' : 'css/[name].min.css',
        chunkFilename: devBuild ? '[name].css' : 'css/[name].min.css',
    }),

    new Visualizer({
        filename: './statistics.html'
    }),
    //global variables
    // new webpack.DefinePlugin({
    //     'SERVER_HOST': JSON.stringify('http://localhost:3004')
    // })
    new Dotenv()
]

const webpackConfig = {

    mode: devBuild ? 'development' : 'production',
    devtool: devBuild ? 'eval-source-map' : 'source-map',
    // devtool: devBuild ? 'cheap-eval-source-map' : 'cheap-source-map',
    // devtool: 'eval-source-map',

    entry: [
        "core-js/modules/es6.promise",
        "core-js/modules/es6.array.iterator",
        APP_DIR + "/index.js"
    ],
    output: {
        path: devBuild ? BUILD_DIR + "/" : path.resolve(__dirname, 'dist'),
        filename: devBuild ? '[name].bundle.js' : 'js/[name].bundle.min.js',
        chunkFilename: devBuild ? '[name].bundle.js' : 'js/[name].bundle.min.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader', // add this setting, in order to (import '../../test.css')
                use: [
                    devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions']
                            })],
                        }
                    }
                ]
            },
            // {
            //     /**
            //      *  the sass-loader loader uses the node-sass implementation
            //      *  that's if you use scss, you  should install sass-loader and node-sass
            //      */
            //     test: /\.module\.s(a|c)ss$/,
            //     // loader: 'style-loader!css-loader!sass-loader'
            //     // use: [
            //     //     // fallback to style-loader in development
            //     //     // creates style nodes from JS strings
            //     //     devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
            //     //     "css-loader", // translates CSS into CommonJS
            //     //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
            //     // ],
            //     loader: [
            //         devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[name]__[local]___[hash:base64:5]',
            //                 camelCase: true,
            //             }
            //         },
            //         "sass-loader"
            //     ]
            // },
            { // sass and less setting only use  single
                /**
                 *  the sass-loader loader uses the node-sass implementation
                 *  that's if you use scss, you  should install sass-loader and node-sass
                 */
                test: /\.module\.less$/,
                // loader: 'style-loader!css-loader!sass-loader'
                // use: [
                //     // fallback to style-loader in development
                //     // creates style nodes from JS strings
                //     devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
                //     "css-loader", // translates CSS into CommonJS
                //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
                // ],
                loader: [
                    devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            camelCase: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions']
                            })],
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: devBuild ? '[hash].[ext]' : 'images/[sha512:hash:base64:7].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            // pngquant: {
                            //     quality: '65-90',
                            //     speed: 4
                            // },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },


    plugins: devBuild ? plugins : [...plugins, new CleanWebpackPlugin()],

    optimization: {
        minimizer: [
            new TerserJSPlugin({}),  //min.js
            new OptimizeCSSAssetsPlugin({})  //min.css
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30040,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    reuseExistingChunk: true
                },
                'react-dom': {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react-dom',
                    chunks: 'all'
                },
                // 'antd-lodash': {
                //     test: /[\\/]node_modules[\\/](antd|lodash)[\\/]/,
                //     name: 'antd-lodash',
                //     chunks: 'all'
                // }
            }

        }
    },

    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    resolve: {
        /**
         * use extensions, then you can [import styles from 'Scss/style.module'], not add .scss;
         */
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            Src: path.resolve(__dirname, 'src/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Routes: path.resolve(__dirname, 'src/routers/routes.js'),
            RouterLazy: path.resolve(__dirname, 'src/routers/asyn-lazy.js'),
            Less: path.resolve(__dirname, 'src/less/'),
            Icons: path.resolve(__dirname, 'src/icons/'),
            ActionTypes: path.resolve(__dirname, 'src/redux/action-types.js'),
            Actions: path.resolve(__dirname, 'src/redux/actions/'),
            Api: path.resolve(__dirname, 'src/redux/actions/root-actions'),
            Spin: path.resolve(__dirname, 'src/components/Spin.js'),
            Error: path.resolve(__dirname, 'src/components/Error.js'),
            Config: path.resolve(__dirname, 'src/config.js'),
        }
    }
}

module.exports = webpackConfig
