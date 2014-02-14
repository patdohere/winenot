window.NavBarView = Backbone.View.extend({
  initialize:function () {
    console.log("NavBarView Initalized");
    this.render();
  },

  render:function () {
    $(this.el).html(this.template());
    return this;
  }
})