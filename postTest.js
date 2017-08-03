const { post } = require('request');

/*post('http://localhost:8080/data', {form:{temperature:19,light:14}}, (err, res, body) => {
  if (!err && res.statusCode == 200)
    console.log(body)
});*/

//post('https://murmuring-reaches-74774.herokuapp.com/data', {form:{temperature:19,light:14}}, (err, res, body) => {
post('http://murmuring-reaches-74774.herokuapp.com:80/data', {form:{temperature:19,light:14}}, (err, res, body) => {
  if (!err && res.statusCode == 200)
    console.log(body)
});
