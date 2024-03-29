const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require("dotenv").config();
// Init App
const app = express();
app.set('deviceKey', 'Prem_Maurya');
const http = require('http').Server(app); 
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});
require("./DbConnection");

//Route Define
//var byke = require('./routes/bike')(app,io);
var area = require('./routes/areaManage')();
var vechile = require('./routes/vechileManage')(app,io);
var users = require('./routes/users')();
var driver = require('./routes/driver')();
//var testsocket = require('./routes/testsocket')(io);
var forests = require('./routes/forests')();


app.use(bodyParser.json({limit: '500000mb'}));
app.use(bodyParser.urlencoded({limit: '500000mb', extended: true, parameterLimit: 10000000000}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-with, Accept, Authorization, authorization');
  res.header('Access-Control-Allow-Methods','OPTIONS,GET, POST, PUT, DELETE');
   next();
});
 app.use(cors({
    exposedHeaders: ['Authorization', 'authorization'],
  }));
  



// app.get('/', function(req, res) {
//   res.sendfile('index.html');
// });

//app.use('/api', testsocket);
app.use('/api', users);
app.use('/api', area);
app.use('/api', vechile);
app.use('/api', driver);
app.use('/api', forests);
// app.get('/', function(req, res) {
//   res.sendfile('index.html');
// });


http.listen(3001,(err)=>{
    if(err) throw err;
      console.log('Listing To port http://localhost:3001');
})
  