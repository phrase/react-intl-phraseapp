module.exports = {
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    mode: 'production',
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
    entry: { 
        index: './src/index.ts',
        FormattedMessage: './src/FormattedMessage.tsx',
        functions: './src/functions.ts',
        injectIntl: './src/injectIntl.tsx',
        useIntl: './src/useIntl.tsx',
        useSSRIntl: './src/useSSRIntl.tsx',
        WrappedComponentProps: './src/WrappedComponentProps.ts',
     },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        libraryTarget: "umd",
        globalObject: 'this',
        library: 'react-intl-phraseapp'
    }
};
