const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb")
     .then(()=> console.log("MongoDb Connected"))
     .catch(err =>{
        console.error("MongoDB connection error: ");
        console.error(err);
     });

//Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

//Create Model
const User = mongoose.model("User",userSchema);

//Create POST/Users
app.post('/users',async (req,res)=>{
    const {name,email} = req.body;

    const newUser = new User ({
        name,
        email
    });
    await newUser.save();

    res.status(201).json(newUser);
});

//Read -get/users
app.get('/users',async (req,res)=>{

    const users = await User.find();

    res.json(users);
});

//Upadte -put/users
app.put('/users/:id',async(req,res)=>{

    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updateUser);
});

//Delete -delete/user/:id
app.delete('/users/:id',async(req,res)=>{

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "User deleted"
    });
});

//start server
app.listen(3000, () =>{
  console.log("Server running on http://localhost:3000");
});