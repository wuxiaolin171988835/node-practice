const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req, res) => {
  const { url, method } = req
  if (url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      res.statusCode = 200
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify([{ name: 'tom', age: 20 }]))
  } else if (req.headers.accept.indexOf('image/*') != -1 && method === 'GET') {
    fs.createReadStream('.' + url).pipe(res)
  }
}).listen(3001)