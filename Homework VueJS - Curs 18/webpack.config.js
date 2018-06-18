var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


var config = {
    context: __dirname + '/src', // `__dirname` is root of project and `src` is source
    module: {
        rules: [{
            test: /\.(vue)$/,
            loader: 'vue-loader'
        },{
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }]
    },
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: ['style-loader', 'css-loader'] // load CSS files
    //     }]
    // },
    entry: ['./js/main.js'],
    output: {
        path: __dirname + '/dist', // `dist` is the destination
        filename: 'main.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};

      

module.exports = config;