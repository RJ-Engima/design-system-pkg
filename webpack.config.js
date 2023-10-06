const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

// console.log(deps["react-dom"], deps.react, "DEPS");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".jsx", ".js", ".json", ".css"],
    alias: {
      events: "events",
    },
    fallback: {
      fs: false,
      net: false,
      async_hooks: false,
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3010,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader", "svg-url-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css|s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dsmfe",
      filename: "remoteEntry.js",
        // exposes: {
        //   "./Button": "./src/components/buttons",
        // },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps.react,
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps["react-dom"],
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new NodePolyfillPlugin(),
  ],
};
