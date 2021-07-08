var connect = require('connect')
var http = require('http')
var vhost = require('vhost')

// create main app
var app = connect()

app.use(vhost('*.example.com', function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello ')
  console.dir(req.vhost.host)
  console.dir(req.vhost.hostname)
  console.dir(req.vhost.length)
  console.dir(req.vhost[0])
}))

app.listen(3000)