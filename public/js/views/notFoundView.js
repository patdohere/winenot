window.NotFoundView = Backbone.View.extend({

  initialize:function () {
    console.log("NotFoundView Initalized");
    this.render();
  },

  render:function () {
    $(this.el).html(this.template());
    return this;
  }
});