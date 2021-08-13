var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});
// tes
app.listen(4000);