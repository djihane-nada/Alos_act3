const express = require('express')
const app = express()
const products = require('./products.json')
var parseInt = require('parse-int');

app.use(express.json())
app.use(logErrors);
app.use(productsErrorHandler);
app.use(errorHandler);

//Find all products
app.get('/products', (req,res) => {
    res.status(200).json(products)
})


 
//Find products details
app.get('/products/:id', (req,res) => {
    
    const id = parseInt(req.params.id)
    const products = products.find(products => products.id === id)
    res.status(200).json(products)
})

//creates a products
app.post('/products', (req,res) => {
    products.push(req.body)
    res.status(200).json(products)
})

//updates a products
app.put('/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let products = products.find(products => products.id === id)
    products.name =req.body.name,
    products.sku=req.body.sku,
    products.salePrice =req.body.salePrice,
    res.status(200).json(products)
})

//Deletes a products
app.delete('/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let products = products.find(products => products._id === id)
    products.splice(products.indexOf(products),1)
    res.status(200).json(products)
})


//Development-only error handler
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  }
  function productsErrorHandler(err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      next(err);
    }
  }
  function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
  }



app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})
