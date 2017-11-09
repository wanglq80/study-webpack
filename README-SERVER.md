##建立开发环境

第一步：安装webpack-dev-server

```bash
$ npm install --save-dev webpack-dev-server
```

第二步：修改配置文件，告诉开发服务器，在哪里查找文件

```javascript
...
module.exports = {
	...
	devServer: {
		contentBase: './dist'
	},
	...
}
```

第三步：修改package.json文件，添加一个script脚本

```javascript
{
	...
	"scripts": {
		...
		"start": "webpack-dev-server --open",
		...
	}
	...
}
```

现在，我们可以在命令行中运行 npm start，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码

```bash
$ npm start
```

