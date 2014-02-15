window.Match = function(array) {
  if (array.length != 7)
    return console.log('Invalid Input');

  var max = 0;
  var maxIdx = -1;
  var temp = [];

  for (var i = 0; i < 9; i++) {
    temp[i] =
    MatchTable[0][array[0]][i] +
    MatchTable[1][array[1]][i] +
    MatchTable[2][array[2]][i] +
    MatchTable[3][array[3]][i] +
    MatchTable[4][array[4]][i] +
    MatchTable[5][array[5]][i] +
    MatchTable[6][array[6]][i];

    if (max < temp[i]) {
      max = temp[i];
      maxIdx = i;
    }
  };

  console.log(temp+' max:'+max+' maxID:'+maxIdx);


  switch(maxIdx+1)
  {
  case 1:
    return 'Bold Red';
  case 2:
    return 'Medium Red';
  case 3:
    return 'Light Red';
  case 4:
    return 'Rose';
  case 5:
    return 'Rich White';
  case 6:
    return 'Dry White';
  case 7:
    return 'Sparkling';
  case 8:
    return 'Sweet White';
  case 9:
    return 'Dessert';
  default:
    return null;
  }

}

window.MatchTable = [
  // Meat
  [
    [0,0,0,0,0,0,0,0,0],
    [2,1,0,0,0,0,0,0,0],
    [1,1,2,1,0,0,1,2,1],
    [1,2,0,1,0,0,1,0,0],
    [0,1,2,1,2,1,1,0,0],
    [0,0,0,0,0,1,2,0,0],
    [0,0,0,0,1,2,1,0,0],
    [0,0,0,1,2,1,0,1,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [2,1,1,0,0,0,1,1,0],
    [0,0,2,1,1,1,1,0,0],
    [1,2,1,1,0,0,1,0,1],
    [2,1,1,1,0,0,0,0,1],
    [0,0,0,0,1,2,1,1,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [0,1,2,1,2,1,1,1,1],
    [1,2,0,1,0,1,1,1,2],
    [2,1,0,1,1,1,1,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [1,2,1,1,1,1,1,1,0],
    [0,0,0,0,0,2,1,0,0],
    [0,0,0,2,1,0,0,1,0],
    [1,2,0,1,0,0,0,1,0],
    [1,2,2,0,2,0,0,0,0],
    [0,0,1,1,1,1,1,2,0],
    [0,1,0,1,0,2,1,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [2,1,0,0,0,0,0,0,0],
    [1,2,0,1,0,1,1,1,0],
    [0,0,0,0,0,1,1,2,0],
    [0,1,1,1,1,2,0,0,0],
    [0,1,0,1,0,0,0,1,2],
    [0,2,1,1,0,0,1,2,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,0,0,2,0],
    [0,0,0,1,0,0,0,2,0],
    [1,1,1,1,1,1,1,1,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,2,1],
    [0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,2]
  ]
];