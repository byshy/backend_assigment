
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log('boo was called');
  res.send('<h1> HELLO WORLD </h1>');
});

app.get('/query', function(req, res) {
  let queryData = req.query;
  console.log(queryData);
  res.send(queryData);
});

app.get('/greeting/:name', function(req, res) {
  let name = req.params.name;
  console.log(name);
  res.send({message: `hello ${name}`});
});

app.post('/data', function(req, res) {
  
   console.log(req.body);
   console.log(`request body: ${req.body}`);

  return res.send({
    name: 'basel',
    message: req.body
  });
});

app.listen(port, ()=>{
  console.log(`Listening to post ${port}`)
});