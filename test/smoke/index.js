const path = require('path');
const webpack = require('webpack');
// rm -rf 包
const rimraf = require('rimraf');
const Mocha = require('mocha')

// 变更 Node.js 进程的当前工作目录，如：执行冒烟测试 进入所在smoke 下的template目录
process.chdir(path.join(__dirname, 'template'));

const mocha = new Mocha({
  timeout: '10000ms'
})

// 先删除template/dist目录
rimraf('./dist', () => {
  // 构建webpack配置文件
  const prodConfig = require('../../lib/webpack.prod')

  // 执行指定的webpack配置文件
  webpack(prodConfig, (err, status) => {
    // 错误捕获
    if (err) {
      console.error(err)
      process.exit(2)
    }

    // 打印构建状态
    console.log(status.toString({
      colors: true,
      modules: true,
      children: true
    }))

    // webpack 构建完成后，执行测试用例
    console.log('webpack build success, begin run test')

    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))

    mocha.run()
  })
})
