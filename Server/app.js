const express=require('express');
require('./db/config');
const routes = require('./src/routers/userrouter');

const allroutes=express.Router();

allroutes.use('/users',routes);


module.exports=allroutes;