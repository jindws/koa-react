const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry:{
    app:[
      './src/index.js'
    ]
  },
  output: {
      path: path.resolve(__dirname,''),
      filename: '[name].js',
  },
  resolve: {
      extensions:[".js"],
  },
  target: 'node',
  externals: nodeModules,
  context: __dirname,
  node: {
      console: true,
      global: true,
      process: true,
      Buffer: true,
      __filename: true,
      __dirname: true,
      setImmediate: true,
      // fs: true,
      path:true,
  },
  module:{
    rules: [
      {
          test: /\.js/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          options: {
              presets: ['stage-0']
          }
      },
      {
          test: /\.html/,
          loader: 'file-loader'
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        },
    }),
  ]
}
