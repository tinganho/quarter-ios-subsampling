
var express = require('express')
  , http = require('http');

var app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/'));

http.createServer(app).listen(app.get('port'), function() {
  console.log('[%s] Express app listening on port ' + app.get('port'), process.pid);
});
