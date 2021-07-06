const path = require('path');
const webpack = require('webpack');
const { version } = require('./package');

module.exports = {
  version,

  title: 'UI Kit',

  styleguideDir: `docs/v${version}`,

  components: 'src/components/**/[A-Z]*.tsx',

  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,

  require: [
    path.join(__dirname, 'src/styles/main.scss')
  ],

  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {}
      })
    ]
  }
}