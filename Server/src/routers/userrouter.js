const express=require('express');

const {reguser,otpuser}  = require('../controllers/usercontroller');

const routes = express.Router();

const details = require('../../emailpass');

routes.post('/generateotp',reguser);

routes.post('/registeruser',otpuser)

module.exports=routes;