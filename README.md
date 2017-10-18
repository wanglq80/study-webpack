## study-webpack

第一步：在github创建远程仓库

第二步：通过git clone克隆远程仓库

```bash
$ git clone git@github.com:wanglq80/study-webpack.git
```

第三步：cd到项目目录，如果新建项目没有package.json文件，通过npm初始化一个package.json文件；如果新项目中有package.json文件，直接第六步，执行第二条bash命令

```bash
$ cd study-webpack
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

```bash
$ npm install --save-dev
```

第七步：

#简单通过CLI执行webpack（大多数项目需要复杂的设置，使用这种方式运行webpack不够灵活）

```bash
$ ./node_moduls/.bin/webpack src/index.js dist/bundle.js
```

#使用一个配置文件（相比第一种方式，具有更多的灵活性）

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
然后，通过CLI执行webpack

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







