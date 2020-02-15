module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    static: ['../../html/foo.html', '../../html/bar.html']
  },
  output: {
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
          'svgo-loader'
        ]
      },
      {
        test: /.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/[name].[ext]'
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
