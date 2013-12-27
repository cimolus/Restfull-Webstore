/**
 * Created by Alex on 19.12.13.
 */
WEBSTORE.namespace("WEBSTORE.CommentService");

WEBSTORE.CommentService = (function() {

    var queries = WEBSTORE.Queries;

    var comments = null;

    return {

        loadCommentsByProductId: function(productId) {
            $.getJSON(queries.getCommentsByProductId(productId), function(response) {
                comments = response;
            });
        },

        commentsLoadedHandler: function() {
            WEBSTORE.TemplateBuilder.buildTemplate(  WEBSTORE.Template.getCommentsTemplate(),  comments  );
        }

    };

}());