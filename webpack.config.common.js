console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackConfig = {
	resolve: { //重定向路径
		alias: {
			'@actions': path.resolve(__dirname, 'src/app/actions'),
			'@components': path.resolve(__dirname, 'src/app/components'),
			'@constants': path.resolve(__dirname, 'src/app/constants'),
			'@models': path.resolve(__dirname, 'src/app/models'),
			'@selectors': path.resolve(__dirname, 'src/app/selectors'),
			'@shared': path.resolve(__dirname, 'src/app/shared'),
			'@utils': path.resolve(__dirname, 'src/app/utils'),
		}
	},
	entry: {
		vendor: ['./src/polyfills.ts', './src/vendor.ts'],
		main: './src/main.ts'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash:8].js',
		/**
		 * html引用路径
		 */
		publicPath: '/'
	},
	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.ts$/,
				use:process.env.NODE_ENV === 'development' 
					?['awesome-typescript-loader', 'angular2-router-loader', 'angular2-template-loader']
					:['@ngtools/webpack']
			}, 
			{
				test: /\.(scss|css)$/,
				use: ['raw-loader', 'sass-loader'],
			},
			{
				test: /\.scss$/,
				exclude: [path.resolve(__dirname, '/node_modules/'), path.resolve(__dirname, 'src/app')],
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader'
			}
		]
	}

}
const defaultConfig = {
	devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
	output: {
		filename: '[name].[hash:8].bundle.js',
		sourceMapFilename: '[name].[hash:8].bundle.map',
		chunkFilename: '[id].[hash:8].chunk.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	devServer: {
		contentBase: './',
		port: process.env.NODE_ENV === 'development' ? 8080 : 9090,
		inline: true,
		stats: 'errors-only',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 100,
			poll: 500
		}
	},
	node: {
		global: true,
		crypto: 'empty',
		__dirname: true,
		__filename: true,
		Buffer: false,
		clearImmediate: false,
		setImmediate: false
	}
};
module.exports = {
	commonConfig: webpackMerge(
		webpackConfig,
		defaultConfig
	)
};