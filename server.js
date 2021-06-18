require("dotenv").config();
const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(express.urlencoded({
    extended: false
  }));
app.use(express.json({ type: 'application/json' }));
app.use(cors());
app.use('/', require('./server/route/funcionariosRoute'));

app.listen(3000,()=>{
    console.log('Start');
})