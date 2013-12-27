/**
 * Created by Alex on 22.12.13.
 */
WEBSTORE.namespace("WEBSTORE.AuthService");

WEBSTORE.AuthService = (function() {

    var queries = WEBSTORE.Queries;

    var username = null;
    var password = null;

    var init = function() {
        clear();
        username = $("#j_username").val();
        password = $("#j_password").val();
    };

    var clear = function() {
        username = null;
        password = null;
    }

    return {
        login: function() {
            init();
            $.ajax({
                type: "POST",
                url: queries.springSecurityCheck(),
                data: {
                    j_username: username,
                    j_password: password
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function() {
                    WEBSTORE.AuthService.isAuthenticated();
                }
            });
        },

        isAuthenticated: function() {
            $.ajax({
                type: "GET",
                url: queries.checkAuthentication(),
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function(response) {
                    $('.authorithation').html(WEBSTORE.Template.getAuth(response));
                }
            });
        },

        logout: function() {
            $.ajax({
                type: "GET",
                url: queries.logout(),
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function(response) {
                    $('.authorithation').html(WEBSTORE.Template.getNonAuth());
                },
                error: function() {
                    $('.authorithation').html(WEBSTORE.Template.getNonAuth());
                }
            });
        }
    }

}());

