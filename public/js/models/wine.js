window.Wine = Backbone.Model.extend({

});


WineView = Backbone.View.extend({
	template : '#wine-template',
	tag: 'li',
	className: 'wine',

	initialize: function(){
		_.bindAll(this,'render');
		this.bind('change', this.render);
		this.initializeTemplate();
	},

	initializeTemplate: function(){
		 this.template = _.template($('#wine-template').html());
	},

	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
 
		return this;
	}


});

window.WineRack = Backbone.Collection.extend({
  model: Wine,
  url: "/winerack",

  initialize: function(){

  },

  render: function(){

  }
});