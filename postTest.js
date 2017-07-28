const { post } = require('request');

post('http://localhost/data', { json: { temperature: 20, light: 15 } }, (err, res, body) => {
  if (!err && res.statusCode == 200)
    console.log(body)
});

