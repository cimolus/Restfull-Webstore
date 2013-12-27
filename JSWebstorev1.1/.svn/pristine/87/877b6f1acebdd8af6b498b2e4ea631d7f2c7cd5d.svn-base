/**
 * Created by Alex on 07.12.13.
 */

WEBSTORE.PaginationService = {
    currentPage: 1,
    pageCount: null,
    paginator : null,

    paginatorTemplate: function() {
        console.log("WEBSTORE.PaginationService.paginatorTemplate()");
        var paginator = '<ul>';
        for( var i = 1; i <= WEBSTORE.PaginationService.pageCount; i++ ) {
            paginator += '<li onclick="WEBSTORE.GoodsService.loadProducts(this)">' + i + '</li>'
        }
        paginator += '</ul>';
        WEBSTORE.PaginationService.paginator = paginator;
        WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.paginatorReady );
    },

    loadPageCount: function() {
        $.ajax({
            type: 'GET',
            url: WEBSTORE.config.domain + 'product/count/page/' + WEBSTORE.config.pageSize,
            success: function(response) {
                WEBSTORE.PaginationService.pageCount = response;
                WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.pageCountLoaded );
            },
            error: function() {
                alert("Error!");
            }
        });
    },

    loadPaginator: function() {
        console.log("WEBSTORE.PaginationService.loadPaginator()");
        if ( WEBSTORE.PaginationService.paginator === null) {
            WEBSTORE.PaginationService.loadPageCount();
        }
    },

    renderPaginator: function() {
        document.getElementById("paginator").innerHTML = WEBSTORE.PaginationService.paginator;
    }

};