module.exports = {
    // other configurations...
    devtool: 'source-map', // ensure source maps are generated for your own code
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [
            /node_modules\/cheerio/,
            /node_modules\/parse5/,
          ],
        },
      ],
    },
  };
  