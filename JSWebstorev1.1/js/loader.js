/**
 * Created by Alex on 18.12.13.
 */

WEBSTORE.namespace("WEBSTORE.Loader");

WEBSTORE.Loader = (function() {

    var init = function() {
        WEBSTORE.EventService.init();
        WEBSTORE.Paginator.init();
        WEBSTORE.BasketService.init();
        WEBSTORE.AuthService.isAuthenticated();
    }();

}());