
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/boo', function(req, res) {
  console.log('boo was called');
  res.send('Hi babe');
});

app.post('/data', function(req, res) {
  
   console.log(req.body);
   console.log(`request body: ${req.body}`);

  return res.send({
    name: 'basel',
    status:'babe'
  });
});

app.listen(port, ()=>{
  console.log(`Listening to post ${port}`)
});