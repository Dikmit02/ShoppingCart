var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const prod=await Product.find().lean();
  var productChunks = [];
  var chunkSize = 3;
  for (var i = 0; i < prod.length; i += chunkSize) {
      productChunks.push(prod.slice(i, i + chunkSize));
  }
  
  res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  }
  catch(e){
    res.render("Error ",e)
  }

});

module.exports = router;