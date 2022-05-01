const express = require('express')
const router = express()
const Controller2 = require('./controllers/produits');






 //GET
 router.get('/produits', Controller2.getproduit);
 //GET WITH ID
 router.get('/produits/:id',Controller2.idgetproduit);
 //POST
 router.post('/produits',Controller2.postproduit);
 //PUT
 router.put('/produits/:id',Controller2.putproduit);
 //DELETE
 router.delete('/produits/:id',Controller2.deleteproduit);


module.exports = router;