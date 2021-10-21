const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/certs-volume/key.pem'),
  cert: fs.readFileSync('/etc/certs-volume/cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);