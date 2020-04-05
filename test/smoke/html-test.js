const glob = require('glob-all');

describe('checking generated file exisits', () => {
  it('should generate html files', (done) => {
    // 读取检测文件
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html'
    ])

    if (files.length > 0) {
      done()
    } else {
      throw new Error('no html files found')
    }
  });
})