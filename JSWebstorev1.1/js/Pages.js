/**
 * Created by Alex on 18.12.13.
 */
WEBSTORE.namespace("WEBSTORE.Pages");

WEBSTORE.Pages = (function() {

    var homePageContent = "HomePage";

    return {

        home: function() {
            WEBSTORE.Paginator.hide();
            $("#content").html(homePageContent);
        },

        products: function() {
            WEBSTORE.Paginator.show();
            WEBSTORE.GoodsService.loadProductsOnPage(1);
        },

        product: function(id) {
            WEBSTORE.Paginator.hide();
            WEBSTORE.GoodsService.loadProductById(id);
        },

        basket: function() {

        }
    };

}());

$(document).ready(function() {
    WEBSTORE.Pages.home();
});
