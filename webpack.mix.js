const { mix } = require('laravel-mix')
const assetsFolder = './resources/assets'
const distFolder = './dist'
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

mix
  .js(`${assetsFolder}/scripts/main.js`, `${distFolder}/scripts/main.js`)
  .js(`${assetsFolder}/scripts/customizer.js`, `${distFolder}/scripts/customizer.js`)
  .sass(`${assetsFolder}/styles/style.scss`, `${distFolder}/styles/main.css`)
  .webpackConfig({
    plugins: [
      new ImageminPlugin({
        //            disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '95-100'
        },
        test: /\.(jpe?g|png|gif|svg)$/i
      })
    ]
  })
  .copy('resources/assets/images', `${distFolder}/images`, false)

if (mix.inProduction()) {
  mix.version()
} else {
  mix
    .webpackConfig({
      devtool: 'inline-source-map',
      plugins: [
        new BrowserSyncPlugin({
          proxy: 'monkey.lndo.site',
          port: 8000,
          watch: ['**/*.php, **/*.twig, resources/assets/scripts/**/*.js, resources/assets/scripts/**/*.scss'],
          reloadDelay: 2000
        }),
        new FriendlyErrorsWebpackPlugin()
      ]
    })
    .sourceMaps()
}
