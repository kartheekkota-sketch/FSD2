const express = require('express');
const mongoose = require('mongoose');

const app = express();

const User = {
    1:{name:'harsh'},
    2:{name:'karthee'}
};


app.get('/',(req,res)=>{
    res.send("example js ");

   
});

app.get('/User',(req,res)=>{
    res.send(User);
});

app.put('/User/:id',(req,res)=>{
    
})

app.listen(5000,()=>{
    console.log(`server runnimg at http://localhost:5000`);
});
