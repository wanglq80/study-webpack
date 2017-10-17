##study-loader

第一步：通过npm安装 style-loader 和 css-loader

```bash
$ npm install --save-dev style-loader css-loader
```

第二步：修改配置文件

```javascript
//webpack.config.js
{
	//...
	module.exports = {
	  //...
	  module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',
	          'css-loader'
	        ]
	  	  }
	    ]
	  }
	  //...
	}
	//...
}
```

第三步：在src目录下新建style.css文件

```css
.hello {
	color: red;
}
```
第四步：在index.js中引入style.css文件

```javascript
import './style.css';
:
function component() {
	//...
	element.classList.add('hello');
	//...
}
```
第四步：在命令行执行一下命令

```bash
$ npm run build
```

