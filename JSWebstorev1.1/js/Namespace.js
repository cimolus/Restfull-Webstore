/**
 * Created by Alex on 17.12.13.
 */

var WEBSTORE = WEBSTORE || {};

WEBSTORE.namespace = function (namespace) {
    var parts = namespace.split('.'),
    parent = WEBSTORE,
        i;
    if (parts[0] === "WEBSTORE") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};