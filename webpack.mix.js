let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath("public/build");
mix.sass("vue/assets/sass/gallery.scss", "public/build/sass");
mix.options({
  extractVueStyles: true
});
mix.webpackConfig({
  output: {
    filename: "[name].js",
    chunkFilename: "js/[name].artgallery.js",
    publicPath: "/build/"
  }
});

mix.js("vue/main.js", "public/build");
mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "vue"),
      "@resources": path.resolve(__dirname, "resources")
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: mix.config.babel()
          }
        ]
      }
    ]
  }
});

//chunk file configurations for dynamic loads

mix.version();
mix.sourceMaps();