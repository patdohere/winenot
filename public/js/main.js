window.Wine = Backbone.Model.extend({
  urlRoot:"/wines",
  idAttribute:"_id"
})

window.WineCollection = Backbone.Collection.extend({
  model:Wine,
  url:"/wines",

  filterByAttrVal: function(attr, value) {
    return this.filter(function(wine){
      return (wine.get(attr) == value);
    })
  }
})


var wineList = new WineCollection();
wineList.fetch({success: function(){console.log('fetched data')}});



// Wine Viewer
window.WineView = Backbone.View.extend({
  tag: 'li',
  className: 'wine',

  initialize: function(){
    _.bindAll(this,'render');
   // this.model.bind('change', this.render);
    this.template = _.template($('#wine-template').html());

  },


  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});



window.WineListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var wines = this.model.models;
        var len = wines.length;

        // tag to append all the WineViews
        $(this.el).html('<ul class="thumbnails"></ul>');

        for (var i = 0; i < len; i++) {
            $('.thumbnails', this.el).append(new WineView({model: wines[i]}).render().el);
        }

        return this;
    }
});

//
window.Match = function(array) {
  if (array.length != 7)
    return console.log('Invalid Input');

  var max = 0;
  var maxIdx = 0;
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
      console.log('ajsdif');
      max = temp[i];
      maxIdx = i;
    }
  };

  return temp+' max:'+max+' maxID:'+maxIdx;
  // if (maxIdx == 0) {
  //   return 'No Match';
  // } else if (maxIdx == 1) {
  //   return 'Bold Red';
  // }

}

var MatchTable = [
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