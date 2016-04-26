var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN_CORGI);

var Corgi = require('./models/corgis');

Corgi.remove({}, function(err) {
  if (err) {
    console.error(err);
  }
});

var corgis = [
  {
    name: "Hank",
    age: 7,
    url: 'http://i.imgur.com/FX97E9N.png',
  },
  {
    name: 'Potter',
    age: 2,
    url: 'http://i.imgur.com/udGQXaf.png'
  },
  {
    name: 'Scrappy',
    age: 4,
    url: 'http://i.imgur.com/8lb7srg.png'
  },
  {
    name: 'T-Bone',
    age: 3,
    url: 'http://i.imgur.com/FQtvxO0.png'
  },
  {
    name: 'Muffin',
    age: 6,
    url: 'http://i.imgur.com/FQtvxO0.png'
  },
];

corgis.forEach(function (corgi) {
  var newCorgi = new Corgi(corgi);
  newCorgi.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(newCorgi.name + ' was successfully saved');
      if (corgi.name === 'Muffin') {
        console.log('SEEDING IS DONE. Press control + C to end');
      }
    }
  });
});
