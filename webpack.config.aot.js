process.env.NODE_ENV = 'production';
const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ngtools = require('@ngtools/webpack');

const commonConfig = require('./webpack.config.common').commonConfig;

let webpackConfig = {
	plugins: [
		new ExtractTextPlugin({
			filename: 'initial.[hash:8].css',
			allChunks: true
		}),
		/**
		 * 输出html
		 */
		new HtmlWebpackPlugin({
			template: 'src/static/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		/**
		 * 生产环境
		 */
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		}),
		/**
		 * 优化
		 * 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor']
		}),
		/**
		 * 压缩同时转移静态文件
		 */
		new CopyWebpackPlugin([{
			from: 'src/static',
			to: '',
			toType: 'file'
		}, ]),
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig.json',
		}),
		/**
		 * 报错继续运行2.0弃用NoErrorsPlugin，改用NoEmitOnErrorsPlugin
		 */
		new webpack.NoEmitOnErrorsPlugin(),
		/**
		 * 优化
		 * webPack 提供了内建插件，直接配置以下代码即可压缩代码
		 */
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false, // remove all comments（没有注释）
			},
			compress: {
				warnings: false
			}
		})
	]
};
module.exports = webpackMerge(
	commonConfig,
	webpackConfig
);