##study-plugin

第一步：通过npm安装 html-webpack-plugin 和 clean-webpack-plugin

```bash
$ npm install --save-dev html-webpack-plugin clean-webpack-plugin
```

第二步：修改配置文件(clean-webpack-plugin插件，在每次构建前会清理/dist文件夹，最终只生成用到的文件)

```javascript
//webapck.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	...
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	...
}
```

第三步：在命令行执行以下命令，将自动生成index.html文件，js文件打包后，会自动添加到index.html文件内

```bash
$ npm run webpack
```


