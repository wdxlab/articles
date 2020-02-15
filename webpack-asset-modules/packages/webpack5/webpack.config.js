module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    static: ['../../html/foo.html', '../../html/bar.html']
  },
  output: {
    publicPath: 'dist/',
    assetModuleFilename: 'static/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192
          }
        },
        use: 'svgo-loader'
      },
      {
        test: /.html$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  experiments: {
    asset: true
  }
};
