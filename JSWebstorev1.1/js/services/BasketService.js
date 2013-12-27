/**
 * Created by Alex on 19.12.13.
 */

WEBSTORE.namespace("WEBSTORE.BasketService");

WEBSTORE.BasketService = (function() {

    var basket = WEBSTORE.Basket;

    var save = function() {
        localStorage.setItem('basket', JSON.stringify(basket.getProducts()));
    };

    var getArrayProducts = function() {
        var products = [];
        var i = 0;
        for( var key in basket.getProducts() ) {
            products[i++] = Number(key);
        }
        return products;
    };

    return {

        init: function() {
            console.log("init basket");
            console.log(basket.getProducts());
            if ( localStorage.getItem('basket') ) {
                basket.setProducts( JSON.parse(localStorage.getItem('basket')));
            }
            save();
        },

        checkProduct: function(id) {
            if ( basket.hasProduct(id)) {
                $(".addToBasketButton").text("Из корзины");
            } else $(".addToBasketButton").text("В корзину");

        },

        toogleProduct: function(id) {
            if ( basket.hasProduct(id) ) {
                basket.deleteProduct(id);
            } else {
                basket.addProduct(id);
            }
            WEBSTORE.BasketService.checkProduct(id);
            save();
        },

        orderProducts: function() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/webstore/basket/order",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function() {
                    alert("Order");
                }
            });
        },

        showBasket: function() {
            $('#basketWindow').show();
            WEBSTORE.GoodsService.loadProductsInBasket();
        },

        closeBasket: function() {
            $('#basketWindow').hide();
        },

        getProductsFromBasket: function() {
            return getArrayProducts;
        }



    };

}());
