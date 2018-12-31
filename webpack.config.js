const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//Finds and joins path to the public folder.
console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        // loader
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                    ]
                })
            }]
        },
        plugins: [CSSExtract],
        // source map
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        // Dev server
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
}


