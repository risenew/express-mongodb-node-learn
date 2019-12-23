const express = require('express');
const router = express.Router();

router.post('/login',function(req,res,next){
	let username = req.body.username;
	let password = req.body.password;
	if(username=="ruiwei88888@163.com"&&password=="123456"){
         res.cookie('user',username);
         res.send({
         	 status:'success',
         	 info:'欢迎来到德莱联盟'
         })
	}else{
       res.send({
       	  status:'fail',
       	  info:'登录失败'
       })
	}
})

module.exports = router;