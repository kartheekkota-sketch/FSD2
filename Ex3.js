const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

//middleware
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

//configure session middle ware
app.use(session({
    secret: 'mysecretkey',
    resave:false,
    saveUninitialized: true,
    cookie:{maxAge: 60000}
}));

//home route
app.get('/',(req,res)=>{
    if(req.session.username){
        res.send(`Welcome back,${req.session.username}!<br><br>
            <a href="/logout">Logout</a>`);
    }else{
        res.send(`
            <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Enter your user name" required>
            <button type="submit">Login</button>
            </form>
            `);
    }
});

app.post('/login',(req,res)=>{
    const {username} = req.body;
    req.session.username = username;
    res.redirect('/');
});

//logout route
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
    res.clearCookie('connect.sid');
    res.send(`Logged out successfully. <br>
        <a href="/">Login again</a>`);
});
});

//Start server
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});