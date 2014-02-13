(function($){
	var Wine = Backbone.Model.extend({

	});

	window.Wines = Backbone.Collection.extend({
		model: Wine,
        url: "/wine"
	});

	window.wine = new Wine({
      "name": "Merlot",
      "type": "Medium Red",
      "color": "b42424",
      "fruit": [
        "Cherry",
        "Raspberry",
        "Plum"
      ],
      "other": [
        "Graphite",
        "Cedar",
        "Tobacco",
        "Vanilla",
        "Clove",
        "Mocha"
      ],
      "oak": "Yes. Usually medium oak aging",
      "tannin": "Medium",
      "acidity": "Medium",
      "abv": "12% - 15%",
      "region": ["france", "italy", "us", "australia", "chile", "argentina"]
    });

    window.WineView = Backbone.View.extend({
        template: "#wine-template",
        tag: 'li',
        className: 'wine',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeTemplate();
        },
        
        initializeTemplate: function() {
            this.template = _.template($(this.template).html());
        },

        render: function() {

            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

})(jQuery);
