var express = require('express');
var router = express.Router();
router.get('/', function(request, response){

		if(request.cookies['username'] != null){
			response.render('member/member');		
		}else{
			response.redirect('/logout');
		}	
});
module.exports = router;
