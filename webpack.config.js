module.exports = {
    watch: true,
    entry: './src/yt_api_load.es6',
    output: {
        filename: 'build/yt_api_load.js',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};