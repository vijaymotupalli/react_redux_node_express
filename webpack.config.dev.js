import path from 'path';

export default{
    entry:path.join(__dirname,'/client/index.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: path.join(__dirname,'client'),
                loader: "babel-loader"

            },
            {
                test: /\.css$/,
                loader: 'style!css!sass?outputStyle=expanded',
            }
        ]
    }


}