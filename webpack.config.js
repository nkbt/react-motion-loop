'use strict';


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const COMPONENT_NAME = process.env.npm_package_config_component;
const pathTo = path.join.bind(null, process.cwd());


if (!COMPONENT_NAME) {
  throw Error('<package.json>.config.component name is required');
}


const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-motion': 'ReactMotion'
};


const loaders = [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [path.resolve('src/example')]
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.resolve('src')],
    options: {
      babelrc: false,
      presets: [
        ['es2015', {modules: false}],
        'react'
      ],
      plugins: [
        'transform-object-rest-spread',
        'transform-class-properties'
      ],
      env: {
        production: {
          plugins: [
            ['transform-react-remove-prop-types', {removeImport: true}]
          ]
        }
      }
    }
  }
];


const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name)
});


const resolve = {};
const stats = {colors: true};


const assets = [
  'https://unpkg.com/react/dist/react.min.js',
  'https://unpkg.com/react-dom/dist/react-dom.min.js',
  'https://unpkg.com/react-motion/build/react-motion.js'
];


const development = {
  devtool: '#source-map',

  entry: [
    pathTo('src', 'example', 'Example.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    definePlugin,
    new HtmlWebpackIncludeAssetsPlugin({
      assets,
      append: false
    })
  ],
  module: {
    loaders
  },
  resolve,
  stats,
  externals,
  devServer: {
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


const ghPages = {
  devtool: '#source-map',
  entry: pathTo('src', 'example', 'Example.js'),
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    definePlugin,
    new HtmlWebpackIncludeAssetsPlugin({
      assets: assets.concat(['styles.css']),
      append: false
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      loaders[1],
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  resolve,
  stats,
  externals
};


const dist = {
  devtool: false,
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [definePlugin],
  module: {loaders},
  resolve,
  stats,
  externals
};


const min = {
  devtool: false,
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.min.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    definePlugin,
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  module: {loaders},
  resolve,
  stats,
  externals
};


const configs = {development, ghPages, dist, min};
const build = process.env.BUILD || process.env.NODE_ENV || 'development';


module.exports = configs[build];
