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
app.use(bodyParser.urlencoded({extended: false})); 

app.post('/data', (req,res) => {
  console.log(req.body);
  if (req.body.temperature && req.body.light) {
    data.temperature = req.body.temperature;
    data.light = req.body.light;
    data.time = new Date().toLocaleString();

    if (req.body.temperature > recordData.temperature)
      recordData.temperature = req.body.temperature;
    if (req.body.light > recordData.light)
      recordData.light = req.body.light;
  }
  res.end('received');
});

app.get('/data', (req, res) => {
  console.log(JSON.stringify(data));
  if (data.temperature && data.light) {
    res.send(JSON.stringify(data));
  }
  else {
    res
      .status(503)
      .send();
  }
});

app.get('/record', (req, res) => {
  console.log(JSON.stringify(recordData));
  if (recordData.temperature && recordData.light) {
    res.send(JSON.stringify(recordData));
  }
  else {
    res
      .status(503)
      .send();
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));

