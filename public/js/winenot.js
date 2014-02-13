(function($){
	window.Wine = Backbone.Model.extend({});

	window.Wines = Backbone.Collection.extend({
		model : Wine,

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

})(jQuery);
