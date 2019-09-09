const bodyParser = require('body-parser')
const express = require('express')
const https = require('https')
const path = require('path')

const app = express()

app.use(bodyParser.json({ strict: false, limit: '5mb' }))
app.use(express.static(path.join(__dirname, '/dist')))
app.get('/', express.static(path.join(__dirname, '/dist/index.html')))
app.use('/favicon.ico', express.static(path.join(__dirname, '/public/favicon.ico')))

app.get('/list', (req, res) => {
  res.status(200).send([1,2,3])
})

app.listen(5005, () => {
  console.log('Node app is running on port', '5005')
})
