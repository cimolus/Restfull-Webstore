/**
 * Created by Alex on 18.12.13.
 */
WEBSTORE.namespace("WEBSTORE.Paginator");

WEBSTORE.Paginator = (function() {

    var queries = WEBSTORE.Queries;

    var paginator = null;
    var pageCount = null;

    var paginatorTemplate = function() {
        paginator = '<ul>';
        for( var i = 1; i <= pageCount; i++ ) {
            paginator += '<li onclick="WEBSTORE.GoodsService.loadProductsOnPage(' + i + ')">' + i + '</li>'
        }
        paginator += '</ul>';
        return paginator;
    };

    var loadPagesCount = function() {
        $.getJSON(queries.getPagesCountQuery(), function(response) {
            pageCount = response;
            WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.goodsEvent.pageCountLoaded );
        });
    };

    return {

        init: function() {
            loadPagesCount();
        },

        pageCountLoadedHandler : function() {
            WEBSTORE.Paginator.hide();
            $("#paginator").html( paginatorTemplate() );
        },

        show: function() {
            $("#paginator").show();
        },

        hide: function() {
            $("#paginator").hide();
        }
    };

}());

