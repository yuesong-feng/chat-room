const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method == 'GET') {
    res.end('欢迎加入聊天室!\n');
  }
  else if (req.method == 'POST') {
    let message = ""
    req.on('data', data => {
      message += data
    })
    req.on('end', () => {
      res.end(message)
    })
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

