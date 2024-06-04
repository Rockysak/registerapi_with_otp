const express = require('express');
require('./db/config');
const allroutes = require('./app');

const cors = require('cors');



const app = express();

app.use(express.json());

app.use(cors());




app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Running"
    })
})

app.use(allroutes);

app.listen(5000,()=>{

    console.log("Server is running on 5000")
})