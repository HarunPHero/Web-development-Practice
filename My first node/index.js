const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hi Jonkar!')
  })
app.get('/users', (req, res) => {
    res.send('Here are my users')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })