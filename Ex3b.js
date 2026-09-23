const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Dummy user data

const USERS ={
    admin:{ password: 'admin'},
    user:{password: 'user@123'},
    harsh:{password: 'harsh@123'}
};

app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        secret: 'authSecret',
        resave: false,
        saveUninitialized: true

    })
);

//Logim Forn

app.get('/',(req,res)=>{
    if(req.session.username){
        res.send(`
            Welcome, ${req.session.username}! 
            <br><br>
            <a href="/dashboard">Dashboard</a><br>
            <a href="/logout">Logout</a>
            `);
    }else{
        res.send(`
            <form method="POST" action="/login">
              <input name="username" placeholder="Username" required><br><br>
              <input type="password" name ="password" placeholder="Password" required><br><br>
              <button type="submit">Login</button>
              </form>
              `);
    }
});

//Login Handler
app.post('/login',(req, res) =>{

    const {username, password} = req.body;

    const user = USERS[username];

    if(user && user.password === password){
        req.session.username = username;
        res.redirect('/');
    }else{
        res.status(401).send(`
            Invalid Credentials.
            <a href="/">Try Again</a>
            `);
    }
});

//logout

app.get('/logout',(req,res) =>{

    req.session.destroy(()=>{
        res.send(`
            Logged Out Sucessfully.
            <a href="/">Login Again</a>
            `);
    });
});

app.get('/dashboard', (req, res) =>{
    if(req.session.username){
        res.send(`
            Hello ${req.session.username},
            Welcome to your Dashboard.
            <br><br>
            <a href="/logout">Logout</a>
            `);
    }
});

app.listen(PORT,()=>{
    console.log(`Sever unning at http://localhost:${PORT}`);
});