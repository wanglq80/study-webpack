# study-webpack
学习webpack

#第一步：在github创建远程仓库

#第二步：通过git clone克隆远程仓库

#第三步：cd到项目目录，通过npm初始化一个package.json文件
#npm init -y

#第四步：在项目目录安装webpack
#npm install --save-dev webpack

#第五步：创建目录结构和内容

#第六步：通过npm安装项目依赖

#第七步：
####通过CLI执行webpack
#./node_moduls/.bin/webpack src/index.js dist/bundle.js

####使用一个配置文件
#./node_modules/.bin/webpack --config webpack.config.js

####通过在package.json中配置scripts,
#{
#   ...
#	"scripts": {
#      "build": "webpack"	
#    },
#   ...
#}
#就可以执行 npm run build 命令来执行webpack了





