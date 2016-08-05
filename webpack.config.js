var webpack = require('webpack')
var poststylus = require('poststylus')

module.exports = {
  entry: {
    en: './index.jsx',
    cn: './cn/index.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css!stylus'
      }
    ]
  },
  stylus: {
    use: [poststylus(['postcss-short', 'postcss-sorting', 'postcss-cssnext', 'rucksack-css'])]
  },
  clearBeforeBuild: true
}
