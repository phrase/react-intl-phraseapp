module.exports = {
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ]
    },
    externals: [
        "react-intl",
        {
            "react": {
                root: "React",
                commonjs: "react",
                commonjs2: "react",
                amd: "react"
            }
        }
    ],
    entry: './src/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'react-intl-phraseapp.js',
        libraryTarget: "umd",
        library: 'react-intl-phraseapp'
    }
};