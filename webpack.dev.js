const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./App/index.html",
		}),
	],
});
