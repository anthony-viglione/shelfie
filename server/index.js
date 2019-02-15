require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive')

const app =express();

app.use(bodyParser.json());

const {CONNECTION_STRING} = process.env
// console.log(CONNECTION_STRING)

massive(CONNECTION_STRING).then((dbInstance)=>{
    app.set('db',dbInstance)
    app.listen(3001,()=>{console.log('Ready to Rock on port 3001!')})
})

app.get('/api/inventory', controller.getInventory)