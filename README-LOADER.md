##study-loader

第一步：通过npm安装 style-loader/css-loader/file-loader/csv-loader/xml-loader

```bash
$ npm install --save-dev style-loader css-loader file-loader csv-loader xml-loader
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
	  	  },
	  	  {
		    test: /\.(png|svg|jpg|gif)$/,
		    use: [
		      'file-loader'
		    ]
		  },
		  {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
		    use: [
		     'file-loader'
			]
		  },
	      {
	        test: /\.(csv|tsv)$/,
	        use: [
	          'csv-loader'
	        ]
	      },
	      {
	        test: /\.xml$/,
	        use: [
	          'xml-loader'
	        ]
	      }
	    ]
	  }
	  //...
	}
	//...
}
```

第三步：在src目录下新建style.css文件/icon.png文件/woff、woff2文件/data.xml文件

```css
.hello {
	color: red;
}
```

第四步：在index.js中引入style.css/icon.png/data.xml文件

```javascript
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
:
function component() {
	//...
	element.classList.add('hello');

	// 将图像添加到我们现有的 div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
	//...
}
```
第四步：在命令行执行一下命令

```bash
$ npm run build
```

