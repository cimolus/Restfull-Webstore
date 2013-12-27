/**
 * Created by Alex on 17.12.13.
 */
WEBSTORE.namespace("WEBSTORE.EventService");

WEBSTORE.EventService = (function(){

    var addEventHandler = function(event, handler) {
        $(WEBSTORE.EventService).bind(event, handler);
    };

    return {

        goodsEvent: {
            productLoaded : "productLoaded",
            productsLoaded : "productsLoaded",
            pageCountLoaded: "pageCountLoaded",
            commentsLoaded: "commentsLoaded",
            productsFromBasketLoaded: "productsFromBasketLoaded"
        },

        init: function() {
            addEventHandler(WEBSTORE.EventService.goodsEvent.productLoaded, WEBSTORE.GoodsService.productLoadedHandler );
            addEventHandler(WEBSTORE.EventService.goodsEvent.productsLoaded, WEBSTORE.GoodsService.productsLoadedHandler );
            addEventHandler(WEBSTORE.EventService.goodsEvent.pageCountLoaded, WEBSTORE.Paginator.pageCountLoadedHandler );
            addEventHandler(WEBSTORE.EventService.goodsEvent.commentsLoaded, WEBSTORE.CommentService.commentsLoadedHandler );
            addEventHandler(WEBSTORE.EventService.goodsEvent.productsFromBasketLoaded, WEBSTORE.GoodsService.productsFromBasketLoaded );
        },


        fireEvent : function(event) {
            $(WEBSTORE.EventService).trigger(event);
        }

    };

}());