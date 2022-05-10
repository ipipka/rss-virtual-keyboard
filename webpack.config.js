const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const devtool = isProduction ? false : 'eval-source-map';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'), // absolute path
      filename: '[name].[contenthash].bundle.js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true
    },

    devtool,

    devServer: {
      hot: true,
      open: true,
      // port: 8080,
      // compress: true,
    },

    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   loader: 'babel-loader',
        //   exclude: 'node_modules'
        // },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',

          // type: isProduction ? 'asset' : 'asset/resource',
          // В продакшен режиме изображения размером до 8кб будут инлайнится в код
          // В режиме разработки все изображения будут помещаться в dist/assets
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Данный html будет использован как шаблон
      }),

      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }),

      new ESLintPlugin(),
    ]
  };
};
