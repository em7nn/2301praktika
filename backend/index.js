const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World!')
  })

  app.put('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  mongoose.connect('mongodb+srv://<username>:<password>@cluster0.omgxhal.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})