var Table = [
  // Meat
  [
    [0,2,1,0,0,0,0,0,0,0],
    [0,1,1,2,1,0,0,1,2,1],
    [0,1,2,0,1,0,0,1,0,0],
    [0,0,1,2,1,2,1,1,0,0],
    [0,0,0,0,0,0,1,2,0,0],
    [0,0,0,0,0,1,2,1,0,0],
    [0,0,0,0,1,2,1,0,1,0]
  ],
  [
    [0,2,1,1,0,0,0,1,1,0],
    [0,0,0,2,1,1,1,1,0,0],
    [0,1,2,1,1,0,0,1,0,1],
    [2,1,1,1,0,0,0,0,1,0],
    [0,0,0,0,0,1,2,1,1,0]
  ],
  [
    [0,0,1,2,1,2,1,1,1,1],
    [0,1,2,0,1,0,1,1,1,2],
    [2,1,0,1,1,1,1,1,1,0]
  ],
  [
    [0,1,2,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,2,1,0,0],
    [0,0,0,0,2,1,0,0,1,0],
    [0,1,2,0,1,0,0,0,1,0],
    [0,1,2,2,0,2,0,0,0,0],
    [0,0,0,1,1,1,1,1,2,0],
    [0,0,1,0,1,0,2,1,0,0]
  ],
  [
    [0,2,1,0,0,0,0,0,0,0],
    [0,1,2,0,1,0,1,1,1,0],
    [0,0,0,0,0,0,1,1,2,0],
    [0,0,1,1,1,1,2,0,0,0],
    [0,0,1,0,1,0,0,0,1,2],
    [0,0,2,1,1,0,0,1,2,0]
  ],
  [
    [0,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,0,0,2,0],
    [0,0,0,0,1,0,0,0,2,0],
    [0,1,1,1,1,1,1,1,1,0]
  ],
  [
    [0,0,0,0,0,0,0,1,2,1],
    [0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,2]
  ]
]

var MONGOHQ_URL = 'mongodb://winenot:winenot@troup.mongohq.com:10000/app22189880';

var mongodb = require('mongodb')
  , MongoClient = mongodb.MongoClient
  , BSON = mongodb.BSONPure

var collectionName = 'matchmap';

MongoClient.connect(MONGOHQ_URL, function(err, db) {
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
    var counter = 0

    for (var a = 6; a >= 0; a--) {  
      for (var b = 4; b >= 0; b--) {  
        for (var c = 2; c >= 0; c--) {  
          for (var d = 6; d >= 0; d--) {  
            for (var e = 5; e >= 0; e--) {  
              for (var f = 3; f >= 0; f--) {  
                for (var g = 2; g >= 0; g--) {  
                  
                  for (var i = 9; i >= 0; i--) {
                    var x = [a, b, c, d, e, f, g];
                    var y = [0,0,0,0,0,0,0,0,0,0];
                    y[i] = y[i] +
                    Table[0][a][i] +
                    Table[1][b][i] +
                    Table[2][c][i] +
                    Table[3][d][i] +
                    Table[4][e][i] +
                    Table[5][f][i] +
                    Table[6][g][i];

                    counter = counter + 1;
                    console.log('inserting'+counter+'document...'+x)
                    collection.insert({'input':x, 'output':y}, function(err, docs) {
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
                  };
                };    
              };
            };
          };
        };
      };
    };
  })
})