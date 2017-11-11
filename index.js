const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('./web'));
app.use(bodyParser.urlencoded({extended: false})); 

const dbFile = 'mydb.db'
const fs = require('fs')
if (fs.existsSync(dbFile))
  fs.unlinkSync(dbFile)
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const queries = {
  createData: 'CREATE TABLE data (name TEXT, val INTEGER, min INTEGER, max INTEGER);',
  insertData: 'INSERT INTO data(name, val, min, max) VALUES("temperature",0,15,35);INSERT INTO data(name, val, min, max) VALUES("light",0,15,35);',
  updateData: (temp, light) => `UPDATE data SET val=${temp} WHERE name="temperature";UPDATE data SET val=${light} WHERE name="light";`,
  selectData: 'SELECT * FROM data;',
}

app.post('/data', (req,res) => {
  console.log(req.body);
  if (req.body.temperature && req.body.light) {
    db.run(queries.updateData(req.body.temperature, req.body.light), updateErr => {
      if (updateErr)
        console.error(updateErr)
      else
        res.end('received');
    })
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
  db.run(queries.createData, createErr => {
    if (createErr)
      console.error(createErr)
    db.run(queries.insertData, insertErr => {
      if (insertErr)
        console.error(insertErr)
      const port = process.env.PORT || 8080;
      app.listen(port, () => console.log(`Listening on ${port}`));
    })
  })
})