var express = require('express');
var usermodel=require('./../models/usermodel');
var router = express.Router();
router.get('*',(req,res,next)=>{
	var loggedin=req.cookies['username'];
	usermodel.getByUsername(loggedin,(result)=>{
		if( result.status!=3){
			res.redirect('/logout');
		}else{
			next();
		}
	})
});
router.get('/', (req,res)=>{
		if(req.cookies['username'] != null){
			res.render('member/member');		
		}else{
			res.redirect('/logout');
		}	
});

module.exports = router;