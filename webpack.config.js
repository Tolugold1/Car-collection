const path = require("path")

module.exports = {
    entry: {
        app: "src/app.js"
    },
    output: {
        filename: "carIndex.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {text: /\.css$/, use: [
                "style-loader",
                "css-loader"
            ] },
            {test: /\.js$/, use: 'babel-loader',
            exclude: /node_modules/}
        ]
    }
}