const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jung', { useNewUrlParser: true,  useUnifiedTopology: true});

//mongod --dbpath 경로

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
//false는 String, Object 타입만 받을 수 있음
//true는 어느 타입이든 다 받을 수 있음 

app.use(router);

app.listen(port, function(err){
    if(err) console.log(err);
    console.log("서버가 가동되었습니다."); 
})
