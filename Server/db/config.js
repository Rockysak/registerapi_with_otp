const mongoose = require('mongoose');

// const connection = mongoose.connect('mongodb://127.0.0.1:27017/registers').then(()=>{

// console.log('DB is connected')
// });

const connection = mongoose.connect('mongodb://localhost:27017/registers').then(() => {

    console.log('DB is connected')
});

module.exports = connection;