if (typeof window === 'undefined') {
  global.window = {}
}

const fs = require('fs');
const path = require('path')
const express = require('express');
const {renderToString} = require('react-dom/server');
const SSR = require('../dist/search-server');
const templatePath = path.join(__dirname, '../dist/search.html')
const template = fs.readFileSync(templatePath, 'utf-8');
const data = require('./data.json')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

app.get('/search', (req, res) => {
  const htmlString = renderToString(SSR)
  res.status(200).send(renderMarkUp(htmlString))
})

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT)
})


const renderMarkUp = (str) => {
  const dataStr = JSON.stringify(data)
  return template.replace('<!--HTML_PLACEHOLDER-->', str).replace('<!--INITIAL_DATA_PLACEHOLDER-->', '<script>window.___initialData='+dataStr+'</script>');
}
