const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3001,
  mongoURL = 'mongodb://localhost/headphones',
  Headphone = require('./models/Headphone.js')

mongoose.connect(mongoURL, (err) => {
  console.log(err || "connected to mongodb...")
})

app.use(logger('dev'))
app.use(bodyParser.json())

//index
app.get('/headphones', (req, res) => {
  Headphone.find({}, function(err, headphones) {
    if(err) return console.log(err)
    res.send(headphones)
  })
})

// create
app.post('/headphones', (req, res) => {
  Headphone.create(req.body, (err, headphone) => {
    if(err) return console.log(err)
    res.json({success: true, message: 'headphone added', headphone})
  })
})

app.listen(PORT, (err) => {
  console.log(err || `server running on port ${PORT}`)
})
