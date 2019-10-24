var express=require('express');
var port = 800;
var app=express();
var ejs=require('ejs');
var login=require('./controllers/login');
var logout=require('./controllers/logout');
var member=require('./controllers/member');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/login',login);
app.use('/member',member);
app.use('/logout',logout);



app.get('/',(req,res)=>{
    res.render('home/home');
})
app.listen(port, ()=>{
    console.log('app is running in port: '+port.toString());
});

