const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const webpack = require('webpack');

const { version } = require('../../package.json');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  console.log('ENV VARIABLES:', {
    API_URL: process.env.API_URL,
    INTERNAL_CONFIG: process.env.INTERNAL_CONFIG,
    NODE_ENV: process.env.NODE_ENV,
    NX_APP_NAME: process.env.NX_APP_NAME,
    NX_CONFIG_ONE: process.env.NX_CONFIG_ONE,
    NX_CONFIG_THREE: process.env.NX_CONFIG_THREE,
    NX_CONFIG_TWO: process.env.NX_CONFIG_TWO,
    VERSION: process.env.VERSION ?? version,
  });

  config.plugins.push(
    new webpack.EnvironmentPlugin({
      API_URL: process.env.API_URL,
      INTERNAL_CONFIG: process.env.INTERNAL_CONFIG,
      NODE_ENV: process.env.NODE_ENV,
      NX_APP_NAME: process.env.NX_APP_NAME,
      NX_CONFIG_ONE: process.env.NX_CONFIG_ONE,
      NX_CONFIG_THREE: process.env.NX_CONFIG_THREE,
      NX_CONFIG_TWO: process.env.NX_CONFIG_TWO,
      VERSION: process.env.VERSION ?? version,
    }),
  );

  if (process.env['NODE_ENV'] !== 'production') {
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
