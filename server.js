var http = require('http');
var fs = require('fs');
var path = require('path');

//create server object
http.createServer(function (req, res) {
  //Open a file on the server and return it's content:
  var filePath = setFilePath(req.url);
  var extname = path.extname(filePath);
  var contentType = setContentType(extname);
  fs.readFile(filePath, function(err,data) {
    res.writeHead(200, {'Content-Type': contentType});
    return res.end(data, 'utf-8');
  });
}).listen(8080);
console.log("server running on port 8080")

function setFilePath(url) {
  if (url == '/') {
    return 'public/html/index.html';
  }
  return 'public' + url;
}

function setContentType(extname) {
  var contentType = 'text/html';
  switch (extname) {
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.css':
          contentType = 'text/css';
          break;
      case '.png':
          contentType = 'image/png';
          break;
      case '.jpg':
          contentType = 'image/jpg';
          break;
      case '.jpeg':
          contentType = 'image/jpeg';
          break;
      case '.gif':
          contentType = 'image/gif';
          break;
      case '.svg':
          contentType = 'image/svg+xml';
          break;
  }
  return contentType;
}
