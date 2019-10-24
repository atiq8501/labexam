var express = require('express');
var router = express.Router();
router.get('/', (req,res)=>{
		if(req.cookies['username'] != null){
			res.render('admin/admin');		
		}else{
			res.redirect('/logout');
		}	
});

module.exports = router;