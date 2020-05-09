let mix = require("laravel-mix");
mix.setPublicPath("public/build");
mix.sass("vue/assets/sass/gallery.scss", "public/build/sass");

mix.js("vue/js/artgallery.js", "public/build");
mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "vue"),
      "@resources": path.resolve(__dirname, "resources")
    }
  },
  output: {
    filename: "[name].js",
    chunkFilename: "js/[name].artgallery.js",
    publicPath: "/build/"
  }
});
