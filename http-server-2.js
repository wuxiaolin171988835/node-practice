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
  } else if (url === '/users' && (method === 'GET' || method === 'POST')) {
    //简单请求cors
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify([{ name: 'tom', age: 20 }]))
  } else if (url === '/users' && method === 'OPTIONS') {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3001",
      "Access-Control-Allow-Headers": "X-Token,Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,PUT",
      "Access-Control-Allow-Credentials": 'true'
    })
    res.end()
  }


}).listen(3006)