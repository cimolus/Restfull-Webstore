/**
 * Created by Alex on 20.12.13.
 */
WEBSTORE.namespace("WEBSTORE.Basket");

WEBSTORE.Basket = ( function() {

    var products = {};

    return {

        getProducts: function() {
            return products;
        },

        setProducts: function(newProducts) {
            products = newProducts;
        },

        addProduct: function(id) {
            products[id] ="";
        },

        deleteProduct: function(id) {
            delete  products[id];
        },

        hasProduct: function(id) {
            if( id in products ) {
                return true;
            } else return false;
        }

    };

}() );