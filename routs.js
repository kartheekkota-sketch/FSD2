const express = require("express");

const app = express();
const port = 5000;
app.use(express.json());
let users={
    1:{id:528,name:'harsh',email:'harsh@gmail'},
    2:{id:522,name:'sher', email:'sher@gmail.com'}
}

app.post('/users',(req,res)=>{
    const {id,name,email} = req.body;
    if (!id || !name || !email){
        return res.status(400).send('Please provide id,name, email');
    }
    if (users[id]){
        return res.status(409).send('User already exists!');
    }

    users[id] = {id,name,email};
    res.status(201).json(users[id]);
});

app.get('/users',(req,res)=>{
   res.json(Object.values(users));
});

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    if(!user){
        return res.status(404).send('User not found');
    }
    res.json(user);
});

app.delete('/users/:id',(req,res)=>{
    const id = req.params.id;
     if(!users){
        return res.status(404).send('User not found');
    }
    delete user[id];
    res.send(`User with ID ${id} deleted`);

});

app.put('/users/:id',(req,res)=>{
    const id = req.params.id;
    const {name,email}=req.body;
    if(!users){
        return res.status(404).send('User not found');
    }

    if(!name || !email){
        return res.status(400).send('Please provide both name and email');
    }
    users[id].name = name;
    users[id].email = email;
    res.send(`User with ID ${id} updated sucessfully`)
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});