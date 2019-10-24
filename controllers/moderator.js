var express = require('express');
var usermodel = require('./../models/usermodel');
var router = express.Router();
router.get('/',(req,res)=>{
		if(req.cookies['username'] != null){
			res.render('moderator/moderator');		
		}else{
			res.redirect('/logout');
		}	
});
router.get('/viewprofile',(req,res)=>{
    var loggedinuser=req.cookies['username'];
	usermodel.getByUsername(loggedinuser,(result)=>{
		var obj={
			name: result.name,
			username: result.username
		}
		res.render('moderator/profile',obj);
	});
});

router.get('/additem',(req,res)=>{
    res.render('moderator/additem');
});

router.post('/additem',(req,res)=>{
    
});

router.get('/viewcontent',(req,res)=>{
    usermodel.getAllContent((result)=>{
        res.render('moderator/viewcontent',result);
    });
});

module.exports = router;