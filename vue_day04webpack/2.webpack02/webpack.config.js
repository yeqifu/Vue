const path = require('path')

module.exports={
  //入口，可以是字符串/数组/对象
  entry: './src/main.js',
  //出口，通常是一个对象，里面至少包含path和filename
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}