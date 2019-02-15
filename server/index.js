const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app =express();

app.use(bodyParser.json());



app.listen(3001,()=>{console.log('Ready to Rock on port 3001!')})