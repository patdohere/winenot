var MONGOHQ_URL = 'mongodb://winenot:winenot@troup.mongohq.com:10000/app22189880';

var mongodb = require('mongodb')
  , MongoClient = mongodb.MongoClient
  , BSON = mongodb.BSONPure

var collectionName = 'wines';

exports.findAll = function(req, res) {
  MongoClient.connect(MONGOHQ_URL, function(err, db) {
    var collection = db.collection(collectionName)
   
    collection.find({}).toArray(function(err, docs) {
      if (err) {
        return console.error(err)
      }
      return res.send(docs)
    })
  })
};

exports.findById = function(req, res) {
  MongoClient.connect(MONGOHQ_URL, function(err, db) {
    var collection = db.collection(collectionName)
   
    var o_id = new BSON.ObjectID(req.params.id);
    collection.findOne({'_id':o_id}, function(err, doc) {
      if (err) {
        return console.error(err)
      }
      return res.send(doc)
    })
  })
};

MongoClient.connect(MONGOHQ_URL, function(err, db) {

  var wines = [
    {
      "wine":"Cabernet Sauvignon",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"10-20 Years"
    },
    {
      "wine":"Malbec",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Mourvedre",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":""
    },
    {
      "wine":"Nero d'Avola",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Petit Verdot",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":""
    },
    {
      "wine":"Petite Sirah",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"3-5 Years"
    },
    {
      "wine":"Syrah",
      "type":"Bold Red",
      "color":"Deep Purple",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Sauvignon",
      "type":"Bold Red",
      "color":"Deep Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":""
    },
    {
      "wine":"Madeira",
      "type":"Dessert",
      "color":"Twany",
      "glass":"Dessert Wine Glass",
      "serving":"Room",
      "servingF":68,
      "servingC":20,
      "abvH":14,
      "abvL":20,
      "calL":190,
      "calH":290,
      "open":"1 Month",
      "storage":""
    },
    {
      "wine":"Marsala",
      "type":"Dessert",
      "color":"Twany",
      "glass":"Dessert Wine Glass",
      "serving":"Room",
      "servingF":68,
      "servingC":20,
      "abvH":14,
      "abvL":20,
      "calL":190,
      "calH":290,
      "open":"1 Month",
      "storage":""
    },
    {
      "wine":"Muscat",
      "type":"Dessert",
      "color":"Twany",
      "glass":"Dessert Wine Glass",
      "serving":"Room",
      "servingF":68,
      "servingC":20,
      "abvH":14,
      "abvL":20,
      "calL":190,
      "calH":290,
      "open":"1 Month",
      "storage":"5-10 Years"
    },
    {
      "wine":"Port",
      "type":"Dessert",
      "color":"Twany",
      "glass":"Dessert Wine Glass",
      "serving":"Room",
      "servingF":68,
      "servingC":20,
      "abvH":14,
      "abvL":20,
      "calL":190,
      "calH":290,
      "open":"1 Month",
      "storage":""
    },
    {
      "wine":"Sherry",
      "type":"Dessert",
      "color":"Twany",
      "glass":"Dessert Wine Glass",
      "serving":"Room",
      "servingF":68,
      "servingC":20,
      "abvH":14,
      "abvL":20,
      "calL":190,
      "calH":290,
      "open":"1 Month",
      "storage":""
    },
    {
      "wine":"Gruner Veltliner",
      "type":"Dry White",
      "color":"Green Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Sauvignon Blanc",
      "type":"Dry White",
      "color":"Green Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Albarino",
      "type":"Dry White",
      "color":"Platinum Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Gargenega",
      "type":"Dry White",
      "color":"Platinum Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"3-5 Years"
    },
    {
      "wine":"Pinot Gris",
      "type":"Dry White",
      "color":"Platinum Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Grenache",
      "type":"Light Red",
      "color":"Deep Pink",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"5-10 Years"
    },
    {
      "wine":"Grenache",
      "type":"Light Red",
      "color":"Pale Ruby",
      "glass":"Light Red Wine Glass",
      "serving":"Cool",
      "servingF":54,
      "servingC":12,
      "abvH":10,
      "abvL":15,
      "calL":120,
      "calH":180,
      "open":"2 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Pinot Noir",
      "type":"Light Red",
      "color":"Pale Ruby",
      "glass":"Light Red Wine Glass",
      "serving":"Cool",
      "servingF":54,
      "servingC":12,
      "abvH":10,
      "abvL":15,
      "calL":120,
      "calH":180,
      "open":"2 Days",
      "storage":"3-5 Years"
    },
    {
      "wine":"Carignan",
      "type":"Light Red",
      "color":"Pale Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":""
    },
    {
      "wine":"Gamay",
      "type":"Light Red",
      "color":"Ruby",
      "glass":"Light Red Wine Glass",
      "serving":"Cool",
      "servingF":54,
      "servingC":12,
      "abvH":10,
      "abvL":15,
      "calL":120,
      "calH":180,
      "open":"2 Days",
      "storage":"1-3 Years"
    },
    {
      "wine":"Sangioverse",
      "type":"Medium Red",
      "color":"Deep Pink",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"5-10 Years"
    },
    {
      "wine":"Tempranillo",
      "type":"Medium Red",
      "color":"Deep Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"5-10 Years"
    },
    {
      "wine":"Barbera",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"3-5 Years"
    },
    {
      "wine":"Cabernet Franc",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Merlot",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"4-7 Years"
    },
    {
      "wine":"Sangioverse",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Tempranillo",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"5-10 Years"
    },
    {
      "wine":"Zinfandel",
      "type":"Medium Red",
      "color":"Deep Violet",
      "glass":"Bold Red Wine Glass",
      "serving":"Cellar",
      "servingF":62,
      "servingC":17,
      "abvH":12,
      "abvL":17,
      "calL":150,
      "calH":200,
      "open":"4 Days",
      "storage":"3-5 Years"
    },
    {
      "wine":"Nebbiolo",
      "type":"Medium Red",
      "color":"Pale Ruby",
      "glass":"Light Red Wine Glass",
      "serving":"Cool",
      "servingF":54,
      "servingC":12,
      "abvH":10,
      "abvL":15,
      "calL":120,
      "calH":180,
      "open":"2 Days",
      "storage":"10-20 Years"
    },
    {
      "wine":"Zinfandel",
      "type":"Medium Red",
      "color":"Pale Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"3-5 Years"
    },
    {
      "wine":"Semillon",
      "type":"Rich White",
      "color":"Deep Gold",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"3-5 Years"
    },
    {
      "wine":"Semillon",
      "type":"Rich White",
      "color":"Platinum Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"3-5 Years"
    },
    {
      "wine":"Merlot Rose",
      "type":"Rose",
      "color":"Deep Pink",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":""
    },
    {
      "wine":"Cabernet Rose",
      "type":"Rose",
      "color":"Deep Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":""
    },
    {
      "wine":"Pinot Noir Rose",
      "type":"Rose",
      "color":"Pale Salmon",
      "glass":"Standard Wine Glass",
      "serving":"Cold",
      "servingF":48,
      "servingC":9,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":""
    },
    {
      "wine":"Muscadet",
      "type":"Sparkling",
      "color":"Almost Clear",
      "glass":"Sparkling Wine Flute",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":120,
      "calH":160,
      "open":"2 Days",
      "storage":""
    },
    {
      "wine":"Riesling",
      "type":"Sparkling",
      "color":"Almost Clear",
      "glass":"Sparkling Wine Flute",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":120,
      "calH":160,
      "open":"2 Days",
      "storage":""
    },
    {
      "wine":"Sparkling Wine",
      "type":"Sparkling",
      "color":"Almost Clear",
      "glass":"Sparkling Wine Flute",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":120,
      "calH":160,
      "open":"2 Days",
      "storage":""
    },
    {
      "wine":"Vinho Verde",
      "type":"Sparkling",
      "color":"Almost Clear",
      "glass":"Sparkling Wine Flute",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":120,
      "calH":160,
      "open":"2 Days",
      "storage":"1-3 Years"
    },
    {
      "wine":"Chenin Blanc",
      "type":"Sweet White",
      "color":"Deep Gold",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Chenin Blanc",
      "type":"Sweet White",
      "color":"Pale Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Gewurtraminer",
      "type":"Sweet White",
      "color":"Pale Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    },
    {
      "wine":"Moscato",
      "type":"Sweet White",
      "color":"Pale Yellow",
      "glass":"White Wine Glass",
      "serving":"Ice Cold",
      "servingF":43,
      "servingC":6,
      "abvH":9,
      "abvL":14,
      "calL":110,
      "calH":170,
      "open":"1 Week",
      "storage":"1-3 Years"
    }
  ]

  // operate on the collection named "test"
  var collection = db.collection(collectionName)
 
  collection.remove(function(err, result) {
    if (err) {
      return console.error(err)
    }
  })
  // remove all records in collection (if any)
  console.log('removing documents...')
  collection.remove(function(err, result) {
    if (err) {
      return console.error(err)
    }
    console.log('collection cleared!')
    // insert two documents
    console.log('inserting new documents...')
    collection.insert(wines, function(err, docs) {
      if (err) {
        return console.error(err)
      }
      console.log('just inserted ', docs.length, ' new documents!')
      collection.find({}).toArray(function(err, docs) {
        if (err) {
          return console.error(err)
        }
        console.log('database populated')
      })
    })
  })
})