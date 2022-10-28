


/* eslint-env node */
var path = require('path');
var fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = {
  mode: 'production',
  context: __dirname,
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
        extractComments: false,
      }),
    ]},
  entry:'./public/DoesNotExist.ts',
  output: {
    path: path.resolve(__dirname, 'public-built'),
    filename: `[name]-[contenthash].built.js`,
  },
  resolve: {
    fallback: {
      //webpack < 5 used to include polyfills for node.js core modules by default.
      // The required modules are node libraries we use. false mean we don't use that node library.
      fs: false,
      https: false,
      http: false,
      timers: false,
      util: false,
      process: false,
      querystring: false,
      events: false,
      path: false,
      crypto: false,
      zlib: false,
      stream: false,
      buffer: false,
      url: false,
      vm: false,
      os: false,
      assert: false,
      module: false,
      constants: false,
      worker_threads: false,
      child_process: false,
      tty: false,
    }
  },
  watch: process.env.NODE_ENV !== 'production',
  
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: [path.resolve('./public')],
        use: 'raw-loader',
      },
      {
        test: /.node$/,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [],
            },
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
            }
          },
        ],
      },
    ],
  },
  devServer: process.env.NODE_ENV === 'development'? {
    publicPath: '/public/',
    stats: hasAllStatsArg
      ? Object.assign({colors: true}, sharedStatsConfig)
      : {
          all: false,
          modules: true,
          maxModules: 0,
          timings: true,
          hash: true,
          errors: true,
          warnings: true,
          moduleTrace: true,
        },
  }: undefined,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [
        __filename, 
        path.resolve(__filename, '../webpack.config.js'),
      ],
    }
  }
};