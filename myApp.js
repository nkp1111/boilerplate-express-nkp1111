let express = require('express');
require('dotenv').config()
let app = express();

console.log("Hello World")

// app.get('/', function(req, res) {
//   res.send('Hello Express');
// })

const absolutePath = __dirname + '/views/index.html'
app.get('/', function (req, res) {
  res.sendFile(absolutePath)
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ "message": "HELLO JSON" })
  }
  res.json({ "message": "Hello json" })
})

































module.exports = app;
