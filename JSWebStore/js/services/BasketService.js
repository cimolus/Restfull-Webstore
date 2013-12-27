/**
 * Created by Alex on 15.12.13.
 */

WEBSTORE.BasketService = {

    JSESSIONID: null,

    checkProduct: function() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/webstore/basket/has/' + WEBSTORE.GoodsService.product.id ,
            success: function( response ) {
                $('.addToBasketButton').text( ( response )? 'Из корзины' : 'В корзину' );
            },
            error: function() {
                alert("Error!");
            }
        });
    },

    toogleProduct: function() {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/webstore/basket/' + WEBSTORE.GoodsService.product.id,
            success: function(response) {
                alert(response);
                $('.addToBasketButton').text( ( response )? 'Из корзины' : 'В корзину' );
            },
            error: function() {
                alert("Error!");
            }
        });
    }

};
