## study-webpack

第一步：在github创建远程仓库

第二步：通过git clone克隆远程仓库

第三步：cd到项目目录，通过npm初始化一个package.json文件

```bash
$ npm init -y
```

第四步：在项目目录安装webpack

```bash
$ npm install --save-dev webpack
```

第五步：创建目录结构和内容

第六步：通过npm安装项目依赖

```bash
$ npm install --save-dev <package>
```

第七步：

#通过CLI执行webpack

```bash
$ ./node_moduls/.bin/webpack src/index.js dist/bundle.js
```

#使用一个配置文件

```javascript
//webpack.config.js
module.exports = {
	entry: './src/index.js',
	output: {
	  filename: 'bundle.js',
	  path: path.resolve(__dirname, 'dist')
    }
}
```
然后，通过CLI执行

```bash
./node_modules/.bin/webpack --config webpack.config.js
```

#通过在package.json中配置scripts

```javascript
//package.json
{
   // ...
	"scripts": {
      "build": "webpack"	
    },
   // ...
}
```

然后，在CLI通过以下命令，来执行webpack

```bash
$ npm run build
```







