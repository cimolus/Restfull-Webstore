/**
 * Created by Alex on 08.12.13.
 */

WEBSTORE.EventService = {

    templateLoaded: "templateLoaded",
    templateRendered: "templateRendered",
    productsLoaded: "productsLoaded",
    productLoaded: "productLoaded",
    pageCountLoaded: "pageCountLoaded",
    paginatorReady: "paginatorReady",
    productTemplateRendered: "productTemplateRendered",



    addEventHandler: function(event, callback) {
        $(WEBSTORE.EventService).bind(event, callback);
    },

    fireEvent: function(event) {
        $(WEBSTORE.EventService).trigger(event);
    },

    fireEventWithParam: function(event, param ) {
        $(WEBSTORE.EventService).trigger(event,[ param ]);
    },

    init: function() {

        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.productsLoaded, WEBSTORE.GoodsService.renderProducts );
        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.productLoaded, WEBSTORE.GoodsService.renderProduct );
        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.pageCountLoaded, WEBSTORE.PaginationService.paginatorTemplate );
        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.paginatorReady, WEBSTORE.PaginationService.renderPaginator );

        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.templateRendered, WEBSTORE.ImagesService.loadImages);
        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.productTemplateRendered, WEBSTORE.ImagesService.loadAllImagesByProductId);
        WEBSTORE.EventService.addEventHandler( WEBSTORE.EventService.productTemplateRendered, WEBSTORE.BasketService.checkProduct );


        WEBSTORE.EventService.addEventHandler( $('#home').on('click') , WEBSTORE.pages.home()  );
        WEBSTORE.EventService.addEventHandler( $('#productsList').on('click') , WEBSTORE.pages.products  );

    }

};

$(document).ready(function(){
    $( window ).resize(function() {
        WEBSTORE.TemplateBuilder.resizeContainer();
    });
});

