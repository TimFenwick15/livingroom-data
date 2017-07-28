const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const data = {
  temperature: 0,
  light: 0
};
const recordData = {
  temperature: 0,
  light: 0
};

app.use(express.static('./web'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.post('/data', (req,res) => {
  console.log(req.body);
  data.temperature = req.body.temperature;
  data.light = req.body.light;
  res.end('received');

  if (req.body.temperature > recordData.temperature)
    recordData.temperature = req.body.temperature;
  if (req.body.light > recordData.light)
    recordData.light = req.body.light;
});


app.get('/data', (req, res) => {
  console.log(JSON.stringify(data));
  res.send(JSON.stringify(data));
});


app.get('/record', (req, res) => {
  console.log(JSON.stringify(recordData));
  res.send(JSON.stringify(recordData));
});


app.listen(80, () => console.log('Listening'));

