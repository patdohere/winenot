window.Wine = Backbone.Model.extend({
  urlRoot:"/wines",
  idAttribute:"_id"
})

window.WineCollection = Backbone.Collection.extend({
  model:Wine,
  url:"/wines"

  
})

var wineList = new WineCollection();
wineList.fetch({success: function(){console.log('fetched data')}});

window.WineView = Backbone.View.extend({

})

window.WineCollectionView = Backbone.View.extend({

})