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
	url: "/winerack"
});

window.WineRackView = Backbone.View.extend({
	tagName: 'ul',
    className: 'winerack',

	initialize: function(){
 		_.bindAll(this, 'render');
        this.template = _.template($('#winelist-template').html());
         this.collection.bind('reset', this.render);
	},


	render: function(){
            var $wines,
                collection = this.collection;

            $(this.el).html(this.template({}));
            $wines = this.$(".wines");
            this.collection.each(function(wine) {
                var view = new WineView({ model: wine});
                console.log(view.model);
                console.log($(this.el));
                $('#container').append(view.render().el);
               // $(this.el).append(view.render().el);
            });

            return this;
        }
});
