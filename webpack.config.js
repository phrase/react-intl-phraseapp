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
            {
                test: /examples/,
                include() {
                    return false
                }
            },
        ]
    },
    externals: {
        "react-intl": {
            root: 'ReactIntl',
            commonjs2: 'react-intl',
            commonjs: 'react-intl',
            amd: 'react-intl'
        },
        "react": {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },
    entry: [
        './src/index.ts'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        libraryTarget: "umd",
        globalObject: 'this',
        library: 'react-intl-phraseapp'
    }
};
