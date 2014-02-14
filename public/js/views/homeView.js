window.HomeView = Backbone.View.extend({
  
  initialize:function () {
    console.log("HomeView Initalized");
    this.render();
  },

  render:function () {
    $(this.el).html(this.template());
    return this;
  }
})