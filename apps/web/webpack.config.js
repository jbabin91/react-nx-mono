const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const webpack = require('webpack');

const { version } = require('../../package.json');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  console.log('VERSION:', process.env.VERSION ?? version);
  console.log('NODE_ENV:', process.env.NODE_ENV);

  config.plugins.push(
    new webpack.EnvironmentPlugin({
      VERSION: process.env.VERSION ?? version,
    }),
  );

  if (process.env['NODE_ENV'] !== 'production') {
    console.log('API_URL:', process.env.API_URL);
    config.devServer = {
      ...config.devServer,
      proxy: {
        '/api': {
          changeOrigin: true,
          debug: true,
          pathRewrite: {
            '^/api': process.env.API_URL?.includes('localhost') ? '' : '/api',
          },
          secure: !process.env.API_URL?.includes('localhost'),
          target: process.env.API_URL ?? 'http://localhost:3333',
        },
      },
    };
  }

  return config;
});
