WEBSTORE.GoodsService = {

    currentPage: 1,

	products : null,

    product: null,

	productTemplate : '<h2 class="productName">{name}</h2>'
			+ '<p class="description">{description}</p>'
            + '<div class="imagesContainer"></div>'
			+ '<p class="detaileDescription">{detaileDescription}</p>'
			+ '<div class="price">{price}</div>'
            +'<button onclick="WEBSTORE.BasketService.toogleProduct()" class="addToBasketButton"></button>'
            +'<hr>'
            +'<div id="showComments">Показать комментарии</div>'
    ,

	productsTemplate: 
		'{#.}'
		 +'<article>'
			+'<img class="gImg" id="gImg{id}" prodId="{id}" src="" onclick="WEBSTORE.pages.detaileProduct({id})"/>'
			+'<div class="content">'
				+ '<h3>{name}</h3>'
				+ '<p class="description">{description}</p>'
				+ '<h6>Price: {price}</h6>'
				+ '<span onclick="WEBSTORE.pages.detaileProduct({id})">Подробнее</span>'
			+'</div>'
		 +'</article>'
		+'{/.}',		

    loadProducts: function(el) {
        WEBSTORE.GoodsService.currentPage = parseInt(el.innerText);
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/webstore/product/page/' + WEBSTORE.GoodsService.currentPage +'/size/' + WEBSTORE.config.pageSize,
            success: function(response) {
                WEBSTORE.GoodsService.products = response;
                WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.productsLoaded );
                console.log("WEBSTORE.GoodsService.loadProducts()");
            },
            error: function() {
                alert("Error!");
            }
        });
    },

    renderProducts: function() {
        WEBSTORE.TemplateBuilder.buildTemplate(WEBSTORE.GoodsService.productsTemplate, WEBSTORE.GoodsService.products );
    },

    loadProductById: function(id) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/webstore/product/' + id,
            success: function(response) {
                WEBSTORE.GoodsService.product = response;
                WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.productLoaded );
                console.log("WEBSTORE.GoodsService.loadProductById()");
            },
            error: function() {
                alert("Error!");
            }
        });
    },

    renderProduct: function() {
        WEBSTORE.TemplateBuilder.buildProductTemplate( WEBSTORE.GoodsService.productTemplate, WEBSTORE.GoodsService.product );
    }

};
