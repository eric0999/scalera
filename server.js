const http = require('node:http');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res) =>{
  res.render('index')
})
app.get('/scalera', (req, res) =>{
  res.render('scalera')
})

app.post('/add', function(req,res) {
  console.log(res);
  //res.json(req.body);
});

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const hostname = '192.168.254.108';
const port = 3000;
const server = app.listen(port, hostname)
