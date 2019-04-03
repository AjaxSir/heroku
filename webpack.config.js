module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/public/javascripts/intro.js',
	output: {
		path: __dirname + '/public/dist/js',
		filename: '[name].js'	
	},
	module:{
		rules: [
			{
				test:/(\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						preset: [
							"env"
						]
					}
				},
				exclude: path.resolve(__dirname, "node_modules"),
				include: path.resolve(__dirname, "/public")
			}
		]
	}
}