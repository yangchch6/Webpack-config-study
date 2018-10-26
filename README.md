#### 核心概念
- Entry：入口，Webpack执行构建的第一步将从Entry 开始，可抽象成输入。
- Module：模块，在Webpack 里一切皆模块，一个模块对应一个文件。Webpack 会从
配置的Entry 开始递归找出所有依赖的模块。
- Chunk：代码块，一个Chunk 由多个模块组合而成，用于代码合并与分割。
- Loader：模块转换器，用于将模块的原内容按照需求转换成新内容。
- Plugin：扩展插件，在Webpack 构建流程中的特定时机注入扩展逻辑，来改变构建结
果或做我们想要的事情。
- Output：输出结果，在Webpack 经过一系列处理并得出最终想要的代码后输出结果。

#### 区分构建环境
- 配置文件：
    - webpack.dev.js 
    - webpack.prod.js 
    - webpack.common.js

- 使用webpack-merge拼接开发环境和生产环境

#### Loader 模块转换器
- 使用PostCSS处理.less文件时，Loader的处理顺序：
```
rules:[
    {
        test: /\.less$/,
        use: [
            "style-loader", 
            "css-loader", 
            "less-loader",
            "postcss-loader"
        ]
    }
]
```   

- 使用PostCSS处理.css文件时，Loader的处理顺序：  

```
rules:[
    {
        test: /\.css$/,
        use: [
            "style-loader", 
            "css-loader", 
            "postcss-loader"
        ]
    }
]
```

- 注意：
1. Loader是倒序执行的
2. 每个Loader可以使用 '?' 传参，如css-loader?minimize中的minimize告诉css-loader要开启CSS压缩

#### Plugin 扩展插件
- 常用的Plugin：
    - copy-webpack-plugin：将无需编译的静态资源复制到目标目录
    - html-webpack-plugin：编译html模板（pug/hbs/ejs…）
    - clean-webpack-plugin：清空指定目标目录资源，比如dist
    - mini-css-extract-plugin：独立css资源，压缩。extract-text-css-plugin 用于 和webpack 3.x 结合