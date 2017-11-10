const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('./web'));
app.use(bodyParser.urlencoded({extended: false})); 

const dbFile = 'mydb.db'
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const queries = {
  createData: 'CREATE TABLE data (name TEXT, value INTEGER, units TEXT, min INTEGER, max INTEGER);',
  insertData:
    'INSERT INTO data(name, value, units, min, max) VALUES("temperature",0,"&deg;C",15,35),("light",0,"light",15,35),("time","",;',
  updateTemperature: temp => `UPDATE data SET value=${temp} WHERE name="temperature";`,
  updateLight: light => `UPDATE data SET value=${light} WHERE name="light";`,
  updateTime: time => `UPDATE data SET value=${time} WHERE name="time";`,
  selectData: 'SELECT * FROM data;',
}

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/html')
  res.send(
    `<html><link rel='stylesheet' href='style.css'/></head><body><div id="data"></div>
      <script src="common.js"></script>
      <script src="models.js"></script>
      <script src="views.js"></script>
      <script src="app.js"></script>
    </body></html>`
  )
})

app.post('/data', (req,res) => {
  console.log(req.body);
  if (req.body.temperature && req.body.light) {
    db.run(queries.updateTemperature(req.body.temperature), updateErr => {
      if (updateErr)
        console.error(updateErr)
    })
    db.run(queries.updateLight(req.body.light), updateErr => {
      if (updateErr)
        console.error(updateErr)
    })
    res.end('received');
  }
});

app.get('/data', (req, res) => {
  db.all(queries.selectData, (selectErr, rows) => {
    if (!selectErr) {
      console.log(rows)
      res.send(JSON.stringify(rows));
    }
    else {
      res
        .status(503)
        .send();
    }
  })
});

// db.run vs db.exec. We used another for safety
db.on('open', function() {
  db.all(queries.selectData, (selectErr, rows) => {
    if (selectErr) {
      db.run(queries.createData, createErr => {
        if (createErr)
          console.error(createErr)
        db.run(queries.insertData, insertErr => {
          if (insertErr)
            console.error(insertErr)
        })
      })
    }
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Listening on ${port}`));
  })
})
