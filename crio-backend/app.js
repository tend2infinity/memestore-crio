const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 8081


mongoose.connect('mongodb://localhost/memedb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected to the database")
});

require('./model/memedb')

app.use(express.json())
app.use(require('./routes'))

app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`)
  })