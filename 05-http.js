const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  console.log('来了一个请求');
  const { url, method } = req
  if (url === "/" && method === 'GET') {
    // console.log('path.resolve:', path.resolve('./index.html'));
    // console.log(req);
    fs.readFile(path.resolve('./index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500-Internal Server Error')
      }
      res.statusCode = 200;//请求成功
      res.setHeader('Content-type', 'text/html');
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    //接口编写
    res.statusCode = 200;//请求成功
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify([{
      name: 'tom',
      age: 20
    }]))
  }

}).listen(3012)