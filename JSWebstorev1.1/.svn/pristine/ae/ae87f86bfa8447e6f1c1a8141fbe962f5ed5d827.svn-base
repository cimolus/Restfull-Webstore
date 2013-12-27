WEBSTORE.pages = {

	home : function() {
		var html = "<p>Home page</p>";
		var el = document.getElementById("content");
		el.innerHTML = html;
        $("#paginator").hide();
	},

	products: function() {
        $("#paginator").show();
        var el = document.createElement('li');
        el.innerText = 1;
        WEBSTORE.GoodsService.loadProducts(el);

	},

    detaileProduct: function(id) {
        $("#paginator").hide();
        WEBSTORE.GoodsService.loadProductById(id);
    }

};
