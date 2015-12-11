var path = require("path");
var fs = require("fs");

module.exports = {

    entry: "./app/components/Main.js",

    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: JSON.parse(
                    fs.readFileSync(path.join(__dirname, ".babelrc"), {encoding: "utf8"})
                )
            }
        ]
    }
};