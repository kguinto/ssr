var path = require('path');

module.exports = { 
  mode: 'development',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?/, use: 'babel-loader'
    }]
  }
};

