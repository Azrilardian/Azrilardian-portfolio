const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new miniCssExtractPlugin({
			filename: "./css/style.css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [miniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new terserPlugin(),
			new htmlWebpackPlugin({
				template: "./App/index.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new htmlWebpackPlugin({
				template: "./App/pages/home.html",
				filename: "./pages/home.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new htmlWebpackPlugin({
				template: "./App/pages/certificate.html",
				filename: "./pages/certificate.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new htmlWebpackPlugin({
				template: "./App/pages/portfolio.html",
				filename: "./pages/portfolio.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
		],
	},
});
