const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// MAIN PROCESS
module.exports = {
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
};    

<<<<<<< HEAD
module.exports = [
    //main process
    {
      mode: 'development',
      //change entry point to main/index.js?
      //add second entry point somehow for renderer process (renderer/index.js)
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
        entry: './client/react.jsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { rules: [{
          test: /\.js(x?)$/,
          include: /client/,
          use: { loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }}
        }] },
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
=======
>>>>>>> d6ec0b50ad75bcc47d5911cfabcdd15fa58ea6da
  
  