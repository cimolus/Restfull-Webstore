

WEBSTORE.TemplateBuilder = {

	buildTemplate: function(template, data) {
		var compiled = dust.compile(template, "name");
		dust.loadSource(compiled);
		dust.render("name", data, function(err, out) {
			var el = document.getElementById("content");
			el.innerHTML = out;
            WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.templateRendered );

		});
	},

    buildProductTemplate: function( template , data ) {

        var compiled = dust.compile(template, "name");
        dust.loadSource(compiled);
        dust.render("name", data, function(err, out) {
            var el = document.getElementById("content");
            el.innerHTML = out;

            WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.productTemplateRendered );

        });
    },

    buildSimpleTemplate: function( template, data ) {
        var compiled = dust.compile(template, "name");
        dust.loadSource(compiled);
        dust.render("name", data, function(err, out) {
            $('.imagesContainer').html(out);
        });
    },

    resizeContainer: function() {
        /*var height =  $(window).height();
        height -= 120;
        $('.container').css("height",height);*/
    }
	
};


