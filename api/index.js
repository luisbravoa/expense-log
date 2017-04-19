
let express = require('express'); 
let app = express(); 

let data = require('./mockData');


process.on('uncaughtException', function (err) {
  console.log(err);
});

app.get('/api/categories', function (req, res) {
  res.send(data.categories);
}); 
app.get('/api/expenses', function (req, res) {
  res.send(data.expenses);
}); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}); 

