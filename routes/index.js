var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

var boolean=false;

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
var cart = new Cart({});
router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  Product.findById(productId, function (err, product) {
      cart.add(product, product.id);
    
      res.redirect('/');
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var ca = new Cart(cart.items);

  cart.reduceByOne(productId);
  
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var ca = new Cart(cart.items);

  cart.removeItem(productId);
 
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function (req, res, next) {
 
  var ca = new Cart(cart.items);

  res.render('shop/shopping-cart', {products: ca.generateArray(), totalPrice: ca.totalPrice});
});

module.exports = router;