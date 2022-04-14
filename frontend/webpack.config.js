const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config({
  path: __dirname + "/.env",
});

const isDevelopment = process.env.NODE_ENV !== "production";

let mode = "development";
let target = "web";
let output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "dist"),
  assetModuleFilename: "images/[hash][ext][query]",
};
let optimization = {};
let htmlPluginConfig = {
  template: "./public/index.html",
};

if (!isDevelopment) {
  mode = "production";
  target = "browserslist";

  output = {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  };

  optimization = {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: "all",
          minSize: 0,
        },
      },
    },
  };

  htmlPluginConfig = {
    template: "./public/index.html",
    filename: "index.html",
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    },
  };
}

module.exports = {
  mode: mode,
  target: target,
  output: output,
  optimization: optimization,
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin(htmlPluginConfig),
    new HtmlWebpackPlugin({
      template: "./public/404.html",
      filename: "404.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_EMAILJS_SERVICE": JSON.stringify(
        process.env.REACT_APP_EMAILJS_SERVICE
      ),
      "process.env.REACT_APP_EMAILJS_TEMPLATE": JSON.stringify(
        process.env.REACT_APP_EMAILJS_TEMPLATE
      ),
      "process.env.REACT_APP_EMAILJS_USER": JSON.stringify(
        process.env.REACT_APP_EMAILJS_USER
      ),
    }),
  ].filter(Boolean),
  devServer: {
    static: {
      directory: "./dist",
    },
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: [path.resolve(process.cwd(), "src"), "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      process: "process/browser",
      "@components": path.resolve(__dirname, "/src/components/"),
      "@commons": path.resolve(__dirname, "/src/commons/"),
      "@context": path.resolve(__dirname, "/src/context"),
      "@images": path.resolve(__dirname, "/src/images"),
      "@utils": path.resolve(__dirname, "/src/utils"),
      "@hooks": path.resolve(__dirname, "/src/hooks/index.ts"),
      "@types": path.resolve(__dirname, "/src/types/index.ts"),
    },
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
};
