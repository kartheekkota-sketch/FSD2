const express = require('express');
const app = express();

app.use(express.json());

let users ={
    1:{id :1201,name:'UCEN', email:'1201@gmail.com'},
    2:{id: 1202, name:'UCEN', email:'1202@gmail.com'}
};

app.get('/',(req,res)=>{
    res.send('Welcome to the User API!');
});

app.get('/users',(req,res)=>{
    const name = req.query.name;
    let result = Object.values(users);
    if(name){
        result = result.filter(user => user.name.toLowerCase() === name.toLowerCase());

    }
    res.json(result);
});
app.get('/users/:id',(req,res)=>{
     const user = users[req.params.id];
     if(user){
        res.json(user);
     }else{
        res.status(404).send('User not found');
     }
});

app.get('/build-url/:id',(req,res)=>{
    const id = req.params.id;
    const fullUrl=`${req.protocol}://${req.get('host')}/users/${id}`;
    res.send(`User URL: ${fullUrl}`);  
});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
});