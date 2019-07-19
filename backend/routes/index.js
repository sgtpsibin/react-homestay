const express = require('express');
const router = express.Router();
const homestay = require('../models/homestayList');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
	
});

router.get('/api/datahomestay',(req, res, next)=> {	
	
	homestay.find(req.query,'',{limit: 10},function(err,docs){
		if(err) {
			res.json({
				"status": "Failed",
				"data":[],
				"Message": `Error is ${err}`
			});

		}else {

			res.json({
				"status":"OK",
				"data": docs
			});

		}
	});
	
});

module.exports = router;
