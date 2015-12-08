var path = require("path");
var fs = require("fs");
var autoprefixer = require('autoprefixer');
var postcss = require('precss');


module.exports = {

    entry: fs.readdirSync(path.join(__dirname, "./lambdas"))
        .filter(filename => /\.js$/.test(filename))
        .map(filename => {
            var entry = {};
            entry[filename.replace(".js", "")] = path.join(
                __dirname,
                "./lambdas",
                filename
            );
            return entry;
        })
        .reduce((finalObject, entry) => Object.assign(finalObject, entry), {}),

    output: {
        path: path.join(__dirname, "dist"),
        library: "[name]",
        libraryTarget: "commonjs2",
        filename: "[name].js"
    },

    target: "node",

    module: {

        loaders: [

            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: JSON.parse(
                    fs.readFileSync(path.join(__dirname, ".babelrc"), {encoding: "utf8"})
                )
            },

            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};