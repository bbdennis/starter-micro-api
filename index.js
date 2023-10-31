var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {
    if (req.method == 'POST') {
      console.log(`Just got a POST request at ${req.url}!`)

      var body = '';
      req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) request.connection.destroy();
      });

      req.on('end', function () {
        var post = qs.parse(body);
        console.log(post);
      });
    } else if (req.method == 'GET') {
      console.log(`Just got a GET request at ${req.url}!`)
    }
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
