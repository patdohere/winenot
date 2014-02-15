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

window.HomeView = Backbone.View.extend({

})

window.AppRouter = Backbone.Router.extend({
  routes: {
    ""            : "home",
    "learn"       : "learn",
    "eat"         : "eat",
    "wines"       : "wines",
    "wines/:id"   : "winesDetail"
  },

  initialize: function() {
    console.log("Welcome to Wine Not?")
  },

  home: function() {

  },

  wines: function() {
    console.log('wines route');
    var wineList = new WineCollection();
    wineList.fetch({success: function(){ 
      wlv = new WineListView({model:wineList});
      $('#content').html(wlv.render().el);}});
   
    console.log(wineList);
  }
})

app = new AppRouter();
Backbone.history.start();


