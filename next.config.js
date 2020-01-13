const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
          // url: false, // This fixed my problem
        },
      },
    })
    return config
  },
})