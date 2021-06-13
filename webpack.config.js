const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    //main process
    {
      mode: 'development',
      entry: './client/electron.js',
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.js$/,
          include: /client/,
          exclude: /node_modules/,
        }]
      },
      output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
      }
    },
    //render process
    {
        mode: 'development',
        entry: './client/App.jsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { 
          rules: [
            {
              test: /\.js(x?)$/,
              include: /client/,
              exclude: /node_modules/,
              use: { 
                loader: 'babel-loader',
                options: {
                  presets: [[
                    '@babel/preset-env', {
                      targets:{
                        esmodules: true
                      }
                    }],
                    '@babel/preset-react']
                }
              }
            }
          ]
        },
        {
          test: [/\.s[ac]ss$/i, /\.css$/i],
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compile Sass to CSS
            'sass-loader',
          ],
        },
        output: {
          path: __dirname + '/dist',
          filename: 'react.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './client/index.html'
          })
        ]
    }
  ];
  
  