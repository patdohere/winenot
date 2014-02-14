var Winenot = Backbone.Router.extend({
  routes: {
    ""              : "home"
  },

  initialize: function(){
  },

  home: function(){
    if (!this.homeView) {
      this.homeView = new HomeView();
    }
    $('#content').html(this.homeView.el);
  }
});

utils.loadTemplate(['NotFoundView', 'HomeView'], function(){
  app = new Winenot();
  Backbone.history.start();
})