let express = require('express');
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

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

app.route('/name').get((req, res) => {
  res.json({ "name": `${req.query.first} ${req.query.last}` })
})






























module.exports = app;
