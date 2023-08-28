const http = require('node:http');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
//app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.urlencoded({extended: true}));
const hostname = '192.168.100.4';
const port = 3000;


app.get('/', (req, res) =>{
  res.render('index')
})
app.get('/scalera', (req, res) =>{
  res.render('scalera')
})
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const aaa = (req, res, next) => {
  console.log('aaa')
  next()
}

app.post('/add', jsonParser, aaa,  function(req,res) {
  console.log(req.body)
  res.render('scalera_board', {data:req.body})
});


app.listen(port, hostname)
