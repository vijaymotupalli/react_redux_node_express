import path from 'path';
import webpack from 'webpack';

export default{
    entry:['webpack-hot-middleware/client',path.join(__dirname,'/client/index.js')],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: path.join(__dirname,'client'),
                loader: ["react-hot-loader","babel-loader"]

            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }


}