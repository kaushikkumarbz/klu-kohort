const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/home', function (req, res) {
    res.send('kaushik Kumar')
  })


app.listen(3000,()=>{
    console.log('listening on port 3000');
})
