/**
 * Created by Alex on 18.12.13.
 */
WEBSTORE.namespace("WEBSTORE.TemplateBuilder");

WEBSTORE.TemplateBuilder = (function() {

    return {

        buildTemplate: function(template, data) {
            var compiled = dust.compile(template, "name");
            dust.loadSource(compiled);
            dust.render("name", data, function(err, out) {
                $("#content").html(out);
                WEBSTORE.BasketService.checkProduct( WEBSTORE.GoodsService.getProduct().id );
            });
        },

        buildBasketTemplate: function( template, data ) {
            var compiled = dust.compile(template, "name2");
            dust.loadSource(compiled);
            dust.render("name2", data, function(err, out) {
                $("#productsBox").html(out);
            });
        }

    };

}());