const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'index_bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ], 
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }, 
                // {loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}
                ]
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              },
             {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
                 'file-loader',
               ],
             },    
        ], 
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ], 
}