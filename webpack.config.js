const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './react/app.jsx'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		chunkFilename: '[name].js',
        publicPath:'/dist'
	},
    resolve: {
        extensions:[".js",".jsx"],
        alias:{
          '@comp': path.resolve(__dirname, './components'),
          '@page': path.resolve(__dirname, './pages'),
          '@modules': path.resolve(__dirname, './modules'),
          '@DB': path.resolve(__dirname, './DB'),
        }
    },
	externals: {
		// react: 'React',
		// 'react-dom': 'ReactDOM',
		// 'react-router-dom': 'ReactRouterDOM',
		// echarts:'echarts',
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
			                presets: ["env", "react"]
			            }
					},
				],
			},
			{
				test: /\.(css|scss)/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'img/[name].[hash:7].[ext]',
						},
					},
				],
			},
		],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
        // new HtmlWebpackPlugin({
        //   template: './index.html',
        // }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
			__LOCAL__: false,
			__TEST__: false,
			__PRO__: true,
		}),
	],
}
