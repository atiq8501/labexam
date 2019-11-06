var express = require('express');
var usermodel=require('./../models/usermodel');
var router = express.Router();

router.get('*',(req,res,next)=>{
	var loggedin=req.cookies['username'];
	usermodel.getByUsername(loggedin,(result)=>{
		if( result.status!=1)
			res.redirect('/logout');
		else
			next();
	})
});
router.get('/', (req,res)=>{
		if(req.cookies['username'] != null)
			res.render('admin/index');		
		else
			res.redirect('/logout');
		
});
router.get('/adduser', (req,res)=>{
	res.render('admin/adduser');
});
router.get('/viewprofile', (req,res)=>{
	var loggedinuser=req.cookies['username'];
	usermodel.getByUsername(loggedinuser,(result)=>{
		var obj={
			name: result.name,
			username: result.username
		}
		res.render('admin/profile',obj);
	});
});

router.get('/viewcontent', (req,res)=>{
	usermodel.getAllContent((result)=>{
			res.render('admin/viewcontent',result);
	});
});

router.post('/adduser', (req,res)=>{
	var adduserobj={
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	}
	usermodel.insert(adduserobj,(status)=>{
			if(status){
				console.log('User added to the databse');
				res.redirect('/admin/adduser');
			}
			else
				res.send('failed');
	});
});
module.exports = router;