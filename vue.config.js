/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-05-08 21:06:51
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 21:08:31
 */

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const portfinder = require("portfinder");
const isProduction = process.env.NODE_ENV === "production";
const externals = isProduction
  ? {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
    }
  : {};

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: !isProduction,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: require("./src/mock/mock-server.js"),
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       // plugins: [

  //       // ]
  //       postcssOptions: {
  //         config: resolve("postcss.config.js"),
  //       },
  //     },
  //   },
  // },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve("src/less/var.less")],
    },
  },
  configureWebpack: {
    name: "Weize vue Element",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
      extensions: [".js", ".json", ".vue", ".css", ".less"],
    },
    externals
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(isProduction, (config) => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
          vant: {
            name: "chunk-vant",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?vant(.*)/,
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
    });
    config.when(process.env.ENV === "analyzer", (config) => {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        .tap((options) => {
          options.push({
            analyzerPort: async () => {
              await portfinder.getPortPromise();
            },
          });
          return options;
        });
    });
  },
};
