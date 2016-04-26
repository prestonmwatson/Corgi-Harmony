var express = require('express');
var router = express.Router();

var corgi = [{
 firstName: "Hank",
 age: 7,
 url: "http://i.imgur.com/FX97E9N.png"
}, {
 firstName: "Jr.",
 age: 3,
 url: "http://i.imgur.com/udGQXaf.png"
}, {
 firstName: "Muffin",
 age: 5,
 url: "http://i.imgur.com/8lb7srg.png"
},
{
 firstName: "T-bone",
 age: 6,
 url: "http://i.imgur.com/FQtvxO0.png"
},
{
firstName: "Scrappy",
age: 2,
url: "http://i.imgur.com/FQtvxO0.png"
}];

function setCorgi(req, res, next) {

 var index = Math.floor(Math.random()* corgi.length);
 res.corgi = corgi[index];
 next();
}


/* GET corgi page. */
router.get('/', setCorgi, function(req, res, next) {
 console.log(corgi.url);
 res.render('index', { title: 'Express', name: res.corgi.firstName, age: res.corgi.age, url: res.corgi.url });

});



module.exports = router;
