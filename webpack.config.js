module.exports = {
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "ts-loader"
                ]
            },
        ]
    },
    externals: [
        "react-intl",
        "react"
    ],
    entry: [
        './src/index.ts'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'react-intl-phraseapp.js',
        libraryTarget: "umd",
        library: 'react-intl-phraseapp'
    }
};
