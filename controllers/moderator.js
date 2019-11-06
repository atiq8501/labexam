var express = require('express');
var usermodel = require('./../models/usermodel');
var router = express.Router();
router.get('*',(req,res,next)=>{
	var loggedin=req.cookies['username'];
	usermodel.getByUsername(loggedin,(result)=>{
		if( result.status!=2)
			res.redirect('/logout');
		else
			next();
	})
});
router.get('/',(req,res)=>{
		if(req.cookies['username'] != null)
			res.render('moderator/moderator');		
		else
			res.redirect('/logout');
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

	var f=req.files.myfiles;
	  console.log(req.files.myfiles.name);

	  console.log("File ext: ");
});

router.get('/viewcontent',(req,res)=>{
    usermodel.getAllContent((result)=>{
        res.render('moderator/viewcontent',result);
    });
});

module.exports = router;