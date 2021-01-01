const path = require("path");

module.exports = {
	entry: "./App/index.js",
	output: {
		path: path.resolve(__dirname, "Dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|jpeg)$/,
				use: {
					loader: "file-loader",
					options: {
						publicPath: (resourcePath, context) => {
							return path.relative(path.dirname(resourcePath), context) + "";
						},
						name: "[name].[ext]",
						outputPath: "img",
					},
				},
			},
			{
				test: /\.(ttf|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						publicPath: (resourcePath, context) => {
							return path.relative(path.dirname(resourcePath), context) + "";
						},
						name: "[name].[ext]",
						outputPath: "fonts",
					},
				},
			},
		],
	},
};
