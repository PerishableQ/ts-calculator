const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/app.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(s*)css$/,
				use: [miniCss.loader, "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new miniCss({
			filename: "styles.css"
		})
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "build")
		},
		compress: true,
		port: 8000
	},
	performance: {
		hints: false,
		maxAssetSize: 512000
	}
};
