// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                throwIfNamespace: false, // defaults to true
              },
            },
          ],
        },
      ],
    },
  };