//Request Most Viewed products based on category abcat0107000 otherwise known as “TV & Home Theater Accessories.” 

const jwt = require("jsonwebtoken");
module.exports=function(require)
{

    var bby = require('bestbuy')('YourAPIKey');
    bby.recommendations('mostViewed','abcat0107000').then(function(data){
      console.log(data);
    });

};