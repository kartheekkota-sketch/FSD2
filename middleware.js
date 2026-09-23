const express = require("express");

const app = express();

const port = 5000;

app.use((req,res,next)=>{
    console.log("middleware is running... ");

    if(10<20){
        console.log("condition is true");
        next();
    }
    else{
        res.send("condition is false");
    }
});

app.get("/", (req,res)=>{
    res.send("welcome to express");
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});