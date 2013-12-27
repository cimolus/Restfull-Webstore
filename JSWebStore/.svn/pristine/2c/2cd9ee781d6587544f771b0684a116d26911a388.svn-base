WEBSTORE.ImagesService = {

    imagesTemplate:
        '{#.}'
            +'<img src="{imageUrl}"/>'
        +'{/.}',

    loadImages: function() {

        var images = $('.gImg');

        for( var i = 0; i < images.length; i++ ) {
            var id = images[i].getAttribute("prodId");
            var imgId = images[i].getAttribute("id");
            WEBSTORE.ImagesService.loadImage(id,imgId);
        }

    },

    loadImage: function(id, imgId) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/webstore/product/' + id + '/image/',
            success: function(response) {
                //alert(imgId);
                //document.body.getElementById(imgId).src = response.imageUrl;
                //alert(response.imageUrl);
                $('#' + imgId ).attr("src",response.imageUrl);
            },
            error: function() {
                alert("Error!");
            }
        });
    },

    loadAllImagesByProductId: function() {
        var id = WEBSTORE.GoodsService.product.id;
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/webstore/product/' + id + '/images/',
            success: function(response) {
                WEBSTORE.TemplateBuilder.buildSimpleTemplate(WEBSTORE.ImagesService.imagesTemplate, response);
            },
            error: function() {
                alert("Error!");
            }
        });
    }
};