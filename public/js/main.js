/*var Winenot = Backbone.Router.extend({
  routes: {
    ""               : "home",
    "notFound"      : "notFound"
  },

  initialize: function(){
    this.navBarView = new NavBarView();
    $('#header').html(this.navBarView.el);
  },

  home: function(){
    if (!this.homeView) {
      this.homeView = new HomeView();
    }
    $('#content').html(this.homeView.el);
  },

  notFound: function() {
    if (!this.notFoundView) {
      this.notFoundView = new NotFoundView();
    }
    $('#content').html(this.notFoundView.el);
  }
});

utils.loadTemplate(['NotFoundView', 'HomeView', 'NavBarView', 'WineView'], function(){
  app = new Winenot();
  Backbone.history.start();
})*/

    wine = new Wine({ 
        name: 'pinot noir',
        type: 'the best',
        color: 'meow',
        glass: 'BIG',
        serving: '100OZ',
        servingf: '1',
        servingc: '2',
        alcohol: '400'
    });
    wineView = new WineView({model:wine});
    $('#container').append(wineView.render().el);
