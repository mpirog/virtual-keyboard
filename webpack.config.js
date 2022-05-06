module.exports = {
    entry: './src/scripts/script.js',
    output: {
        'filename': 'script.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                "style-loader",
                "css-loader",
                "sass-loader",
                ], 
            }
        ]
    }
}