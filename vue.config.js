const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.ProvidePlugin({
          process: 'process/browser',
      }),
   ],resolve:{fallback: { "crypto": require.resolve("crypto-browserify"),"stream": require.resolve("stream-browserify"),"http": require.resolve("stream-http")  }}

  }

})






