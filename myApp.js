let express = require('express');
require('dotenv').config()
let app = express();

app.use('/', (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

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

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ "time": req.time })
})

app.get('/:word/echo', (req, res) => {
  res.json({ "echo": req.params.word })
})































module.exports = app;
