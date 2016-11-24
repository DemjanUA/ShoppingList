module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    "presets": ["es2015", "es2016", "es2017","stage-1", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf$/,  
                loader: "file-loader"
            },
            {
                test: /\.eot$/,  
                loader: "file-loader"
            },
            {
                test: /\.svg$/,  
                loader: "file-loader"
            }
        ] 
    }
};