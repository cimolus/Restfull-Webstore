WEBSTORE.Utils = {

    addTemplateScript: function(script) {
        WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.templateLoaded );
    },

    addScript : function(script) {
        var element = document.createElement('script');
        element.setAttribute("type", "text/javascript");
        element.setAttribute("src", script );
        document.head.appendChild(element);
    }
};
